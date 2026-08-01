<script>
    let { children, title = "Note" } = $props();
</script>


<div class="note">
    <p class="note-title">{title}</p>
    <p class="note-content">{@render children()}</p>
</div>


<style>

</style>