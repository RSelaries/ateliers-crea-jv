<script>
    import { afterNavigate } from '$app/navigation';
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import pages from "$lib/pages";

    let { burgerMenu = false } = $props();
    let openedPage = $state("");
    
    afterNavigate(highlightOpenedPage);

    function highlightOpenedPage() {
        var path = location.pathname;
        var pathClassName = path.replaceAll("/", "-");
        if (pathClassName.startsWith("-")) {
            pathClassName = pathClassName.substring(1);
        }
        openedPage = pathClassName;
    }
</script>


<nav style={burgerMenu ? "display: flex;" : ''}>
    <!-- Categories -->
    {#each pages.docs as category}
    <details class="category" open>
        <summary>{category.title}</summary>
        <ol>
            <!-- Pages -->
            {#each category.pages as page}
            <li class="page">
                {#if page.subpages}
                <details open>
                    <summary>
                        <a class="{category.slug+(page.slug ? '-' + page.slug : '') == openedPage ? 'opened' : ''}" href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}">
                            <div style="mask-image: url({base}/{page.icon});" class="page-icon"></div>{page.title}
                        </a>
                    </summary>
                    <ol class="subpages-list">
                        <!-- Subpages (if there are any) -->
                        {#each page.subpages as subpage}
                        <li>
                            <a class="subpage {category.slug}{page.slug ? '-' + page.slug : ''}-{subpage.slug}" href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}/{subpage.slug}">
                                <div style="mask-image: url({base}/{subpage.icon});" class="page-icon"></div>{subpage.title}
                            </a>
                        </li>
                        {/each}
                    </ol>
                </details>
                {:else}
                <a class="{category.slug+(page.slug ? '-' + page.slug : '') == openedPage ? 'opened' : ''}" href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}">
                    <div style="mask-image: url({base}/{page.icon});" class="page-icon"></div>{page.title}
                </a>
                {/if}
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

    .category li.page > details:open {
        ol.subpages-list {
            margin: 0;
            padding-left: 20px;
    
            li::marker {
                content: none;
            }
        }
    }

    .category ol {
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
    li.page details summary::marker { content: ''; }
</style>