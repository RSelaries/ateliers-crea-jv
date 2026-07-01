<script>
    import pages from "$lib/pages";
    import { base } from "$app/paths";
</script>


<nav>
    {#each pages.docs as category}
        <details href="{base}/{category.slug}" open>
            <summary>{category.title}</summary>
            <ol>
                {#each category.pages as page}
                    <li>
                        <a href="{base}/{category.slug}/{page.slug}">{page.title}</a>
                    </li>
                {/each}
            </ol>
        </details>
    {/each}
</nav>


<style>

</style>