<script>
    let { src, title } = $props();
    let gameLauched = $state(false);
</script>


<div class="game-iframe">
    {#if gameLauched}
    <iframe {src} {title} frameborder="0"></iframe>
    <div class="iframe-menu">
        <button aria-label="Fermer le jeu"></button>
        <button aria-label="Plein écran"></button>
    </div>
    {:else}
    <h1 class="title">{title}</h1>
    <button onclick={() => gameLauched = true}>Jouer</button>
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
    
        button {
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
    }
</style>