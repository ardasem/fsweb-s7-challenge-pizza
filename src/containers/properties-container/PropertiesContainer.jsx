import React from "react";
import "./propertiescontainer.css";
import { formSchema } from "../../formSchema";
import * as Yup from "yup";

function PropertiesContainer(props) {
  const { formState, setFormState, errorState, setErrorState } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    console.log(name,value);

    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrorState({ ...errorState, [name]: "" });
      })
      .catch((err) => {
        setErrorState({ ...errorState, [name]: err.errors[0] });
      });
  };

  return (
    <div className="pizza--properties">
      <div>
        <p className="form--heading">Boyut Seç <em>*</em></p>
        <div className="radio--buttons">
          <label
            className={`radio--button--container ${
              formState.size === "S" ? "active" : ""
            }`}
          >
            S
            <input
              type="radio"
              name="size"
              value="S"
              onChange={handleChange}
              checked={formState.size === "S"}
            />
          </label>

          <label
            className={`radio--button--container ${
              formState.size === "M" ? "active" : ""
            }`}
          >
            M
            <input
              type="radio"
              name="size"
              value="M"
              onChange={handleChange}
              checked={formState.size === "M"}
            />
          </label>

          <label
            className={`radio--button--container ${
              formState.size === "L" ? "active" : ""
            }`}
          >
            L
            <input
              type="radio"
              name="size"
              value="L"
              onChange={handleChange}
              checked={formState.size === "L"}
            />
          </label>
        </div>
      </div>

      <div className="dough--dropdown">
        <p className="form--heading">Hamur Seç <em>*</em></p>
        <select name="dough" onChange={handleChange}>
          <option value="">Hamur Seç</option>
          <option value="thick">Kalın</option>
          <option value="thin">İnce</option>
        </select>
        {errorState.dough && <p className="red">{errorState.dough}</p>}
      </div>
    </div>
  );
}

export default PropertiesContainer;
