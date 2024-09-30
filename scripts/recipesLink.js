import { recipes } from "./recipesData.js"

const filterSection = document.querySelector(".categories");
const recipeContainer = document.querySelector(".recipesContainer");
const inputField = document.querySelector(".searchInput");

injectCategories();
injectRecipes(recipes);
inputField.addEventListener('keyup', () => searchRecipe());

function injectCategories() {
    let categories = recipes.reduce (function(values, item){
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["all"]);

    let buttons = categories.map(function (category) {
        return `<button class="categoryButt" id = "${category}">${category}</button>`
    }).join("");

    filterSection.innerHTML = buttons;

    const filterButtons = document.querySelectorAll(".categoryButt");

    filterButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            let category = event.currentTarget.id;
            let filterRecipes = recipes.filter(function(recipe) {
                if(recipe.category === category) {
                    return recipe;
                }
            });
            if (category === "all") {
                injectRecipes(recipes);
            }
            else {
                injectRecipes(filterRecipes);
            }
        });
    });
}

function injectRecipes(recipes) {
    let recipeItems = recipes.map(function (recipe) {
        return `<article class="recipeLink">
          <img
            src="${recipe.image}"
            class="recipeImage"
          />
          
            <div class="recipeName">${recipe.name}</div>
            <div class="recipeTime">${recipe.time}</div>
          
        </article>`
    }).join("");

    recipeContainer.innerHTML = recipeItems;
}

function searchRecipe() {
    let value = inputField.value.toLowerCase();

    let searchRecipes = recipes.filter(function (recipe) {
        return recipe.name.toLowerCase().includes(value);
    });

    injectRecipes(searchRecipes);
}