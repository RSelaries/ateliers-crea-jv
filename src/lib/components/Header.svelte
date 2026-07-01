<header>
    <nav>
        <div>
            <a href="https://github.com/RSelaries/ateliers-gamejam" class="logo">Repo Github</a>
        </div>
        <div>
            <a id="github-issues" href="https://github.com/RSelaries/ateliers-gamejam/issues/new" target="_blank">Suggérer un changement</a>
        </div>
    </nav>
</header>


<style>
    header {
        width: 100vw;
        padding: 0;
        margin: 0;
        border-bottom: solid 1px var(--border-color);
        background-color: var(--panel-color);
    }
    nav {
        padding: 5px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 0px 15px #0007;
    }
    .logo {
        cursor: pointer;
        font-weight: 500;
    }
    .logo:hover {
        color: var(--highlight-color);
    }
    a {
        text-decoration: none;
        color: var(--body-text-color);
    }
    nav > div {
        display: flex;
        align-items: center;
        gap: 15px;
    }
</style>