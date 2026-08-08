<script>
    import { carouselStore } from "$lib/stores/carousel.svelte";
    import { onDestroy, onMount } from "svelte";

    let { src, alt = "", showAlt = false } = $props();
    const id = crypto.randomUUID();

    onMount(() => carouselStore.register({ id, src, alt }));
    onDestroy(() => carouselStore.unregister(id));
</script>


<div class="img-wrapper">
    <button onclick={() => carouselStore.open(id)} aria-label="Open image carousel">
        <enhanced:img class="viewable-img" {src} {alt} />
    </button>
    {#if showAlt}
    <small class="img-alt">{alt}</small>
    {/if}
</div>


<style>
    .img-wrapper {
        display: flex;
        flex-direction: column;
        width: fit-content;

        button {
            background-color: transparent;
            padding: 0;
            margin: 0;
            border: none;
            cursor: zoom-in;
        }
    
        .img-alt {
            margin-bottom: 1rem;
            text-align: center;
            font: var(--note-font-style);
            font-size: 0.8rem;
        }
    }

</style>