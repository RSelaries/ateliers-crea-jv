<script>
    import { base } from "$app/paths";
    
    let { children, href = "", newTab = true } = $props();
</script>


<a target={newTab == true ? '_blank' : '_self'} {href}>{@render children()}</a>


<style>
    a {
        color: var(--highlight-color);
        text-decoration: none;
        background-image: url('$lib/assets/icons/external-link.svg');
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 12px;
        padding-right: 14px;
    }
    a:hover {
        text-decoration: dashed underline var(--highlight-color);
    }
</style>