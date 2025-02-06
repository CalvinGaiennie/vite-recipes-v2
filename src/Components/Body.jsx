import styles from "./Body.module.css";

export function Body({ selectedRecipe, numOfServings }) {
  // Scale ingredients based on number of servings
  const scaledIngredients = selectedRecipe.ingredients.map((ingredient) => {
    // You might want to add logic here to scale quantities based on numOfServings
    return ingredient;
  });

  return (
    <div>
      <div className={styles.container}>
        <div>
          <h2>Ingredients</h2>
          <p>
            {scaledIngredients.map((ingredient, index) => (
              <p key={index}>•{ingredient}</p>
            ))}
          </p>
        </div>
        <div>
          <h2>Steps</h2>
          <p>
            {selectedRecipe.steps.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
