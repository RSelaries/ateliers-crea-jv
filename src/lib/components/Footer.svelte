<script>
    import ExternalLink from "./ExternalLink.svelte";
</script>
<footer>
    <div>
        Site et Ateliers créés par <ExternalLink href="https://rselaries.github.io/portfolio">Raphaël Selaries</ExternalLink>
    </div>
</footer>


<style>
    footer {
        font-family: Lineal;
        width: 100%;
        margin: 0;
        border-top: solid 1px var(--border-color);
        background-color: var(--panel-color);
    }

    footer > div {
        padding: 10px 60px;
    }
</style>