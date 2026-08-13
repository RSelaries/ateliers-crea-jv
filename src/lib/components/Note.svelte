<script>
    let { children, title = "Note" } = $props();

    import noteIcon from "$lib/assets/icons/note-icon.svg";
</script>


<div class="note">
    <p class="note-title">
        <svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM16 21C14.8954 21 14 21.8954 14 23C14 24.1046 14.8954 25 16 25C17.1046 25 18 24.1046 18 23C18 21.8954 17.1046 21 16 21ZM16 6C14.8954 6 14 6.89543 14 8V17C14 18.1046 14.8954 19 16 19C17.1046 19 18 18.1046 18 17V8C18 6.89543 17.1046 6 16 6Z"/>
        </svg>
        {title}
    </p>
    <p class="note-content">{@render children()}</p>
</div>


<style>
    .note {
        padding: 0.5rem 1rem;
        border-left: 4px solid var(--note-panel-color);
        margin-bottom: 1rem;
        
        p.note-title {
            font: var(--note-font-style) !important;
            color: var(--note-panel-color);

            svg {
                fill: var(--note-panel-color);
                vertical-align: center;
            }
        }
        p.note-content {
            font: var(--note-font-style) !important;
            margin: 0;
        }
    }
</style>