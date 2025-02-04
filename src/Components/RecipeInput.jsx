import { useState } from "react";
import { Header } from "./Header";
import styles from "./RecipeInput.module.css";

// Create a constant for the API URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

function RecipeInput() {
  const [formData, setFormData] = useState({
    author: "",
    name: "",
    ingredients: [""],
    steps: [""],
  });

  function deleteInput(i, field) {
    const newData = [...formData[field]];
    newData.splice(i, 1);
    setFormData({ ...formData, [field]: newData });
  }

  function addIngredient() {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ""],
    });
  }

  function addStep() {
    setFormData({
      ...formData,
      steps: [...formData.steps, ""],
    });
  }

  function handleChange(e, index, field) {
    if (field === "ingredients" || field === "steps") {
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
    console.log("Attempting to submit:", formData);

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
          steps: [""],
        });
      })
      .catch((error) => {
        console.error("Error details:", error);
      });
  }

  return (
    <div>
      <Header pageTitle="Recipe Input" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.flex}>
          <div>
            <h3>Recipe Author</h3>
            <input
              type="text"
              name="author"
              placeholder="Recipe Author"
              value={formData.author}
              onChange={(e) => handleChange(e, 0, "author")}
            />
          </div>
          <div>
            <h3>Recipe Name</h3>
            <input
              type="text"
              name="name"
              placeholder="Recipe Name"
              value={formData.name}
              onChange={(e) => handleChange(e, 0, "name")}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <div className={styles.multiInput}>
              <h3>Ingredients</h3>
              {formData.ingredients.map((ingredient, i) => (
                <div key={i} className={styles.label}>
                  <p>{i}: </p>
                  <input
                    type="text"
                    name={`ingredient-${i}`}
                    placeholder="Ingredients"
                    value={formData.ingredients[i]}
                    onChange={(e) => handleChange(e, i, "ingredients")}
                  />
                  <p onClick={() => deleteInput(i, "ingredients")}>❌</p>
                </div>
              ))}
              <button type="button" onClick={() => addIngredient()}>
                Add Step
              </button>
            </div>
          </div>
          <div>
            <div className={styles.multiInput}>
              <h3>Steps</h3>
              {formData.steps.map((step, i) => (
                <div key={i} className={styles.label}>
                  <p>{i}: </p>
                  <input
                    type="text"
                    name={`step-${i}`}
                    placeholder="Steps"
                    value={formData.steps[i]}
                    onChange={(e) => handleChange(e, i, "steps")}
                  />
                  <p onClick={() => deleteInput(i, "steps")}>❌</p>
                </div>
              ))}
              <button type="button" onClick={() => addStep()}>
                Add Step
              </button>
            </div>
          </div>
        </div>

        <button type="submit">Add Recipe</button>
      </form>

      <pre>{JSON.stringify(formData)}</pre>
    </div>
  );
}

export default RecipeInput;
