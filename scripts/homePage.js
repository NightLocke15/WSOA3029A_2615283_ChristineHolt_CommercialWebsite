//Homepage sections below the image data
const homePageSections = [
    {
        id: "recipes",
        name: "Just Recipes",
        description: "No other stuff. Find recipes by fellow cooks and bakers in our extensive archives. Use, Like and Share the recipe, easily find what you need without having to dig through anything unnecessary!",
        href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/recipesFile/index.html",
        button: "Find Recipes"
    },
    {
        id: "articles",
        name: "Articles",
        description: "Do you want to read more about food? Have a look at our articles, backed by facts (and a few opinions).",
        href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/articles/index.html",
        button: "Read Articles"
    },
    {
        id: "post",
        name: "Post a Recipe",
        description: "Want to add one of your delicious recipes to our archives? Shoot us a message with the ingredients, instructions and any notes and have your recipe between other great ones!",
        href: "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/recipesFile/postARecipe.html",
        button: "Post a Recipe"
    }
]

//Access the container where the sections will be added
const mainContent = document.querySelector(".websiteMainContent")

injectSections();

//Inject the information for these sections
function injectSections () {
    //map the sections into a variable
    let sections = homePageSections.map(function (section) {
        const { id, name, description, href, button } = section;
        return `<a href="${href}"><article id="section">
            <div class="sectionTitle">${name}</div>
            <div class="descAndButt">
            <p id="description">${description}</p>
        </article></a>`
    }).join("");

    //Use the variable to inject the sections into the html page.
    mainContent.innerHTML = sections;
}