export function RecipeOptions({ recipeObj }) {
  return <option value={recipeObj.title}>{recipeObj.title}</option>;
}
