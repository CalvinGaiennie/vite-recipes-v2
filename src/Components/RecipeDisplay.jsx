import { useState } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import RecipeSelector from "./RecipeSelector";
const recipeNames = [
  { title: "Sushi Rice", key: "SushiRice" },
  { title: "Pita Bread", key: "PitaBread" },
  { title: "Chicken Salad", key: "ChickenSalad" },
  { title: "Beef Noodles", key: "BeefNoodles" },
  { title: "Chicken Parmesean", key: "ChickenParmesean" },
  { title: "Meatloaf", key: "Meatloaf" },
];

const recipeData = {
  SushiRice: {
    title: "Sushi Rice",
    ingredients: [
      `{rice} cups of sushi rice (short or medium grain rice.)`,
      `{water} cups of water`,
      `{vinegar} cups of rice vinegar`,
      "{sugar} cups of sugar",
      "{salt} teaspoons of salt",
    ],
    steps: [
      `Step 1: Put the rice in a large bowl and rince it four times.`,
      `Step 2: Cook the rice how your would normally cook rice. When it is finished cover it and let it cool for 10 mins.`,
      `Step 3: In a small saucepan, combine the rice vinegar, sugar, and salt. keep it on low heat and stir slowly until the salt and sugar disolve into the vinegar.`,
      `Step 4: Put the rice in a large bown or a baking sheet, pour the vinegar on it and slowly fold the vinegar mixture into the rice being carful to not mash the rice.`,
      `Step 5: Let the rice cool to room temperature. It can be slightly warm, but not hot.`,
    ],
    ingredientMap: {
      rice: 1,
      water: 1,
      vinegar: 0.25,
      sugar: 0.125,
      salt: 0.5,
    },
  },
  PitaBread: {
    title: "Pita Bread",
    ingredients: [
      `{water} cups of water`,
      `{yeast} teaspoons of yeast`,
      `{sugar} teaspoons of sugar`,
      "{flour} cups of flour",
      "{salt} teaspoons of salt",
      "{oliveOil} tablespoons of olive oil",
    ],
    steps: [
      `Step 1: Mix {water} cup of warm water {yeast} teaspoons of yeast and {sugar} teaspoons of sugar in a bowl then let it sit for 5 minutes.,`,
      `Step 2: Add {flour} cups of flour. {salt} teaspoons of salt and {oliveOil} tablespoon of olive oil.`,
      `Step 3: Sprinkle flour on a clean work surface then knead the dough for 5-7 minutes slowly adding about {flour2} cups of flour until the dough is smooth and elastic.`,
      `Step 4: Coat a bowl in olive oil then put the dough in and let it rise until it doubles in size. About an hour.`,
      `Step 5: Cut the dough into small peices roll it flat and cook it for 2 mins each side in the oven or on the stove.`,
    ],
    ingredientMap: {
      water: 0.5,
      yeast: 1,
      sugar: 0.25,
      flour: 1.5,
      salt: 1,
      oliveOil: 0.5,
    },
  },
  ChickenSalad: {
    title: "Chicken Salad",
    ingredients: [
      `{chickenBreast} pounds of cooked chicken breast diced.`,
      `{mayonnaise} cups of mayonnaise`,
      `{celery} cups of celery, finely chopped`,
      "{redOnion} cups of red onion, finely chopped",
      "{lemonJuice} tablespoons of lemon juice",
    ],
    steps: [
      `Step 1: If you're cooking the chicken let it cool before you dice it.`,
      `Step 2: Mix ingredients in a large bowl.`,
      `Step 3: add salt and pepper to taste.`,
      `Step 4: let it chill in the fridge for at least 30 mins.`,
      `Step 5: Serve`,
    ],
    ingredientMap: {
      chickenBreast: 0.5,
      mayonnaise: 0.375,
      celery: 0.1875,
      redOnion: 0.1875,
      lemonJuice: 0.75,
    },
  },
  BeefNoodles: {
    title: "Beef Noodles",
    ingredients: [
      `{garlic} garlic cloves, minced`,
      `{ginger} inch piece fresh , peeled and finely grated`,
      `{soySauce} cup soy sauce`,
      `{sugar} tablespoons sugar`,
      `{riceVinegar} tablespoons rice vinegar`,
      `{limeJuice} tablespoons freshly squeezed lime juice (about {limes} lime)`,
      `{toastedSesameOil} teaspoons toasted sesame oil`,
      `{fishSauce} teaspoon fish sauce (red boat brand)`,
      `{crushedRedPepperFlakes} teaspoon crushed red pepper flakes`,
      `{beef} pound flap or sirloin steak, thinly sliced against the grain`,
      `{salt} teaspoon kosher salt`,
      `{blackPepper} teaspoon freshly ground black pepper`,
      `{flour} tablespoons flour`,
      `{avocadoOil} tablespoon avocado oil`,
      `{salt} tablespoon of salt`,
      `{noodles} ounces dried lo mein, chow mein, or ramen noodles`,
      `{broccoli} cups of small broccoli florets`,
    ],
    steps: [
      `Step 1: Start a pot of water boiling for the noodles.`,
      `Step 2: Whisk together the ingredients for the sauce.`,
      `Step 3: Cut the beef, season it, then mix the flour and oil with it in a bowl.`,
      `Step 4: When the water is boiling, add ({salt} tablespoon) of salt, and the noodles. Cook until tender, about three minutes. Reserve 1/2 a cup of pasta water, drain the noodles, rince them under cold water, then set them aside.`,
      `Step 5: In a large deep skillet, heat the avacoado oil overmedium-high heat. Add the steak in a single layer and cook until golden brown on all sides and cooked through, 2 to 3 minutes per side. Transfer to a clean plate and set aside.`,
      `Step 6: Make sure the skillet is still well oiled then add in the brocoli and cook it. Toss it until it's slightly tender, 2-3 minutes. Add 1/4 cup of the reserved pasta water and partially steam the brocoli, uncovered until it turns bright green and the liquid has evaporated, about two more minutes.`,
      `Step 7: Add the beef back to the skillet and pour in the sauce and remaining .25 cups of pasta water, and toss constantly until the noodles are coated and the sauce has started to thicken, about 2 more minutes.`,
      `Step 8: Serve.`,
    ],
    ingredientMap: {
      garlic: 1,
      ginger: 0.25,
      soySauce: 0.125,
      sugar: 0.5,
      riceVinegar: 0.5,
      limeJuice: 0.5,
      limes: 0.25,
      toastedSesameOil: 0.5,
      fishSauce: 0.25,
      crushedRedPepperFlakes: 0.125,
      beef: 0.25,
      salt: 0.25,
      blackPepper: 0.125,
      flour: 0.5,
      avocadoOil: 0.25,
      salt: 0.25,
      noodles: 2,
      broccoli: 0.75,
    },
  },
  ChickenParmesean: {
    title: "Chicken Parmesan",
    ingredients: [
      `{chickenBreast} Large Chick Breast`,
      `{flour} cup of flour`,
      `{eggs} large eggs`,
      "{breadcrumbs} cups of Italian breadcrumbs",
      "{parmesan} cups of grated Parmesan cheese",
      "{garlicPowder} teaspoons of garlic powder",
      "{italianSeasoning} teaspoon of Italian seasoning",
      "{marinaraSauce} cups of marinara sauce",
      "{mozzarella} cups shredded mozzarella cheese.",
    ],
    steps: [
      `Step 1: Cut the chicken breasts in half lengthwise then pound them to an even thickness (about 1/2 an inch thick) Season both sides with salt and pepper.`,
      `Step 2: Set up three bowls in a row. Bowl: 1 containing the flour. Bowl: 2 containing the eggs (beaten). Bowl: 3 the breadcrumbs, Parmesan, garlic powder, Italian seasoning and, salt and pepper to taste.`,
      `Step 3: Dredge the chicken in the flour, shaking off the excess. Dip it into the beaten eggs, coating both sides. Press the chicken into the breadcrumb mixture making sure its evenly coated.`,
      `Step 4: Heat olive oil in a large skillet over medium heat. Once the oil is hot, add the chicken and cook until golden brown and crispy. Transfer the chicken to a plate.`,
      `Step 5: Preheat the oven to 400℉. Spread a thin layer of marinara sauce in the bottom of a baking dish. Place the chicken on top of the sauce. Spread some more marinara sauce over each chicken piece then pour the mozzarella cheese on top.`,
      `Step 6: Bake the chicken for 15 minutes.`,
      `Step 7: Serve`,
    ],
    ingredientMap: {
      chickenBreast: 2,
      flour: 1,
      eggs: 2,
      breadcrumbs: 1,
      parmesan: 0.5,
      garlicPowder: 1,
      italianSeasoning: 1,
      marinaraSauce: 1.5,
      mozzarella: 1.5,
    },
  },
  Meatloaf: {
    title: ["Meatloaf"],
    ingredients: [
      "{groundBeef}lbs of ground beef",
      "{breadCrumbs} cups of breadcrumbs",
      "{milk} cups of milk",
      "{onion} onions finely minced",
      "{garlic} garlic clove",
      "{egg} eggs",
      "{ketchup} tablestoons of ketchup",
      "{worcestshire} tablespoons of Worcerstershire sauce",
      "{salt} teaspoons of salt",
      "{pepper} teaspoons of black pepper",
      "{ketchupS} cups of ketchup",
    ],
    steps: [
      "Step 1: Preheat the oven to 350",
      "Step 2: Mix the ground beef, breadcrumbs, milk, onion, garlic, egg, {ketchup} tablespoons of ketchup, Worcestershire, salt, and pepper, gently in a large bowl with your hands until everytthing is just combined. Dont overmix, as this can make the meatloaf tough.",
      "Step 3: Shape the loaf in a pan or baking dish.",
      "Step 4: Spread {ketchupS} cups of ketchup over the top of the meatloaf.",
      "Step 5: Bake it for 55-65 minutes.",
      "Step 6: Let it rest for 5-10 minutes before slicing. This helps it hold together when you cut it.",
      "Step 7: Serve ",
    ],
    ingredientMap: {
      groundBeef: 1,
      breadCrumbs: 0.5,
      milk: 0.5,
      onion: 1,
      garlic: 1,
      egg: 1,
      ketchup: 2,
      worcestshire: 1,
      salt: 1,
      pepper: 0.5,
      ketchupS: 0.25,
    },
  },
};

function RecipeDisplay() {
  //Gets the current Recipe Name
  const [selectedRecipe, setSelectedRecipe] = useState("Beef Noodles");
  // Gets the number of servings
  const [numOfServings, setNumOfServings] = useState(2);
  return (
    <div>
      <Header
        selectedRecipe={selectedRecipe}
        onSetSelectedRecipe={setSelectedRecipe}
        numOfServings={numOfServings}
        onSetNumOfServings={setNumOfServings}
        recipeNames={recipeNames}
        pageTitle="Calvin's Recipes"
      />
      <RecipeSelector
        selectedRecipe={selectedRecipe}
        onSetSelectedRecipe={setSelectedRecipe}
        numOfServings={numOfServings}
        onSetNumOfServings={setNumOfServings}
        recipes={recipeNames}
      />
      <hr></hr>
      <Body
        selectedRecipe={selectedRecipe}
        numOfServings={numOfServings}
        recipeData={recipeData}
      />
    </div>
  );
}

export default RecipeDisplay;
