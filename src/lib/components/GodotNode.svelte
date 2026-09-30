<script>
    import GodotIcon from "./GodotIcon.svelte";

    let { node } = $props();
</script>


<a target="_blank" href="https://docs.godotengine.org/fr/stable/classes/class_{node.toLowerCase()}.html"><GodotIcon object={node}></GodotIcon>{node}</a>


<style>
    a {
        display: inline-block;
        font: var(--code-font-style);
        color: var(--text-color);
        font-style: italic;
        text-decoration: underline dashed;
        font-weight: 400;

        :global(img) {
            margin-right: 0.2rem;
        }
    }
    a:hover {
        color: var(--external-link-color);
    }
</style>