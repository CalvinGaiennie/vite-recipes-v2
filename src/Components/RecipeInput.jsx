import { useRef, useState } from "react";
import { Header } from "./Header";
import styles from "./RecipeInput.module.css";
function RecipeInput() {
  const recipeNameRef = useRef(null);
  const ingredientsRef = useRef(null);
  const stepsRef = useRef(null);
  const recipeAuthorRef = useRef(null);
  const [recipe, setRecipe] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name: recipeNameRef.current.value,
      ingredients: ingredientsRef.current.value.split("&&&"),
      steps: stepsRef.current.value.split("&&&"),
    };

    setRecipe(newRecipe);

    recipeNameRef.current.value = "";
    ingredientsRef.current.value = "";
    stepsRef.current.value = "";
  };

  return (
    <div>
      <Header pageTitle="Recipe Input" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.flex}>
          <div>
            <h3>Recipe Author</h3>
            <input
              type="text"
              placeholder="Recipe Author"
              ref={recipeAuthorRef}
            />
          </div>
          <div>
            <h3>Recipe Name</h3>
            <input type="text" placeholder="Recipe Name" ref={recipeNameRef} />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <h3>Ingredients</h3>
            <p>(separated by &&&)</p>
            <input type="text" placeholder="Ingredients" ref={ingredientsRef} />
          </div>
          <div>
            <h3>Steps</h3>
            <p>(separated by &&&)</p>
            <input type="text" placeholder="Steps" ref={stepsRef} />
          </div>
        </div>
        <button type="submit">Add Recipe</button>
      </form>

      {recipe && (
        <div>
          <h2>{recipe.name}</h2>
          <h3>Author: {recipe.author}</h3>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Steps:</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default RecipeInput;
