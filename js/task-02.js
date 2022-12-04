const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ingredientsList = document.querySelector("#ingredients");

const markup = ingredients.map((ingredients) => `<li class="item">${ingredients}</li>`).join("");

ingredientsList.innerHTML = markup;
