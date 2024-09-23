const homePageSections = [
    {
        id: "recipes",
        name: "Just Recipes",
        description: "No other stuff. Find recipes by fellow cooks and bakers in our extensive archives. Use, Like and Share the recipe, easily find what you need without having to dig through anything unnecessary!",
        href: "/recipes/index.html",
        button: "Find Recipes"
    },
    {
        id: "articles",
        name: "Articles",
        description: "Do you want to read more about food? Have a look at our articles, backed by facts (and a few opinions).",
        href: "/articles/index.html",
        button: "Read Articles"
    },
    {
        id: "post",
        name: "Post a Recipe",
        description: "Want to add one of your delicious recipes to our archives? Shoot us a message with the ingredients, instructions and any notes and have your recipe between other great ones!",
        href: "/recipes/postARecipe.html",
        button: "Post a Recipe"
    }
]

const mainContent = document.querySelector(".websiteMainContent")

injectSections();

function injectSections () {
    let sections = homePageSections.map(function (section) {
        const { id, name, description, href, button } = section;
        return `<article class="${id}Section">
            <div class="sectionTitle" id="${id}">${name}</div>
            <div class="descAndButt">
            <p class="${id}Description">${description}</p>
            <div class="separationLine"></div>
            <div class="button">
            <a class="${id}Button" href="${href}">${button}</a>
            </div>
            </div>
        </article>`
    }).join("");

    mainContent.innerHTML = sections;
}