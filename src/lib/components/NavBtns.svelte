<script>
    import { afterNavigate } from "$app/navigation";
    import { base } from "$app/paths"
    import { pageList } from "$lib/pages"

    function updateButtonsLinks() {
        let previousBtn = document.querySelector(".nav-btn-wrapper #nav-previous");
        let nextBtn = document.querySelector(".nav-btn-wrapper #nav-next");

        for (let i = 0; i < pageList.length; i++) {
            if ((base ? base : '/') + pageList[i] == document.location.pathname) {
                if (i == 0) {
                    previousBtn.classList = "disabled";
                    previousBtn.href = ""
                }
                else {
                    previousBtn.classList = "";
                    previousBtn.href = base + '/' + pageList[i-1];
                }

                if (i == pageList.length - 1) {
                    nextBtn.classList = "disabled";
                    nextBtn.href = ""
                }
                else {
                    nextBtn.classList = "";
                    nextBtn.href = base + '/' + pageList[i+1];
                }
            }
        }
    }

    $effect(updateButtonsLinks)
    afterNavigate(updateButtonsLinks);
</script>


<div class="nav-btn-wrapper">
    <a id="nav-previous">
        <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM17.4141 6.41406C16.6331 5.63322 15.3669 5.63322 14.5859 6.41406L6.47656 14.5234C5.67191 15.3286 5.70088 16.6419 6.54004 17.4111L15.5889 25.7061C16.3782 26.4294 17.5974 26.4026 18.3545 25.6455L18.4727 25.5273C19.2964 24.7036 19.2447 23.3529 18.3604 22.5947L13 18H25C26.1046 18 27 17.1046 27 16C27 14.8954 26.1046 14 25 14H13L17.5859 9.41406C18.3668 8.63305 18.3668 7.36695 17.5859 6.58594L17.4141 6.41406Z"/>
        </svg>
        Précédent
    </a>
    <a id="nav-next">
        Suivant
        <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM16.4111 6.29395C15.6218 5.57064 14.4026 5.59742 13.6455 6.35449L13.5273 6.47266C12.7036 7.29638 12.7553 8.64705 13.6396 9.40527L19 14H7C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18H19L14.4141 22.5859C13.6332 23.3669 13.6332 24.6331 14.4141 25.4141L14.5859 25.5859C15.3669 26.3668 16.6331 26.3668 17.4141 25.5859L25.5234 17.4766C26.3281 16.6714 26.2991 15.3581 25.46 14.5889L16.4111 6.29395Z"/>
        </svg>
    </a>
</div>


<style>
    .nav-btn-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: var(--nav-btn-margin);
        margin-bottom: calc(var(--article-margin) + var(--nav-btn-margin));
    }

    .nav-btn-wrapper :global(#nav-next),
    .nav-btn-wrapper :global(#nav-previous) {
        display: inline-flex;
        text-decoration: none;
        font: var(--article-titles-font-style);
        gap: 0.5rem;
        padding: 5px 10px;
        padding-bottom: 1px;
        color: var(--text-color);
        border: 2px solid var(--redirection-color);
        background-color: transparent;
        border-radius: 1rem;
        cursor: pointer;
        align-items: flex-start;

        svg {
            fill: var(--text-color);
        }
    }
    .nav-btn-wrapper :global(#nav-next):hover,
    .nav-btn-wrapper :global(#nav-previous):hover {
        background-color: var(--transparent-blue);
    }

    .nav-btn-wrapper :global(#nav-next.disabled),
    .nav-btn-wrapper :global(#nav-previous.disabled) {
        background-color: var(--panel-color);
        border: 2px solid var(--border-color);
        color: var(--text-color-muted);
        pointer-events: none;
    }

    .nav-btn-wrapper :global(#nav-next) { padding-right: 6px; }
    .nav-btn-wrapper :global(#nav-previous) { padding-left: 6px; }
</style>