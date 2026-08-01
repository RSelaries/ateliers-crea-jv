<script>
    import { base } from "$app/paths"; 
    import ViewableImage from "./ViewableImage.svelte";

    let { onTitlePage = false } = $props();

    let opened = $state(false);

    $effect(() => {
        if (opened) {
            document.querySelector("body").style.overflow = "hidden";
        } else {
            document.querySelector("body").style.overflow = "auto";
        }
    });
</script>


<button onclick={() => opened = !opened} class="{onTitlePage ? 'on-title-page' : ''} {opened ? 'opened' : ''}" aria-label="Toggle page navbar">
</button>

<div class="navbar-wrapper {opened ? 'opened' : ''}">

</div>


<style>
    button {
        width: 24px;
        height: 24px;
        margin: 0;
        padding: 0;
        border: none;
        mask-image: url("$lib/assets/icons/burger-menu.svg");
        mask-position: center center;
        mask-size: 100% 100%;
        mask-repeat: no-repeat;
        background-color: var(--text-color);
    }
    button.opened {
        mask-image: url("$lib/assets/icons/burger-menu-close.svg");
    }

    .navbar-wrapper {
        z-index: -1;
        display: none;
        background-color: blue;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
    }
    .navbar-wrapper.opened {
        display: block;
    }

    button.on-title-page {
        background-color: var(--titles-color);
    }

    button:hover {
        cursor: pointer;
    }
</style>