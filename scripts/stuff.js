recipe();

const recipeContent = document.querySelector(".recipeContentSection");

function recipe() {
    let myCurrentRecipeString = localStorage.getItem('currentRecipe');
    let myCurrentRecipe = JSON.parse(myCurrentRecipeString);
    console.log(myCurrentRecipe[0].recipeElements.ingredients);
}