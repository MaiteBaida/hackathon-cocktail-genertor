import Header from './components/header/header.js';
import Hero from './components/hero/hero.js';
import Main from './components/main/main.js';
import Footer from './components/footer/footer.js';

// const html = `<div>${studentName}</div>`
const html = `
  ${Header()}
  ${Hero()}
  ${Main()}
  ${Footer()}
  `
  const root = document.getElementById('App');
  root.innerHTML = html;

// Event listener for DOMContentLoaded to initialize functionality after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Selecting DOM elements: the button, the season dropdown, and the cocktail container
  const generateButton = document.querySelector('.button');
  const seasonDropdown = document.querySelector('.season__list');
  const cocktailContainer = document.querySelector('.cocktail__container');

  // Initially disabling the generate button and clearing the cocktail container
  generateButton.disabled = true;
  cocktailContainer.innerText = "";

  // Event listener for handling changes in the season dropdown
  seasonDropdown.addEventListener('change', function() {
    // Enabling or disabling the generate button based on the dropdown selection
    generateButton.disabled = this.value === "";
  });

  // Event listener for the generate button click
  generateButton.addEventListener('click', function(event) {
    // Preventing the default behavior
    event.preventDefault();
    
    // Fetching cocktail data only if the button is enabled
    if (!this.disabled) {
      fetchCocktailData();
    }
  });
});

// Async function to fetch cocktail data from the API
const fetchCocktailData = async () => {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  try {
    // Making an HTTP request to the API and handling the response
    const response = await axios.get(URL);
    const data = response.data;
    console.log('Data fetched:', data);
    // Displaying the fetched cocktail data
    displayCocktail(data.drinks[0]);
  } catch (error) {
    // Logging errors if the request fails
    console.error("Error fetching cocktail data:", error);
  }
};

// Function to display the cocktail data in the DOM
const displayCocktail = (cocktail) => {
  const container = document.querySelector('.cocktail__container');
  let ingredients = '';
  // Looping through ingredients and measurements to create a formatted list
  for (let i = 1; i <= 20; i++) {
    if (cocktail[`strIngredient${i}`]) {
      ingredients += `${cocktail[`strIngredient${i}`]}: ${cocktail[`strMeasure${i}`] || ''}<br>`;
    }
  }
  // Updating the inner HTML of the container with cocktail details
  container.innerHTML = `
    <h3>${cocktail.strDrink}</h3>
    <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" style="max-width: 15rem; height: auto;" />
    <p><strong>Instructions:</strong> ${cocktail.strInstructions}</p>
    <p><strong>Ingredients:</strong><br>${ingredients}</p>
  `;
};