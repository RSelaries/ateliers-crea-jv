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
            <BurgerMenu {onTitlePage}></BurgerMenu>
            <a href="{base}/" class="site-title {onTitlePage ? 'on-title-page' : ''}">Ateliers gamedev</a>
        </div>
        <a href="https://github.com/RSelaries/ateliers-gamejam" class="logo">Repo Github</a>
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
    .site-title {
        font: var(--title-font-style);
        font-size: 20px;
        padding-top: 2px;
        text-transform: uppercase;
    }
    .on-title-page {
        color: var(--titles-color);
    }
    a {
        text-decoration: none;
        color: var(--body-text-color);
        font: var(--nav-font-style);
    }
    a:hover {
        text-decoration: underline dashed;
    }
    .container {
        gap: 1rem;
        display: flex;
        /* align-items: center; */
    }
</style>