//Footer data and variables
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

//Access the footer
const footerBox = document.querySelector("footer");
injectFooter();

//Inject the footer data into the footer
function injectFooter() {
    //Map the data into a variable
    const footerLinks = footerItems.map(function (footerItem) {
        const { name, href } = footerItem;
        return `<a class="footerLink" href="${href}">${name}</a>`
    }).join("");

    //Use the variable to inject the links into the footer
    footerBox.innerHTML = footerLinks;
}