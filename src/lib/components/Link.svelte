<script>
    import { base } from "$app/paths";
    
    let { children, href = "", local = false } = $props();
</script>


{#if local}
<a {href}>{@render children()}</a>
{:else}
<a href="{base}/{href}">{@render children()}</a>
{/if}


<style>
    a {
        color: var(--redirection-color);
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: dashed underline var(--redirection-color);
    }
</style>