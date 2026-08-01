<script>
    import { afterNavigate } from "$app/navigation"
    import { tick } from "svelte"

    let headings = $state([])
    let activeId = $state(null)

    afterNavigate(() => {
        headings = document.getElementById("docs-article").querySelectorAll("h1, h2, h3, h4, h5, h6");
    });

    function updateActiveHeading() {
        const offset = 50;
        let current = null;

        for (const heading of headings) {
            if (heading.getBoundingClientRect().top - offset <= 0) {
                current = heading;
            } else {
                break;
            }
        }

        activeId = current ? (current.id != '' ? current.id : null) : headings[0]?.id ?? null;
    }

    $effect(() => {
        let ticking = false;

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateActiveHeading();
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    })
</script>


<nav class="page-summary">
    {#each headings as heading}
    <a href="#{heading.id}" class="{heading.id === activeId ? 'active' : ''}">
        {@html heading.outerHTML}
    </a>
    {/each}
</nav>


<style>
    nav {
        margin: 0;
        font-family: Lineal;
        width: var(--side-bars-size);
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
    }
    
    a {
        text-decoration: none;
        color: var(--text-color-muted);
    }
    a:hover {
        color: var(--text-color);
    }
    a.active {
        color: var(--highlight-color);
    }

    @media (max-width: 1300px) {
        nav {
            display: none;
        }
    }
    
    :global(.page-summary h1) {
        font-family: Basteleur;
        font-weight: bold;
        font-size: 20px;
        margin-top: 0;
    }

    :global(.page-summary h2, .page-summary h3, .page-summary h4, .page-summary h5, .page-summary h6) {
        font-size: 16px;
        font-weight: normal;
        margin: 0;
        padding: 0;

        background-position: center left;
        background-repeat: no-repeat;
    }
    :global(.page-summary h3) {
        padding-left: 20px;
        background-image: url('$lib/assets/icons/h3-piece.svg');
        background-size: 16px 16px;
    }
    :global(.page-summary h4) {
        padding-left: 36px;
        background-image: url('$lib/assets/icons/h4-piece.svg');
    }
    :global(.page-summary h5) {
        padding-left: 52px;
        background-image: url('$lib/assets/icons/h5-piece.svg');
    }
    :global(.page-summary h6) {
        padding-left: 68px;
        background-image: url('$lib/assets/icons/h6-piece.svg');
    }
</style>