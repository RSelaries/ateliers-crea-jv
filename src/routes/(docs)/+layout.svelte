<script>
    import DocsNavbar from "$lib/components/DocsNavbar.svelte";
    import LoadingScreen from "$lib/components/LoadingScreen.svelte";
    import PageSummary from "$lib/components/PageSummary.svelte";
    import ImageCarousel from "$lib/components/ImageCarousel.svelte";
    import NavBtns from "$lib/components/NavBtns.svelte";
    
    import "$lib/css/article-style.css";
    import "$lib/css/gdscript-code-snippet.css";

    let { children } = $props();
</script>


<ImageCarousel></ImageCarousel>
<div id="doc-page">
    <div class="sidebar-wrapper docs-navbar">
        <DocsNavbar></DocsNavbar>
    </div>
    
    <div class="article-wrapper">
        <article class="docs-article">
            {@render children()}
        </article>
        <NavBtns></NavBtns>
    </div>

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

        background-image: url("$lib/assets/global-medias/noise.png");
        background-size: 200px;
    }

    #doc-page .sidebar-wrapper {
        height: min-content;
        position: sticky;
        top: 5em;
        max-width: var(--side-bars-size);
    }

    .article-wrapper {
        min-width: 0;
        max-width: var(--docs-article-size);
        flex: 1;
    }

    .docs-article {
        margin: var(--article-margin, 2rem) 0;
        padding: 2rem;
        background-color: var(--panel-color);
        border: 1px solid var(--border-color);
        min-width: 0;
    }
</style>