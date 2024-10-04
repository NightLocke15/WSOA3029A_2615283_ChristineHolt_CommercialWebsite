//Fetch html elements
const recipeContent = document.querySelector(".recipeContentSection"); //Fetch element where recipe will be displayed
const recipeTitle = document.querySelector("title"); //Access page title in order to make it match the current recipe.

recipe();

//Inject recipe into html page
function recipe() {
    //Fetch recipe information from local storage
    let myCurrentRecipeString = localStorage.getItem('currentRecipe');
    let myCurrentRecipe = JSON.parse(myCurrentRecipeString);
    console.log(myCurrentRecipe[0].recipeElements.ingredients);

    //Inject the recpe onto the recipe html page, this makes it dynamic so every recipe does not have to be on its own page.
    recipeContent.innerHTML = `<div class="recipeTitle">${myCurrentRecipe[0].title}</div>
    <section class="recipeCont">
        <div class="verticalLine"></div>
        <section class="recipeContent">
            <img src="${myCurrentRecipe[0].image}" class="recipeImage" alt="" title="${myCurrentRecipe[0].imageRef}">
            <p>Ingredients:</p>
            ${myCurrentRecipe[0].recipeElements.ingredients}
            <p>Instructions:</p>
            ${myCurrentRecipe[0].recipeElements.instructions}
            ${myCurrentRecipe[0].recipeElements.notes}
            ${myCurrentRecipe[0].recipeElements.reference}
        </section>
    </section>`;

    //Change the page title
    recipeTitle.innerHTML = `${myCurrentRecipe[0].title}`;
}