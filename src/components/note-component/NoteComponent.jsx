import React from "react";
import "./notecomponent.css";
import { formSchema } from "../../formSchema";
import * as Yup from "yup";

function NoteContainer(props) {
  const {
    formState,
    setFormState,
    name,
    heading,
    msg,
    id,
    errorState,
    setErrorState,
  } = props;
  const componentName = name;

  const handleChange = (e) => {
    const { value, name } = e.target;

    const newState = {
      ...formState,
      [name]: value,
    };

    setFormState(newState);

    if (name === "name") {
      Yup.reach(formSchema, name)
        .validate(value)
        .then((valid) => {
          setErrorState({ ...errorState, [name]: "" });
        })
        .catch((err) => {
          setErrorState({ ...errorState, [name]: err.errors[0] });
        });
    }
  };

  return (
    <div className="note--component">
      <p className="form--heading">{heading}</p>
      {errorState[componentName] && <p data-cy='error' className="red">{errorState[componentName]}</p> }
      <textarea
        id={id}
        name={name}
        cols="1"
        rows="1"
        placeholder={msg}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default NoteContainer;
