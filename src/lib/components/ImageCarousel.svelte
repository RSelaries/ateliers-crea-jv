<script>
    import { carouselStore } from "$lib/stores/carousel.svelte"

    $effect(() => {
        if (carouselStore.isOpen) {
            document.querySelector("body").className += "carousel-opened";
        } else {
            let className = document.querySelector("body").className;
            document.querySelector("body").className = className.replace('carousel-opened', '');
        }
    });
</script>


{#if carouselStore.isOpen}
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div aria-label="Close carousel" class="carousel-backdrop" onclick={() => carouselStore.close()}>
    <button class="carousel-btn previous" aria-label="Previous image" onclick={(e) => {e.stopPropagation(); carouselStore.previous()}}></button>
    <img src={carouselStore.images[carouselStore.currentIndex]?.src} alt={carouselStore.images[carouselStore.currentIndex]?.alt}>
    <button class="carousel-btn next" aria-label="Next image" onclick={(e) => {e.stopPropagation(); carouselStore.next()}}></button>
</div>
{/if}


<style>
    .carousel-backdrop {
        cursor: zoom-out;
        border: none;
        position: fixed;
        top: 0;
        left: 0;
        width: calc(100% - 8rem);
        height: calc(100% - 10rem);
        background-color: #0004;
        backdrop-filter: blur(2px);
        z-index: 2;
        padding: 4rem;
        padding-top: 6rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .carousel-btn {
        top: 50%;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        border: 2px solid var(--border-color);
        background-color: var(--panel-color);
        background-position: center center;
        background-size: contain;
        cursor: pointer;
    }
    .carousel-btn:hover {
        transform: scale(1.1);
    }
    .carousel-btn.previous {
        background-image: url("$lib/assets/icons/previous.svg");
        left: 1rem;
    }
    .carousel-btn.next {
        background-image: url("$lib/assets/icons/next.svg");
        right: 1rem;
    }

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
</style>