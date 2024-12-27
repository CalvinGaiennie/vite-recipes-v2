import { Steps } from "./Steps";
import { Ingredients } from "./Ingredients";

export function Body({ selectedRecipe, numOfServings, recipeData }) {
  const recipeObjects = recipeData;
  const object = selectedRecipe.replace(/\s+/g, "");
  const currentObject = recipeObjects[object];
  function updateIngredientMap(currentObject, numOfServings) {
    const ingredientMap = { ...currentObject.ingredientMap };
    Object.keys(ingredientMap).forEach((key, index) => {
      ingredientMap[key] = ingredientMap[key] * numOfServings;
    });
    return ingredientMap;
  }
  const updatedIngredientMap = updateIngredientMap(
    currentObject,
    numOfServings
  );

  return (
    <div>
      <div className="recipe-body margin">
        <Ingredients
          currentObject={currentObject}
          updatedIngredientMap={updatedIngredientMap}
        />
        <Steps
          currentObject={currentObject}
          updatedIngredientMap={updatedIngredientMap}
        />
      </div>
    </div>
  );
}
