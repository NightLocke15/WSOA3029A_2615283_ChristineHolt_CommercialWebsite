recipe();

function recipe() {
    let myCurrentRecipeString = localStorage.getItem('currentRecipe');
    let myCurrentRecipe = JSON.parse(myCurrentRecipeString);
    console.log(myCurrentRecipe);
}