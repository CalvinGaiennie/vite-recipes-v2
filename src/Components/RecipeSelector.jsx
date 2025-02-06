function RecipeSelector({
  selectedRecipe,
  onSetSelectedRecipe,
  recipes,
  numOfServings,
  onSetNumOfServings,
}) {
  //   const recipes = recipeNames;
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className=" col-md-4 mb-3">
          <h3 className="h5 mb-3">Recipe</h3>
          <select
            className="form-select"
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
        <div className=" col-md-4 mb-3">
          <h3 className="h5 mb-3">Number Of Servings</h3>
          <select
            className="form-select"
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
    </div>
  );
}

export default RecipeSelector;
