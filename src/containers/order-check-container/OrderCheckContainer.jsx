import React from "react";
import "./ordercheckcontainer.css";


function OrderCheckContainer(props) {
  const { formState, setFormState } = props;

  const handleChange = (e) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === "increase") {
      setFormState((prevState) => {
        return {
          ...prevState,
          quantity: prevState.quantity + 1,
        };
      });
    } else {
      setFormState((prevState) => {
        return {
          ...prevState,
          quantity: prevState.quantity - 1,
        };
      });
    }

    
  };



  return (
    <div className="order--check--container">
      <div className="quantity--container">
        <button
          className="order--button border--left"
          name="decrease"
          disabled={formState.quantity <= 1 ? true : false}
          onClick={handleChange}
        >
          -
        </button>

        <p className="quantity">{formState.quantity}</p>

        <button
          className="order--button border--right"
          name="increase"
          onClick={handleChange}
        >
          +
        </button>
      </div>

      <div>
        <div className="order--info--container border--top">
        
            <p className="form--heading">Sipariş Toplamı</p>

            <span>
              <p>
                Seçimler:{" "}
                
              </p>

              <p>
              {formState["ingredients"].length * formState.ingredientPrice}
              ₺
              </p>
            </span>

            <span>
              <p className="red">
                Toplam:{" "}
              </p>

              <p className="red">  
              {formState.quantity *
                  (formState.price +
                    formState["ingredients"].length *
                      formState.ingredientPrice)}
                      ₺
              </p>

             
            </span>
         
        </div>
        <button
          className="order--button"
          type="submit"
          disabled={!formState.isValid}
        >
          Sipariş Ver
        </button>
      </div>
    </div>
  );
}

export default OrderCheckContainer;
