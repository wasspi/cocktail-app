document.getElementById('searchButton').addEventListener('click', searchCocktail);

function searchCocktail() {
  const searchTerm = document.getElementById('searchInput').value;

  // Effectuer une requête à l'API pour obtenir les cocktails correspondants
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      displayCocktails(data);
    })
    .catch(error => console.error('Erreur lors de la requête à l\'API :', error));
}

function displayCocktails(data) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Effacer les résultats précédents

  // Vérifier si des cocktails ont été trouvés
  if (data.drinks === null) {
    resultsDiv.innerHTML = '<p>Aucun cocktail trouvé.</p>';
    return;
  }

  // Afficher chaque cocktail trouvé
  data.drinks.forEach(cocktail => {
    const cocktailDiv = document.createElement('div');
    cocktailDiv.classList.add('cocktail');

    const cocktailName = document.createElement('h2');
    cocktailName.textContent = cocktail.strDrink;

    const cocktailImage = document.createElement('img');
    cocktailImage.src = cocktail.strDrinkThumb;
    cocktailImage.alt = cocktail.strDrink;

    cocktailDiv.appendChild(cocktailName);
    cocktailDiv.appendChild(cocktailImage);

    resultsDiv.appendChild(cocktailDiv);
  });
}
document.getElementById('results').addEventListener('click', event => {
  const cocktailDiv = event.target.closest('.cocktail');
  if (cocktailDiv) {
    const cocktailName = cocktailDiv.querySelector('h2').textContent;
    displayCocktailDetails(cocktailName);
  }
});

function displayCocktailDetails(cocktailName) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    .then(response => response.json())
    .then(data => {
      const cocktail = data.drinks[0];
      const detailsDiv = document.getElementById('cocktailDetails');
      detailsDiv.innerHTML = `<h2>${cocktail.strDrink}</h2>
                              <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
                              <h3>Ingrédients :</h3>
                              <ul>
                                ${displayIngredients(cocktail)}
                              </ul>
                              <h3>Instructions :</h3>
                              <p>${cocktail.strInstructions}</p>`;
    })
    .catch(error => console.error('Erreur lors de la requête à l\'API :', error));
}

function displayIngredients(cocktail) {
  let ingredients = '';
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients += `<li>${measure} ${ingredient}</li>`;
    }
  }
  return ingredients;
}
document.getElementById('cocktailDetails').addEventListener('click', event => {
  if (event.target.matches('#backToResults')) {
    document.getElementById('cocktailDetails').innerHTML = ''; // Effacer les détails
  }
});document.getElementById('searchButton').addEventListener('click', searchCocktail);
document.getElementById('searchInput').addEventListener('keyup', suggestFruits);

// ... Reste de votre code ...

// Ajout d'un gestionnaire d'événement pour le clic sur une image de cocktail
document.getElementById('results').addEventListener('click', event => {
  const cocktailDiv = event.target.closest('.cocktail');
  if (cocktailDiv) {
    const cocktailName = cocktailDiv.querySelector('h2').textContent;
    displayCocktailDetails(cocktailName);
  }
});

/* ... Votre code existant ... */
document.getElementById('searchButton').addEventListener('click', searchCocktail);
document.getElementById('searchInput').addEventListener('keyup', suggestFruits);

// ... Reste de votre code ...

// Ajout d'un gestionnaire d'événement pour le clic sur une image de cocktail
document.getElementById('results').addEventListener('click', event => {
  const cocktailDiv = event.target.closest('.cocktail');
  if (cocktailDiv) {
    const cocktailName = cocktailDiv.querySelector('h2').textContent;
    displayCocktailDetails(cocktailName);
  }
});

// Ajout d'un gestionnaire d'événement pour la touche "Entrée" dans la barre de recherche
document.getElementById('searchInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();  // Empêche le comportement par défaut du formulaire
    searchCocktail();  // Appelle la fonction de recherche
  }
});

/* ... Votre code existant ... */
