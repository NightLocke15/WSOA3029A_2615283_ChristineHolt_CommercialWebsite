const menu = [
    {name: "Home", href: "/index.html"},
    {name: "Recipes", href: "/recipes/index.html"},
    {name: "Articles", href: "/articles/index.html"},
    {name: "About", href: "/about/index.html"},
    {name: "Post", href: "/recipes/postARecipe.html"},
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