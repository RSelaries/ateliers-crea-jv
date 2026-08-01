<script>
    let { src, alt = "" } = $props();
</script>


<button title="Open image carousel">
    <enhanced:img class="img" {src} {alt} />
</button>


<style>
    img {
        margin: 0;
        padding: 0;
    }
    button {
        background-color: transparent;
        padding: 0;
        margin: 0;
        border: none;
    }
    /* button:hover {
        cursor: zoom-in;
    } */
</style>