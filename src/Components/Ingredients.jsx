export function Ingredients({ currentObject, updatedIngredientMap }) {

  
  function calculateIngredients(currentObject, updatedIngredientMap) {
    const updatedIngredients = currentObject.ingredients.map((ingredient) => {
      let updatedIng = ingredient;
      for (const [key, amount] of Object.entries(updatedIngredientMap)) {
        updatedIng = updatedIng.replace(`{${key}}`, amount);
      }
      return updatedIng;
    });
    return updatedIngredients;
  }
  const currentIngredients = calculateIngredients(
    currentObject,
    updatedIngredientMap
  );
  return (
    <div>
      <h2>Ingredients</h2>
      <p>
        {currentIngredients.map((ingredient) => (
          <p>•{ingredient}</p>
        ))}
      </p>
    </div>
  );
}
