export function Body({ selectedRecipe, numOfServings }) {
  // Scale ingredients based on number of servings
  const scaledIngredients = selectedRecipe.ingredients.map((ingredient) => {
    // You might want to add logic here to scale quantities based on numOfServings
    return ingredient;
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title h4 mb-4">Ingredients</h2>
                <ul className="list-group list-group-flush">
                  {scaledIngredients.map((ingredient, index) => (
                    <li key={index} className="list-group-item">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title h4 mb-4">Steps</h2>
                <ol className="list-group list-group-numbered">
                  {selectedRecipe.steps.map((step, index) => (
                    <li key={index} className="list-group-item">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
