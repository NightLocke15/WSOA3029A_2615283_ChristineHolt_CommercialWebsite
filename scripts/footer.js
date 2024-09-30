const root = "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/"

const footerItems = [
    {
        name: "About",
        href: `${root}about/index.html`
    },
    {
        name: "Recipes",
        href: `${root}recipesFile/index.html`
    },
    {
        name: "Articles",
        href: `${root}articles/index.html`
    },
    {
        name: "Designs",
        href: `${root}about/designs.html`
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