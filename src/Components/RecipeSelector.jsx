function RecipeSelector({
  selectedRecipe,
  onSetSelectedRecipe,
  recipes,
  numOfServings,
  onSetNumOfServings,
}) {
  //   const recipes = recipeNames;
  return (
    <div>
      <div>
        <h3>Recipe</h3>
        <select
          value={selectedRecipe}
          onChange={(e) => onSetSelectedRecipe(e.target.value)}
        >
          {recipes.map((recipe) => (
            <option key={recipe._id} value={recipe.name}>
              {recipe.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3>Number Of Servings</h3>
        <select
          value={numOfServings}
          onChange={(e) => onSetNumOfServings(Number(e.target.value))}
        >
          {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default RecipeSelector;
