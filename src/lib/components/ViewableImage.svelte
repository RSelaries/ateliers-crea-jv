<script>
    import { carouselStore } from "$lib/stores/carousel.svelte";
    import { onDestroy, onMount } from "svelte";

    let { src, alt = "" } = $props();
    const id = crypto.randomUUID();

    onMount(() => carouselStore.register({ id, src, alt }));
    onDestroy(() => carouselStore.unregister(id));
</script>


<button onclick={() => carouselStore.open(id)} aria-label="Open image carousel">
    <enhanced:img class="viewable-img" {src} {alt} />
</button>


<style>
    button {
        background-color: transparent;
        padding: 0;
        margin: 0;
        border: none;
        cursor: zoom-in;
    }
</style>