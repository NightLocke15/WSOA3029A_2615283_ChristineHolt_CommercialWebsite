import { recipes } from "./recipesData.js" //Data containing all the details for all the recipes currently on the website

//Fetching html elements

const filterSection = document.querySelector(".categories"); //Fetching the area where the filter buttons will be injected
const recipeContainer = document.querySelector(".recipesContainer"); //Fetching the area where all the links to the recipes will be found
const inputField = document.querySelector(".searchInput"); // Fetching the inputfield that enables the user to search for specific recipes

injectCategories();
injectRecipes(recipes);
inputField.addEventListener('keyup', () => searchRecipe()); //Consistently tracking what the user types into the input field

//Categories: Each category of food available on the website

function injectCategories() {
    //Find all the different categories available and place in an array
    let categories = recipes.reduce (function(values, item){ 
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["all"]);

    //mapping the categories found in the data into a variable
    let buttons = categories.map(function (category) {
        return `<button class="categoryButt" id = "${category}">${category}</button>`
    }).join("");

    //Use variable to place mapped buttons in the filter section
    filterSection.innerHTML = buttons;

    //Finding the whole list of filter buttons
    const filterButtons = document.querySelectorAll(".categoryButt");

    //Add event listeners to each of the category buttons  in order to filter the recipes
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

//Recipes: Each available recipe linked so it can be accessed

function injectRecipes(recipes) {
    //Recipes mapped into variable
    let recipeItems = recipes.map(function (recipe) {
        return `<article class="recipeLink" id="${recipe.id}">
          <img
            src="${recipe.image}"
            class="recipeImage" id="${recipe.id}" alt="${recipe.imageRef}" title="${recipe.imageRef}"
          />
          
            <div class="recipeName">${recipe.title}</div>
            <div class="recipeTime">${recipe.time}</div>
          
        </article>`
    }).join("");

    //Use variable to inject recipes into the recipe container
    recipeContainer.innerHTML = recipeItems;

    //Get all the recipe links on the recipe page
    let allRecipeLinks = document.querySelectorAll(".recipeLink");

    //Add event listeners to each link in order to be able to access that recipe
    allRecipeLinks.forEach(function (recipeLink) {
        recipeLink.addEventListener('click', function() {
            let identity = event.currentTarget.id;
            console.log(identity);
            let recipeResult = recipes.filter(function (recipe) {
              if (recipe.id == identity) {
                return recipe;
              }
              
            });
            //place recipe information that is relevant to clicked link in the local storage in order to be able to access 
            //it on another html page and in another javascript file
            localStorage.clear(); //local storage explanation: https://medium.com/@cyberbotmachines/how-to-pass-value-from-one-html-page-to-another-using-javascript-3c9ab62df4d
            let myRecipe = recipeResult;
            let myRecipeString = JSON.stringify(myRecipe);
            localStorage.setItem('currentRecipe', myRecipeString);
            window.location.href = "/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/recipesFile/recipe.html";
        });
    })
}


//Functionality for input field
function searchRecipe() {
    //make everything typed into input lowercase so it can be compared to names in the data.
    let value = inputField.value.toLowerCase();

    let searchRecipes = recipes.filter(function (recipe) {
        return recipe.name.toLowerCase().includes(value);
    });

    //filter recipes
    injectRecipes(searchRecipes);
}