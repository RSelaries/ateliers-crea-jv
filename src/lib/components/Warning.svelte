<script>
    let { children, title = "Attention" } = $props();

    import noteIcon from "$lib/assets/icons/note-icon.svg";
</script>


<div class="note">
    <p class="note-title">
        <svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2678 3C15.0376 1.66667 16.9618 1.66667 17.7316 3L29.8557 24C30.6254 25.3333 29.6637 26.9998 28.1242 27H3.8752C2.33578 26.9999 1.37333 25.3333 2.14277 24L14.2678 3ZM16.0002 21C14.8956 21 14.0002 21.8954 14.0002 23C14.0003 24.1045 14.8957 25 16.0002 25C17.1047 24.9999 18.0001 24.1045 18.0002 23C18.0002 21.8955 17.1047 21.0001 16.0002 21ZM16.0002 8C14.8956 8 14.0002 8.89543 14.0002 10V17C14.0003 18.1045 14.8957 19 16.0002 19C17.1047 18.9999 18.0001 18.1045 18.0002 17V10C18.0002 8.89547 17.1047 8.00006 16.0002 8Z"/>
        </svg>
        {title}
    </p>
    <p class="note-content">{@render children()}</p>
</div>


<style>
    .note {
        padding: 0.5rem 1rem;
        border-left: 4px solid var(--warning-color);
        margin-bottom: 1rem;
        
        p.note-title {
            font: var(--note-font-style) !important;
            color: var(--warning-color);

            svg {
                fill: var(--warning-color);
                vertical-align: center;
            }
        }
        p.note-content {
            font: var(--note-font-style) !important;
            margin: 0;
        }
    }
</style>