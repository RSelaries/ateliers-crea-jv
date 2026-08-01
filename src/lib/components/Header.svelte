<script>
    import { afterNavigate } from '$app/navigation';
    import { base } from '$app/paths';

    let { onTitlePage = false } = $props();

    afterNavigate(() => {
        onTitlePage = window.location.pathname === base + "/";
    });
</script>


<header>
    <nav>
        <a href="{base}/" class="site-title {onTitlePage ? 'on-title-page' : ''}">Ateliers gamedev</a>
        <a href="https://github.com/RSelaries/ateliers-gamejam" class="logo">Repo Github</a>
    </nav>
</header>


<style>
    header {
        width: 100%;
        padding: 0;
        margin: 0;
        border-bottom: solid 1px var(--border-color);
        background-color: var(--panel-color);
        position: sticky;
        z-index: 5;
        top: 0;
    }
    nav {
        padding: 10px 60px;
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
</style>