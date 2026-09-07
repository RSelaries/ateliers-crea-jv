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


<nav class={burgerMenu ? "burger-menu" : ""}>
    <!-- Categories -->
    {#each pagesTree.docs as category}
    <details class="category" open>
        <summary>{category.title}</summary>
        <ol>
            <!-- Pages -->
            {#each category.pages as page}
            <!-- If subpages -->
            {#if page.subpages}
            <li class="page">
                {#if openedPage.includes(base+'/'+category.slug+(page.slug ? '/' + page.slug : ''))}
                <details open>
                    <summary class="opened">
                        <div style="mask-image: url({base}/{page.icon});" class="page-icon"></div>{page.title}
                    </summary>
                    <ol>
                        <li><a class="{base+'/'+category.slug+(page.slug ? '/' + page.slug : '') == openedPage ? 'opened' : ''}" href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}">
                            Atelier
                        </a></li>
                        {#each page.subpages as subpage}
                        <li><a class="{base+'/'+category.slug+(page.slug ? '/' + page.slug : '')+'/'+subpage.slug == openedPage ? 'opened' : ''}" href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}/{subpage.slug}">
                            {subpage.title}
                        </a></li>
                        {/each}
                    </ol>
                </details>
                {:else}
                <details>
                    <summary>
                        <div style="mask-image: url({base}/{page.icon});" class="page-icon"></div>{page.title}
                    </summary>
                    <ol>
                        <li><a class="{base+'/'+category.slug+(page.slug ? '/' + page.slug : '') == openedPage ? 'opened' : ''}" href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}">
                            Atelier
                        </a></li>
                        {#each page.subpages as subpage}
                        <li><a class="{base+'/'+category.slug+(page.slug ? '/' + page.slug : '')+'/'+subpage.slug == openedPage ? 'opened' : ''}" href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}/{subpage.slug}">
                            {subpage.title}
                        </a></li>
                        {/each}
                    </ol>
                </details>
                {/if}
            </li>
            <!-- If no subpages -->
            {:else}
            <li class="page">
                <a class="{base+'/'+category.slug+(page.slug ? '/' + page.slug : '') == openedPage ? 'opened' : ''}" href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}">
                    <div style="mask-image: url({base}/{page.icon});" class="page-icon"></div>{page.title}
                </a>
            </li>
            {/if}
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
        width: min-content;
    }
    nav.burger-menu {
        display: flex;
        font-size: 18px;

        details.category > summary {
            font-size: 22px;
        }
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
        user-select: none;
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
    li.page a:hover, li.page a.opened,
    li.page li:has(a.opened), li.page li:has(a):hover,
    li.page details > summary.opened {
        color: var(--nav-titles-color);
        .page-icon {
            background-color: var(--nav-titles-color);
        }
    }

    li.page:has(details) {
        details > summary {
            display: flex;
            flex-direction: row;
            align-items: center;
            cursor: pointer;
            width: 100%;
        }
        details > summary:hover {
            color: var(--nav-titles-color);
            .page-icon {
                background-color: var(--nav-titles-color);
            }
        }
    }
</style>
