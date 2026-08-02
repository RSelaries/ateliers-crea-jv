<script>
    import { base } from "$app/paths"; 
    import DocsNavbar from "./DocsNavbar.svelte"
    import ViewableImage from "./ViewableImage.svelte";

    let opened = $state(false);

    function onResize() {opened = false;}

    $effect(() => {
        if (opened) {
            document.querySelector("body").className += "burger-menu-opened";
        } else {
            let className = document.querySelector("body").className;
            document.querySelector("body").className = className.replace('burger-menu-opened', '');
        }

        window.addEventListener("resize", onResize);
        return () => {window.removeEventListener("resize", onResize);}
    });
</script>


<button onclick={() => opened = !opened} class="{opened ? 'opened' : ''} burger-btn" aria-label="Toggle page navbar">
</button>

<button aria-label="Close page navbar" onclick={() => opened = false} class="navbar-wrapper {opened ? 'opened' : ''}">
    <div class="navbar-background">
        <div style="display:flex; flex-direction: column; justify-content: start; gap: 2rem;">
            <div style="display: var(--header-titles-burger-display); flex-direction: column; gap: 0.5rem;">
                <a href="{base}/" class="site-title">Ateliers gamedev</a>
                <a href="https://github.com/RSelaries/ateliers-gamejam" class="logo">Repo Github</a>
            </div>
            <DocsNavbar burgerMenu={true}></DocsNavbar>
        </div>
        <div class="gradient"></div>
    </div>
</button>


<style>
    .burger-btn {
        display: var(--docs-navbar-burger-display);
        width: 24px;
        height: 24px;
        margin: 0;
        padding: 0;
        border: none;
        mask-image: url("$lib/assets/icons/burger-menu.svg");
        mask-position: center center;
        mask-size: 100% 100%;
        mask-repeat: no-repeat;
        background-color: var(--text-color);
    }
    .burger-btn.opened {
        mask-image: url("$lib/assets/icons/burger-menu-close.svg");
    }
    .burger-btn:hover {
        cursor: pointer;
    }

    .navbar-wrapper {
        display: none;
        z-index: -1;
        display: none;
        background-color: #0004;
        backdrop-filter: blur(2px);
        position: absolute;
        border: none;
        margin: 0;
        padding: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
    }
    .navbar-wrapper.opened {
        flex-direction: column;
        display: var(--docs-navbar-burger-display);
    }

    .navbar-background {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
        color: var(--text-color);
        padding: 4rem;
        padding-top: 5rem;
        padding-bottom: 0;
        /* width: 100%; */
        background-color: var(--panel-color);
        border: 1px solid var(--border-color);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        max-height: calc(100% - 250px);
        overflow: auto;

        .gradient {
            position: sticky;
            bottom: -1px;
            left: 0;
            width: 100%;
            min-height: 4rem;
            background-image: linear-gradient(to top, var(--panel-color) 20%, #0000 100%);   
        }
    }
</style>