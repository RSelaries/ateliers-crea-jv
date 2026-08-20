export const pagesTree =
{
    docs: [
        {
            title: "Ateliers",
            slug: "atelier",
            pages: [
                {
                    title: "Hello World!",
                    slug: "hello-world",
                    icon: "page-icons/hello-world.svg",
                },
                {
                    title: "Devine le nombre",
                    slug: "devine-le-nombre",
                    icon: "page-icons/devine-nombre.svg",
                    subpages: [
                        {
                            title: "Améliorations",
                            slug: "ameliorations",
                            icon: "page-icons/plus-loin.svg",
                        }
                    ],
                },
                {
                    title: "Jeu de plateforme",
                    slug: "jeu-de-plateforme",
                    icon: "page-icons/platformer.svg",
                },
                // {
                //     title: "Menu",
                //     slug: "menu",
                //     icon: "page-icons/menu.svg",
                // },
            ]
        },
        {
            title: "Godot",
            slug: "godot",
            pages: [
                {
                    title: "Pour commencer",
                    slug: "installation-et-configuration",
                    icon: "page-icons/installation-et-configuration.svg",
                },
                {
                    title: "Interface",
                    slug: "interface",
                    icon: "page-icons/control.svg",
                },
                {
                    title: "GDQuest",
                    slug: "gdquest",
                    icon: "page-icons/gdquest.svg",
                },
                {
                    title: "Tutoriels",
                    slug: "tutoriels",
                    icon: "page-icons/tutoriels.png",
                },
            ]
        },
        {
            title: "Ressources Supplémentaires",
            slug: "ressources-supplementaires",
            pages: [
                {
                    title: "Inspirations",
                    slug: "inspirations",
                    icon: "page-icons/inspirations.svg",
                }
            ]
        },
    ],
};

export const pageList = getPagesList()

function getPagesList() {
    // pageList starts with "" to account for the home page
    let pageList = [""];

    pagesTree.docs.forEach((category) => {
        let categorySlug = category.slug;
        category.pages.forEach((page) => {
            let pageSlug = categorySlug + (page.slug ? "/" : "") + page.slug;

            pageList.push(pageSlug);

            if (page.subpages) {
                page.subpages.forEach((subpage) => {
                    let subpageSlug = pageSlug + "/" + subpage.slug;
                    pageList.push(subpageSlug);
                });
            }
        });
    });

    return pageList;
}