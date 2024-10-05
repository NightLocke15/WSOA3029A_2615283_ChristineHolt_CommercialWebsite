//Article links data like titles, descriptions and links
const articles = [
    {
        name: "Essay: Critical Analysis of the Effectiveness of Data Visualisations",
        description: "This essay goes in depth on the effectiveness of the data visualisations in an NBC News article.",
        href: `/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/articles/essay.html`
    },
    {
        name: "Fruit Sugar Content and Which Ones are Better for a Low Sugar Diet",
        description: "This article talks on the sugar content of fruit and how all fruits are healthy, but it shows which fruits are better based on whether someone would like to eat a lower sugar diet.",
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
        return `<a href="${article.href}"><article class="articleLink">
        <div class="articleTitle">${article.name}</div>
        <p>${article.description}</p>
        </article></a>`
    });

    //use the variable to inser the data into the html page
    articleContainer.innerHTML = articleLinks;


}