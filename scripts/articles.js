const articles = [
    {
        name: "Essay: Critical Analysis of the Effectiveness of Data Visualisations",
        description: "",
        href: `/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/recipesFile/postARecipe.html`
    },
    {
        name: "Essay: Critical Analysis of the Effectiveness of Data Visualisations",
        description: "",
        href: `/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/recipesFile/postARecipe.html`
    }
]

const articleContainer = document.querySelector(".articles");

injectArticles();

function injectArticles() {
    let articleLinks = articles.map(function (article) {
        return `<article class="articleLink">
        <div class="articleTitle">${article.name}</div>
        <p>${article.description}</p>
        </article>`
    });

    articleContainer.innerHTML = articleLinks;
}