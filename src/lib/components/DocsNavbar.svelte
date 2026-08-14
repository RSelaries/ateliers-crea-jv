<script>
    import { afterNavigate } from '$app/navigation';
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { pagesTree } from "$lib/pages";

    let { burgerMenu = false } = $props();
    let openedPage = $state("");
    
    afterNavigate(highlightOpenedPage);

    function highlightOpenedPage() {
        var path = location.pathname;
        var pathClassName = path;
        openedPage = pathClassName;
    }
</script>


<nav style={burgerMenu ? "display: flex;" : ''}>
    <!-- Categories -->
    {#each pagesTree.docs as category}
    <details class="category" open>
        <summary>{category.title}</summary>
        <ol>
            <!-- Pages -->
            {#each category.pages as page}
            <li class="page">
                <a class="{base+'/'+category.slug+(page.slug ? '/' + page.slug : '') == openedPage ? 'opened' : ''}" href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}">
                    <div style="mask-image: url({base}/{page.icon});" class="page-icon"></div>{page.title}
                </a>
            </li>
            {/each}
        </ol>
    </details>
    {/each}
</nav>


<style>
    nav {
        font: var(--nav-font-style);
        margin: 0;
        margin-right: 2rem;
        display: var(--docs-navbar-main-display);
        flex-direction: column;
    }


    /* Categories */
    details.category {
        margin-bottom: 15px;
    }
    details.category > summary::marker { content: none; }
    details.category > summary:hover { cursor: pointer; }
    details.category > summary {
        font: var(--title-font-style);
        font-size: 20px;
        padding-left: 28px;
        padding-top: 3px;
        background-image: url('$lib/assets/icons/folder-closed.svg');
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: top left;
    }
    details.category:open > summary {
        background-image: url('$lib/assets/icons/folder-opened.svg');
    }

    .category > ol {
        margin: 10px 0;
        padding: 0;
    }

    /* Pages */
    li.page::marker { content: none; }
    li.page {
        padding-left: 20px;
    }
    li.page .page-icon {
        margin-right: 6px;
        min-width: 16px;
        height: 16px;
        mask-size: 16px 16px;
        mask-position: center center;
        mask-repeat: no-repeat;
        background-color: var(--text-color);
    }
    li.page a {
        color: var(--text-color);
        text-decoration: none;
        display: flex;
        flex-direction: row;
    }
    li.page a:hover {
        text-decoration: underline dashed;
    }
    li.page a:hover, li.page a.opened {
        color: var(--nav-titles-color);
        .page-icon {
            background-color: var(--nav-titles-color);
        }
    }

    /* Sub pages */

</style>