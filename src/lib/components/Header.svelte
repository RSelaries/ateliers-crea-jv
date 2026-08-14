<script>
    import { afterNavigate } from '$app/navigation';
    import { base } from '$app/paths';
    import BurgerMenu from './BurgerMenu.svelte'

    let { onTitlePage = false } = $props();

    afterNavigate(() => {
        onTitlePage = window.location.pathname === base + "/";
    });
</script>


<header>
    <nav>
        <div class="container">
            <BurgerMenu></BurgerMenu>
            <a href="{base}/" class="site-title {onTitlePage ? 'on-title-page' : ''}" style="display: var(--header-titles-display);">Ateliers gamedev</a>
        </div>
        <div class="container">
            <a style="display: var(--header-titles-display);" target="_blank" href="https://discord.gg/t54yvf8aT">Server Discord</a>
            |
            <a style="display: var(--header-titles-display);" target="_blank" href="https://github.com/RSelaries/ateliers-crea-jv">Repo Github</a>
        </div>
    </nav>
</header>


<style>
    header {
        width: 100%;
        padding: 0;
        margin: 0;
        position: sticky;
        z-index: 5;
        top: 0;
    }
    nav {
        border-bottom: solid 1px var(--border-color);
        background-color: var(--panel-color);
        padding: 10px calc(2rem + var(--article-margin));
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 0px 15px #0007;
    }
    header :global(.site-title) {
        font: var(--title-font-style);
        font-size: 20px;
        padding-top: 2px;
        text-transform: uppercase;
    }
    .on-title-page {
        color: var(--titles-color);
    }
    header :global(a) {
        text-decoration: none;
        color: var(--body-text-color);
        font: var(--nav-font-style);
    }
    header :global(a):hover {
        text-decoration: underline dashed;
    }
    .container {
        gap: 1rem;
        display: flex;
        align-items: center;
    }
</style>