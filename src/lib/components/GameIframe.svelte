<script>
    let { src, title } = $props();
    let gameLauched = $state(false);
    let isFullscreen = $state(false);

    let gameIframe;

    function onFullscreenChanged() {
        isFullscreen = document.fullscreenElement == gameIframe;
    }

    $effect(() => {
        document.addEventListener("fullscreenchange", onFullscreenChanged);
        return () => document.removeEventListener("fullscreenchange", onFullscreenChanged);
    })
</script>


<div class="game-iframe" bind:this={gameIframe}>
    {#if gameLauched}
    <div class="iframe-menu-wrapper">
        <div class="iframe-menu">
            <button class="close-btn" title="Fermer le jeu" onclick={() => gameLauched = false}></button>
            {#if isFullscreen}
            <button class="disable-fullscreen-btn" title="Plein écran" onclick={() => document.exitFullscreen()}></button>
            {:else}
            <button class="fullscreen-btn" title="Plein écran" onclick={() => gameIframe.requestFullscreen()}></button>
            {/if}
        </div>
    </div>
    <iframe {src} {title} frameborder="0"></iframe>
    {:else}
    <h1 class="title">{title}</h1>
    <button class="play" onclick={() => gameLauched = true}>Jouer</button>
    {/if}
</div>


<style>
    .game-iframe {
        border: 1px solid var(--border-color);
        display: flex;
        flex-direction: column;
        width: 100%;
        aspect-ratio: 16/9;
        justify-content: center;
        align-items: center;
    
        button.play {
            border: 2px solid var(--note-panel-color);
            color: var(--text-color);
            font: var(--title-font-style);
            border-radius: 50px;
            background-color: transparent;
            padding: 0.2em 1.5em;
            cursor: pointer;
        }
        button:hover {
            background-color: var(--highlight-color-transparent);
        }

        iframe {
            width: 100%;
            height: 100%;
        }

        .title {
            color: var(--text-color);
        }

        .iframe-menu-wrapper {
            width: 100%;
            height: 0px;
        }

        .iframe-menu {
            display: flex;
            justify-content: space-between;
            width: 100%;
            position: sticky;
            top: 0px;
        }

        .fullscreen-btn, .close-btn, .disable-fullscreen-btn {
            border: none;
            background-color: transparent;
            background-position: center center;
            background-size: 100% 100%;
            width: 20px;
            height: 20px;
            margin: 0px;
        }
        .fullscreen-btn {
            background-image: url("$lib/assets/icons/fullscreen.svg");
        }
        .close-btn {
            background-image: url("$lib/assets/icons/close.svg");
        }
        .disable-fullscreen-btn {
            background-image: url("$lib/assets/icons/disable-fullscreen.svg");
        }
    }
</style>