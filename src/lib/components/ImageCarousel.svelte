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
    <img src={carouselStore.images[carouselStore.currentIndex]?.src} alt={carouselStore.images[carouselStore.currentIndex]?.alt} />
    <button class="carousel-btn next" aria-label="Next image" onclick={(e) => {e.stopPropagation(); carouselStore.next()}}></button>
</div>
{/if}


<style>
    .carousel-backdrop {
        --side-padding: 4rem;
        --top-padding: 6rem;
        cursor: zoom-out;
        border: none;
        position: fixed;
        top: 0;
        left: 0;
        padding: var(--side-padding);
        padding-top: var(--top-padding);
        width: calc(100% - calc(var(--side-padding) * 2));
        height: calc(100% - calc(var(--side-padding) + var(--top-padding)));
        background-color: #0004;
        backdrop-filter: blur(2px);
        z-index: 2;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
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
        aspect-ratio: 1;
    }
    .carousel-btn:hover {
        transform: scale(1.1);
    }
    .carousel-btn.previous {
        background-image: url("$lib/assets/icons/previous.svg");
        left: 1rem;
        grid-area: prev;
    }
    .carousel-btn.next {
        background-image: url("$lib/assets/icons/next.svg");
        right: 1rem;
        grid-area: next;
    }

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        grid-area: carousel;
    }

    @media (orientation: portrait) {
        .carousel-backdrop {
            --side-padding: 2rem;
            display: grid;
            grid-template-areas:
            "carousel carousel"
            "prev next";
        }
        .carousel-btn.next {
            justify-self: end;
        }
    }
</style>