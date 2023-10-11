import React from "react";
import data from "./data.js";
import './CheckBox.css'
import * as Yup from 'yup'
import { formSchema } from '../../formSchema'
import { useEffect } from "react";

function CheckBox(props) {

    const {formState, setFormState, errorState,setErrorState} = props;

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

  useEffect(()=>{
    Yup.reach(formSchema,'ingredients')
    .validate(formState.ingredients)
    .then((valid) => {
      setErrorState({ ...errorState, ingredients: "" });
    })
    .catch((err) => {
      setErrorState({ ...errorState, ingredients: err.errors[0] });
    });
  },[formState])

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
