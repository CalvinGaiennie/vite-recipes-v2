export function Steps({ currentObject, updatedIngredientMap }) {
  console.log(updatedIngredientMap);

  function calculateSteps(currentObject, updatedIngredientMap) {
    const updatedSteps = currentObject.steps.map((step) => {
      let updatedStep = step;
      for (const [key, amount] of Object.entries(updatedIngredientMap)) {
        updatedStep = updatedStep.replace(`{${key}}`, amount);
      }
      return updatedStep;
    });
    return updatedSteps;
  }
  const currentSteps = calculateSteps(currentObject, updatedIngredientMap);
  return (
    <div className="margin2 body-parts">
      <h2>Steps</h2>
      <p>
        {currentSteps.map((step) => (
          <p>{step}</p>
        ))}
      </p>
    </div>
  );
}
