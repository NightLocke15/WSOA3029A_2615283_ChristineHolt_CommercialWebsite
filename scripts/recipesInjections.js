const recipeContent = document.querySelector(".recipeContentSection");

recipe();

function recipe() {
    let myCurrentRecipeString = localStorage.getItem('currentRecipe');
    let myCurrentRecipe = JSON.parse(myCurrentRecipeString);
    console.log(myCurrentRecipe[0].recipeElements.ingredients);

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
}