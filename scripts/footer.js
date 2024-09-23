const footerItems = [
    {
        name: "About",
        href: "/about/index.html"
    },
    {
        name: "Recipes",
        href: "/recipes/index.html"
    },
    {
        name: "Articles",
        href: "/articles/index.html"
    },
    {
        name: "Designs",
        href: "/about/design/designs.html"
    }
]

const footerBox = document.querySelector("footer");
injectFooter();

function injectFooter() {
    const footerLinks = footerItems.map(function (footerItem) {
        const { name, href } = footerItem;
        return `<a class="footerLink" href="${href}">${name}</a>`
    }).join("");

    footerBox.innerHTML = footerLinks;
}