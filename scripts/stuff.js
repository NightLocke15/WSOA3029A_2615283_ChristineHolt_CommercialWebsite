import { recipeResult } from "/recipesLink.js";

const recipeContent = document.querySelector(".recipeContentSection")

recipe();

function recipe() {
    recipeContent.innerHTML = recipeResult;
}