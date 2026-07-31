<script>
    import DocsNavbar from '$lib/components/DocsNavbar.svelte';
    import PageSummary from '$lib/components/PageSummary.svelte'

    let { children } = $props();
</script>

<div id="doc-page">
    <div class="navbar-wrapper">
        <DocsNavbar></DocsNavbar>
    </div>
    
    <article id="docs-article">
        {@render children()}
    </article>

    <PageSummary></PageSummary>
</div>


<style>
    #doc-page {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 2rem;
        flex: 1;
    }

    .navbar-wrapper {
        height: min-content;
        position: sticky;
        /* margin-top: 2em; */
        top: 4em;
    }

    article {
        margin: 2rem;
        padding: 2rem;
        flex: 1;
        max-width: var(--docs-article-size);
        background-color: var(--panel-color);
        border: 1px solid var(--border-color);
    }

    article :global(h1) {
        font-family: Basteleur;
        font-weight: bold;
        padding-bottom: 2rem;
    }
</style>