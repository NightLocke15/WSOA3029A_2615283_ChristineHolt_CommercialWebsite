const menu = [
    {name: "Home", href: ""},
    {name: "Recipes", href: ""},
    {name: "Articles", href: ""},
    {name: "About", href: ""}
]

const navList = document.querySelector(".navigation-buttons");

navigationBar();

function navigationBar() {
    let navItems = menu.reduce(function (values, item) {
        if (!values.includes(item.name)) {
            values.push(item.name);
        }
        return values;
    }, []);

    let buttons = navItems.map(function (navItem) {
        return `<button type="button" class="nav-button">${navItem}</button>`
    }).join("");

    navList.innerHTML = buttons;
}