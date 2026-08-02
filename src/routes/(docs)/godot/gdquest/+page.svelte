<script>
    import Note from "$lib/components/Note.svelte";

    let { iframeOpened = false } = $props();
</script>


<h1 id="pour-commencer"><small>Godot -</small> <span class="title">GDQuest</span></h1>

<Note>
    Vous pouvez passer l'app en Français. Dans "options" > "language".
</Note>

{#if iframeOpened}
<iframe title="Learn GDScript App" src="https://gdquest.github.io/learn-gdscript/" allowfullscreen=""></iframe>
{:else}
<div class="iframe-start-screen">
    <button onclick={() => iframeOpened = true} class="start-irfame-btn">
        <span class="run-btn">
            <span class="run-icon"></span>
            <span>Run</span>
        </span>
    </button>
</div>
{/if}


<style>
    iframe, .iframe-start-screen {
        width: 100%;
        aspect-ratio: 16/9;
        border: 1px solid var(--border-color);
    }

    .start-irfame-btn {
        width: 100%;
        height: 100%;
        border: none;
        position: relative;
        top: 0;
        left: 0;
        background-image: url("https://school.gdquest.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLearnGDScriptApp.10b698a0.png&w=3840&q=75");
        background-size: cover;
        background-position: center center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .run-icon {
        mask-image: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' display='inline-block' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332'/%3E%3C/svg%3E");
        mask-size: contain;
        width: 1.7rem;
        height: 1.7rem;
        background-color: rgb(106 25 0);
    }

    .run-btn {
        display: flex;
        border-radius: .375rem;
        align-items: center;
        justify-content: center;
        gap: .25rem;
        padding: .75rem 2rem;
        font-size: 1.25rem;
        text-transform: uppercase;
        background-color: rgb(255 213 0);
        font-weight: 700;
        color: rgb(106 25 0);
        box-shadow: 0 6px rgb(206, 124, 0);
        transition-duration: .35s;
        transition-timing-function: cubic-bezier(0,0,.2,1);
    }
    .run-btn:hover {
        transform: translate(0, 6px);
        background-color: rgb(255 228 89);
        box-shadow: 0 3px rgb(206, 124, 0);
    }
</style>