import { RecipeOptions } from "./RecipeOptions";

export function Header({
  selectedRecipe,
  onSetSelectedRecipe,
  numOfServings,
  onSetNumOfServings,
  recipeNames,
}) {
  const recipes = recipeNames;
  return (
    <div className="header margin">
      <div>
        <h1 className="header-content">Calvin's Recipes</h1>
        <hr></hr>
        <div className="margin flex">
          <div>
            <h3>Recipe</h3>
            <select
              value={selectedRecipe}
              onChange={(e) => onSetSelectedRecipe(e.target.value)}
            >
              {recipes.map((recipe) => (
                <RecipeOptions recipeObj={recipe} key={recipe.title} />
              ))}
            </select>
          </div>
          <div className="numOfServings margin2">
            <h3>Number Of Servings</h3>
            <select
              value={numOfServings}
              onChange={(e) => onSetNumOfServings(e.target.value)}
            >
              {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}
