import React from "react";
import "./propertiescontainer.css";
import { useEffect } from "react";

function PropertiesContainer(props) {
  const { formState, setFormState } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div className="pizza--properties">
      <div>
        <p className="form--heading">Boyut Seç</p>
        <div className="radio--buttons">
          <label className="radio--button--container">
            S
            <input type="radio"
              name="size"
              value="small"
              onChange={handleChange}
              checked={formState.size === "small"} />
            
          </label>

          <label className="radio--button--container">
            M
            <input
              type="radio"
              name="size"
              value="medium"
              onChange={handleChange}
              checked={formState.size === "medium"}
            />
        
          </label>

          <label className="radio--button--container">
           L
            <input
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
      </div>
    </div>
  );
}

export default PropertiesContainer;
