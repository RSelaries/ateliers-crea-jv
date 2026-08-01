<script>
    import { base } from "$app/paths";
    
    let { children, href = "" } = $props();
</script>


<a {href}>{@render children()}</a>


<style>
    a {
        color: var(--redirection-color);
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: dashed underline var(--redirection-color);
    }
</style>