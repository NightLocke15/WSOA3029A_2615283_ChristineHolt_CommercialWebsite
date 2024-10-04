const root = "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/"

const offMenu = [
    {name: "Home", href: `${root}index.html`},
    {name: "Recipes", href: `${root}recipesFile/index.html`},
    {name: "Articles", href: `${root}articles/index.html`},
    {name: "About", href: `${root}about/index.html`},
    {name: "Post", href: `${root}recipesFile/postARecipe.html`},
]

export function offScreenNavigation(currentPage) {
    const nav = document.querySelector("#offScreenMenu")
    let buttons = offMenu.map(function (menuItem) {
        return `<a class="offScreenNav" id="${menuItem.name}" href="${menuItem.href}">${menuItem.name}</a>`
    }).join("");

    nav.innerHTML = buttons;
    
    const offScreenButtons = document.querySelectorAll(".offScreenNav");

    //Change the tag depending on thepage in order to style the buttons correctly
    offScreenButtons.forEach(function (button) {
        if (button.id != currentPage) {
            button.setAttribute("id", "otherButton");
        }
        else {
            button.setAttribute("id", "currentButton");
        }
    })
}