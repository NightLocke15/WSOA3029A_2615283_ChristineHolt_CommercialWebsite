//Article links data like titles, descriptions and links
const articles = [
    {
        id: "article-1",
        name: "Essay: Critical Analysis of the Effectiveness of Data Visualisations",
        description: "This essay goes in depth on the effectiveness of the data visualisations in an NBC News article.",
        href: `/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/articles/essay.html`
    },
    {
        id: "article-2",
        name: "Pokemon Stats and Portions:",
        description: "How much you would be able to eat when you catch and eat a Pokemon, because API's hate me.",
        href: `/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/articles/article1.html`
    }
]

//Access the container that will hold the links to the articles
const articleContainer = document.querySelector(".articles");

injectArticles();

//Inject the article links and basic information into the main page for the articles
function injectArticles() {
    //map the info into a variable
    let articleLinks = articles.map(function (article) {
        return `<a href="${article.href}" aria-label="${article.id}"><article class="articleLink">
        <div class="articleTitle">${article.name}</div>
        <p>${article.description}</p>
        </article></a>`
    });

    //use the variable to inser the data into the html page
    articleContainer.innerHTML = articleLinks;


}