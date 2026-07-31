<script>
    import pages from "$lib/pages";
    import { base } from "$app/paths";
</script>


<nav>
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
                        <a href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}">
                            <div style="mask-image: url({base}/{page.icon});" class="page-icon"></div>{page.title}
                        </a>
                    </summary>
                    <ol class="subpages-list">
                        <!-- Subpages (if there are any) -->
                        {#each page.subpages as subpage}
                        <li>
                            <a class="subpage" href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}/{subpage.slug}">
                                <div style="mask-image: url({base}/{subpage.icon});" class="page-icon"></div>{subpage.title}
                            </a>
                        </li>
                        {/each}
                    </ol>
                </details>
                {:else}
                <a href="{base}/{category.slug}{page.slug ? '/' + page.slug : ''}">
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
        margin: 0;
        font-family: Lineal;
        width: 250px;
    }


    /* Categories */
    details.category {
        margin-bottom: 15px;
    }
    details.category > summary::marker { content: none; }
    details.category > summary:hover { cursor: pointer; }
    details.category > summary {
        font-family: Basteleur;
        font-weight: bold;
        font-weight: 900;
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
        width: 16px;
        height: 16px;
        mask-size: 16px 16px;
        mask-position: center center;
        mask-repeat: none;
        background-color: var(--text-color);
    }
    li.page a {
        color: var(--text-color);
        text-decoration: none;
        display: flex;
        flex-direction: row;
        white-space: nowrap;
    }
    li.page a:hover {
        text-decoration: underline dashed;
        color: var(--highlight-color);
    }
    li.page a:hover .page-icon {
        background-color: var(--highlight-color);
    }
    li.page details summary::marker { content: ''; }
</style>