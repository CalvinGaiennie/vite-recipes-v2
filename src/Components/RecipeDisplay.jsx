import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import RecipeSelector from "./RecipeSelector";
import styles from "./RecipeDisplay.module.css";
// Create a constant for the API URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

function RecipeDisplay() {
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [numOfServings, setNumOfServings] = useState(2);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/recipes`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        if (data.length > 0) {
          setSelectedRecipe(data[0].name);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setError("Failed to load recipes");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading recipes...</div>;
  if (error) return <div>{error}</div>;
  if (recipes.length === 0) return <div>No recipes found</div>;

  const currentRecipe = recipes.find(
    (recipe) => recipe.name === selectedRecipe
  );

  return (
    <div>
      <Header
        selectedRecipe={selectedRecipe}
        onSetSelectedRecipe={setSelectedRecipe}
        numOfServings={numOfServings}
        onSetNumOfServings={setNumOfServings}
        recipes={recipes}
        pageTitle="Recipe Display"
      />
      <div className={styles.display}>
        <RecipeSelector
          selectedRecipe={selectedRecipe}
          onSetSelectedRecipe={setSelectedRecipe}
          numOfServings={numOfServings}
          onSetNumOfServings={setNumOfServings}
          recipes={recipes}
        />
      </div>
      <hr />
      <div className={styles.display}>
        {currentRecipe && (
          <Body selectedRecipe={currentRecipe} numOfServings={numOfServings} />
        )}
      </div>
    </div>
  );
}

export default RecipeDisplay;
