<script>
    import DocsNavbar from '$lib/components/DocsNavbar.svelte';
    import LoadingScreen from '$lib/components/LoadingScreen.svelte'
    import PageSummary from '$lib/components/PageSummary.svelte';
    import '$lib/css/article-style.css';

    let { children } = $props();
</script>


<div id="doc-page">
    <div class="sidebar-wrapper">
        <DocsNavbar></DocsNavbar>
    </div>
    
    <article id="docs-article">
        {@render children()}
    </article>

    <div class="sidebar-wrapper">
        <PageSummary></PageSummary>
    </div>
</div>


<style>
    #doc-page {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 2rem;
        flex: 1;
    }

    #doc-page .sidebar-wrapper {
        height: min-content;
        position: sticky;
        top: 5em;
    }

    #docs-article {
        max-width: var(--docs-article-size);
        flex: 1;
        margin: 2rem 0;
        padding: 2rem;
        background-color: var(--panel-color);
        border: 1px solid var(--border-color);
    }
</style>