const menu = [
    {name: "Home", href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/index.html"},
    {name: "Recipes", href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/recipes/index.html"},
    {name: "Articles", href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/articles/index.html"},
    {name: "About", href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/about/index.html"}
]

const navList = document.querySelector(".navigation-buttons");

export function navigationBar(currentPage) {
    let navItems = menu.reduce(function (values, item) {
        if (!values.includes(item.name)) {
            values.push(item.name);
        }
        return values;
    }, []);

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