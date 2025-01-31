import { useState } from "react";
import { Header } from "./Header";
import styles from "./RecipeInput.module.css";
function RecipeInput() {
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [formData, setFormData] = useState({
    author: "",
    name: "",
    ingredients: "",
    steps: "",
  });

  function addIngredient() {
    const ingredient = "";
    setIngredients([...ingredients, ingredient]);
  }

  function addStep() {
    const step = "";
    setSteps([...steps, step]);
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted", formData);
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
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Recipe Name</h3>
            <input
              type="text"
              name="name"
              placeholder="Recipe Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <h3>Ingredients</h3>
            <div>
              <div className={styles.multiInput}>
                {ingredients.map((ingredient, i) => (
                  <input
                    key={i}
                    type="text"
                    name="ingredinets"
                    placeholder="Ingredinets"
                    value={formData.ingredienets}
                    onChange={handleChange}
                  />
                ))}
              </div>

              <button onClick={() => addIngredient()}>Add Step</button>
            </div>
          </div>
          <div>
            <h3>Steps</h3>
            <div>
              <div className={styles.multiInput}>
                {steps.map((step, i) => (
                  <input
                    key={i}
                    type="text"
                    name="steps"
                    placeholder="Steps"
                    value={formData.steps}
                    onChange={handleChange}
                  />
                ))}
              </div>

              <button onClick={() => addStep()}>Add Step</button>
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
