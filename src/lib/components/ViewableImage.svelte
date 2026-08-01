<script>
    let { src, alt = "", openCarousel } = $props();
</script>


<button onclick={openCarousel} title="Open image carousel">
    <enhanced:img class="viewable-img" {src} {alt} />
</button>


<style>
    button {
        background-color: transparent;
        padding: 0;
        margin: 0;
        border: none;
    }
</style>