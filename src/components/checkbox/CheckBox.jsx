import React from "react";
import data from "./data.js";
import './CheckBox.css'
import * as Yup from 'yup'
import { formSchema } from '../../formSchema'


function CheckBox(props) {

    const {formState, setFormState, errorState,setErrorState} = props;

  const handleChange = (e) => {
    const { checked, value } = e.target;

    let updatedIngredients;
    if (checked) {
      updatedIngredients = [...formState.ingredients, value];
    } else {
      updatedIngredients = formState.ingredients.filter(
        (ingredient) => ingredient !== value
      );
    }

    const newState = {
      ...formState,
      ingredients: updatedIngredients,
    }

    setFormState(newState);

    Yup.reach(formSchema,'ingredients')
    .validate(updatedIngredients)
    .then((valid) => {
      setErrorState({ ...errorState, ingredients: "" });
    })
    .catch((err) => {
      setErrorState({ ...errorState, ingredients: err.errors[0] });
    });

 
  
  };


  return (
    <>
      {data.map((ingredient) => {
        return (
          <label data-cy='testcheckbox' className="checkbox--container" key={ingredient + "div"}>
            {ingredient}
            <input
              type="checkbox"
              id={ingredient}
              key={ingredient}
              value={ingredient}
              onChange={handleChange}
              checked={formState.ingredients.includes(ingredient)}
             />
             <span  className="checkmark"></span>
          </label>
        );
      })}
    </>
  );
}

export default CheckBox;
