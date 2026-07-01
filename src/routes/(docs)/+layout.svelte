<script>
    import DocsNavbar from '$lib/components/DocsNavbar.svelte';

    let { children } = $props();
</script>

<div id="doc-page">
    <DocsNavbar></DocsNavbar>
    
    <article>
        {@render children()}
    </article>
</div>



<style>
    #doc-page {
        display: flex;
        flex-direction: row;
    }

    article {
        background-color: var(--panel-color);
        border: 1px solid var(--border-color);
    }
</style>