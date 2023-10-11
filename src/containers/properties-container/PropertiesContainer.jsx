import React from "react";
import "./propertiescontainer.css";
import { formSchema } from "../../formSchema";
import * as Yup from "yup";

function PropertiesContainer(props) {
  const { formState, setFormState, errorState, setErrorState } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

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
        <p className="form--heading">Boyut Seç</p>
        <div className="radio--buttons">
          <label className={`radio--button--container ${formState.size === "small" ? "active" : ""}`} >
            S
            <input
              type="radio"
              name="size"
              value="small"
              onChange={handleChange}
              checked={formState.size === "small"}
            />
          </label>

          <label className={`radio--button--container ${formState.size === "medium" ? "active" : ""}`}>
            M
            <input
              type="radio"
              name="size"
              value="medium"
              onChange={handleChange}
              checked={formState.size === "medium"}
            />
          </label>

          <label className={`radio--button--container ${formState.size === "large" ? "active" : ""}`}>
            L
            <input
              className={formState.size === "large" ? "active" : null}
              type="radio"
              name="size"
              value="large"
              onChange={handleChange}
              checked={formState.size === "large"}
            />
          </label>
        </div>
      </div>

      <div className="dough--dropdown">
        <p className="form--heading">Hamur Seç</p>
        <select name="dough" onChange={handleChange}>
          <option value="">Hamur Seç</option>
          <option value="thick">Kalın</option>
          <option value="thin">İnce</option>
        </select>
        {errorState.dough && <p className="error">{errorState.dough}</p>}
      </div>
    </div>
  );
}

export default PropertiesContainer;
