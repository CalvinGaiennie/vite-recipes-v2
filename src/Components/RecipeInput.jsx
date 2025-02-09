import { useState } from "react";
import { Header } from "./Header";
import styles from "./RecipeInput";
// Create a constant for the API URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

function RecipeInput() {
  const [formData, setFormData] = useState({
    author: "",
    name: "",
    ingredients: [""],
    amounts: [""],
    steps: [""],
    units: [""],
  });

  function deleteInput(i, field) {
    if (field === "ingredients") {
      // Remove both ingredient and amount at the same index
      const newIngredients = [...formData.ingredients];
      const newAmounts = [...formData.amounts];
      const newUnits = [...formData.units];
      newIngredients.splice(i, 1);
      newAmounts.splice(i, 1);
      newUnits.splice(i, 1);
      setFormData({
        ...formData,
        ingredients: newIngredients,
        amounts: newAmounts,
        units: newUnits,
      });
    } else {
      // Handle other fields (steps) as before
      const newData = [...formData[field]];
      newData.splice(i, 1);
      setFormData({ ...formData, [field]: newData });
    }
  }

  function addIngredient() {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ""],
      amounts: [...formData.amounts, ""],
      units: [...formData.units, ""],
    });
  }

  function addStep() {
    setFormData({
      ...formData,
      steps: [...formData.steps, ""],
    });
  }

  function handleChange(e, index, field) {
    if (
      field === "ingredients" ||
      field === "steps" ||
      field === "amounts" ||
      field === "units"
    ) {
      // Handle arrays (ingredients and steps)
      const newData = [...formData[field]];
      newData[index] = e.target.value;
      setFormData({ ...formData, [field]: newData });
    } else {
      // Handle strings (author and name)
      setFormData({ ...formData, [field]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Use API_URL instead of hardcoded localhost
    fetch(`${API_URL}/api/recipes`, {
      method: "GET",
    })
      .then((response) => {
        console.log("Server is reachable");

        // If server is reachable, proceed with POST
        return fetch(`${API_URL}/api/recipes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setFormData({
          author: "",
          name: "",
          ingredients: [""],
          amounts: [""],
          steps: [""],
          units: [""],
        });
      })
      .catch((error) => {
        console.error("Error details:", error);
      });
  }

  return (
    <div className="container">
      <Header pageTitle="Recipe Input" />
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <h3 className="h5 mb-3">Recipe Author</h3>
            <input
              type="text"
              className="form-control"
              name="author"
              placeholder="Recipe Author"
              value={formData.author}
              onChange={(e) => handleChange(e, 0, "author")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <h3 className="h5 mb-3">Recipe Name</h3>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Recipe Name"
              value={formData.name}
              onChange={(e) => handleChange(e, 0, "name")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3 className="h5 mb-3">Ingredients</h3>
            {formData.ingredients.map((ingredient, i) => (
              <div key={i} className=" input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  name={`ingredient-${i}`}
                  placeholder="Ingredients"
                  value={formData.ingredients[i]}
                  onChange={(e) => handleChange(e, i, "ingredients")}
                />
                <input
                  type="text"
                  className="form-control select"
                  name={`amount-${i}`}
                  placeholder="Amount"
                  value={formData.amounts[i]}
                  onChange={(e) => handleChange(e, i, "amounts")}
                />
                <select
                  className="form-control select"
                  value={formData.units[i]}
                  name={`unit-${i}`}
                  onChange={(e) => handleChange(e, i, "units")}
                >
                  <option value="" disabled>
                    Select An Option
                  </option>
                  <option value="ounces">Ounces</option>
                  <option value="grams">Grams</option>
                </select>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => deleteInput(i, "ingredients")}
                >
                  ❌
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => addIngredient()}
            >
              Add Ingredient
            </button>
          </div>
          <div className="col-md-6 mb-4">
            <h3 className="h5 mb-3">Steps</h3>
            {formData.steps.map((step, i) => (
              <div key={i} className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  name={`step-${i}`}
                  placeholder="Steps"
                  value={formData.steps[i]}
                  onChange={(e) => handleChange(e, i, "steps")}
                />
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => deleteInput(i, "steps")}
                >
                  ❌
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => addStep()}
            >
              Add Step
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          <button type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  );
}

export default RecipeInput;
