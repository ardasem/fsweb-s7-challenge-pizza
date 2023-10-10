import React from "react";
import data from "./data.js";
import './CheckBox.css'

function CheckBox({ formState, setFormState }) {
  const handleChange = (e) => {
    const { checked, value } = e.target;

    setFormState((prevState) => {
      let updatedIngredients;
      if (checked) {
        updatedIngredients = [...prevState.ingredients, value];
      } else {
        updatedIngredients = prevState.ingredients.filter(
          (ingredient) => ingredient !== value
        );
      }

      return {
        ...formState,
        ingredients: updatedIngredients,
      };
    });

  
  };

  return (
    <>
      {data.map((ingredient) => {
        return (
          <label className="checkbox--container" key={ingredient + "div"}>
            {ingredient}
            <input
              type="checkbox"
              id={ingredient}
              key={ingredient}
              value={ingredient}
              onChange={handleChange}
              checked={formState.ingredients.includes(ingredient)}
            />
             <span className="checkmark"></span>
          </label>
        );
      })}
    </>
  );
}

export default CheckBox;
