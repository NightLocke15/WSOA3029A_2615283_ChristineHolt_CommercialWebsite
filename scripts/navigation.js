const root = "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/"

const menu = [
    {name: "Home", href: `${root}index.html`},
    {name: "Recipes", href: `${root}recipes/index.html`},
    {name: "Articles", href: `${root}articles/index.html`},
    {name: "About", href: `${root}about/index.html`},
    {name: "Post", href: `${root}recipes/postARecipe.html`},
]

const navList = document.querySelector(".navigation-buttons");

export function navigationBar(currentPage) {
    let buttons = menu.map(function (menuItem) {
        return `<a class="nav-button" id="${menuItem.name}" href="${menuItem.href}">${menuItem.name}</a>`
    }).join("");

    navList.innerHTML = buttons;

    const buttonsList = document.querySelectorAll(".nav-button");

    buttonsList.forEach(function (button) {
        if (button.id != currentPage) {
            button.setAttribute("id", "otherButton");
        }
        else {
            button.setAttribute("id", "currentButton");
        }
    })
}