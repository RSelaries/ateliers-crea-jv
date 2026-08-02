<script>
    import DocsNavbar from "$lib/components/DocsNavbar.svelte";
    import LoadingScreen from "$lib/components/LoadingScreen.svelte";
    import PageSummary from "$lib/components/PageSummary.svelte";
    import "$lib/css/article-style.css";
    
    import noise from "$lib/assets/global-medias/noise.png";
    import ImageCarousel from "$lib/components/ImageCarousel.svelte"

    let { children } = $props();
</script>


<ImageCarousel></ImageCarousel>
<div id="doc-page" style="background-image: url({noise});">
    <div class="sidebar-wrapper docs-navbar">
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
        padding: 0 var(--article-margin, 2rem);
        flex: 1;

        background-size: 200px;
        image-rendering: -moz-crisp-edges;
        image-rendering: -moz-crisp-edges;
        image-rendering: -o-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        -ms-interpolation-mode: nearest-neighbor;
    }

    #doc-page .sidebar-wrapper {
        height: min-content;
        position: sticky;
        top: 5em;
        max-width: var(--side-bars-size);
    }

    #docs-article {
        max-width: var(--docs-article-size);
        flex: 1;
        margin: var(--article-margin, 2rem) 0;
        padding: 2rem;
        background-color: var(--panel-color);
        border: 1px solid var(--border-color);
    }
</style>