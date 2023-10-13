DOCUMENTATION HTML 
<!-- Structure générale -->
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recherche de Cocktails</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- En-tête (header) -->
  <header>
    <h1>Recherche de Cocktails</h1>
    <input type="text" id="searchInput" placeholder="Recherchez un cocktail">
    <button id="searchButton">Rechercher</button>
  </header>

  <!-- Contenu principal (main) -->
  <main>
    <div id="results"></div>
    <div id="cocktailDetails"></div>
  </main>

  <!-- Scripts -->
  <script src="script.js"></script>
</body>
</html>
Commentaires :
<!-- Lien vers le fichier CSS --> : Le fichier CSS est lié dans l'en-tête du HTML.
<!-- Conteneur pour les résultats de la recherche --> : Le div où les résultats de la recherche seront affichés.
<!-- Conteneur pour les détails du cocktail --> : Le div où les détails du cocktail seront affichés.
/* Styles pour le corps de la page */

DOCUMENTATION CSS 
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

/* Styles pour l'en-tête */
header {
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ... autres styles ... */
Commentaires :
/* Styles pour le corps de la page */ : Styles appliqués au corps de la page.
/* Styles pour l'en-tête */ : Styles appliqués à l'en-tête de la page.

DOCUMENTATION JAVASCRIPT
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

/* ... autres fonctions ... */
Commentaires :
document.getElementById('searchButton').addEventListener('click', searchCocktail); : Ajoute un écouteur d'événements sur le bouton de recherche.
searchCocktail() : Fonction pour effectuer la recherche de cocktails.
/* ... autres fonctions ... */ : Commentaire pour indiquer qu'il y a d'autres fonctions dans ce fichier.
