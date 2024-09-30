const root = "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/"

const footerItems = [
    {
        name: "About",
        href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/about/index.html"
    },
    {
        name: "Recipes",
        href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/recipesFile/index.html"
    },
    {
        name: "Articles",
        href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/articles/index.html"
    },
    {
        name: "Designs",
        href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/about/designs.html"
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