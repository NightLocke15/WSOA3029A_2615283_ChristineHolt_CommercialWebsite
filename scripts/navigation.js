//Creating constants to be used in navigation links

const root = "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/"

const menu = [
    {name: "Home", href: `${root}index.html`},
    {name: "Recipes", href: `${root}recipesFile/index.html`},
    {name: "Articles", href: `${root}articles/index.html`},
    {name: "About", href: `${root}about/index.html`},
    {name: "Post", href: `${root}recipesFile/postARecipe.html`},
]

//Fetch area for navigation buttons

const navList = document.querySelector(".navigation-buttons");

//Inject navigation links into headers.

export function navigationBar(currentPage) {
    //map the links into a variable
    let buttons = menu.map(function (menuItem) {
        return `<a class="nav-button" id="${menuItem.name}" href="${menuItem.href}">${menuItem.name}</a>`
    }).join("");

    //use the variable to inject the elements into the navigation list
    navList.innerHTML = buttons;

    //access all the navigation buttons
    const buttonsList = document.querySelectorAll(".nav-button");

    //Change the tag depending on thepage in order to style the buttons correctly
    buttonsList.forEach(function (button) {
        if (button.id != currentPage) {
            button.setAttribute("id", "otherButton");
        }
        else {
            button.setAttribute("id", "currentButton");
        }
    });
}