import React from "react";
import "./orderform.css";
import { useState, useEffect } from "react";
import CheckBoxContainer from "../checkbox-container/CheckboxContainer";
import PropertiesContainer from "../properties-container/PropertiesContainer";
import NoteComponent from "../../components/note-component/NoteComponent";
import OrderCheckContainer from "../order-check-container/OrderCheckContainer";
import { formSchema } from "../../formSchema";
import { useHistory } from "react-router-dom";
import axios from 'axios'

function OrderForm(props) {
  const history = useHistory();
  const {finalOrderState, setFinalOrderState } = props;
  const [formState, setFormState] = useState({
    foodName: "Position Absolute Acı Pizza",
    name: "",
    size: "",
    dough: "",
    ingredients: [],
    notes: "",
    quantity: 1,
    price: 85.50,
    ingredientPrice: 5.00,
    totalPrice: 0.00,
  });
  const [errorState, setErrorState] = useState({
    name: "",
    size: "",
    dough: "",
    ingredients: "",
    notes: "",
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => setIsValid(valid));
  }, [formState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice =
      (formState["ingredients"].length * formState.ingredientPrice +
        formState.price) *
      formState.quantity;

      const finalState = {
        ...formState,
        totalPrice: totalPrice,
      };

    setFinalOrderState(finalState);

    axios.post('https://reqres.in/api/users', finalOrderState)
    .then(function (response) {
      setFinalOrderState({
        ...finalState,
        id: response.data.id,
        createdAt : response.data.createdAt
      });;
    })
    .catch(function (error) {
      console.log(error);
    });


    history.push("/success");
  };

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <NoteComponent
        id={"name-input"}
        formState={formState}
        setFormState={setFormState}
        errorState={errorState}
        setErrorState={setErrorState}
        heading={"İsminiz:"}
        name={"name"}
        msg={"Lütfen isminizi giriniz..."}
      />
      <PropertiesContainer
        formState={formState}
        setFormState={setFormState}
        errorState={errorState}
        setErrorState={setErrorState}
      />
      <CheckBoxContainer
        formState={formState}
        setFormState={setFormState}
        errorState={errorState}
        setErrorState={setErrorState}
      />
      <NoteComponent
        id={"special-text"}
        formState={formState}
        setFormState={setFormState}
        heading={"Sipariş Notu"}
        name={"notes"}
        msg={"Sipariş notunuzu buradan iletebilirsiniz..."}
        errorState={errorState}
        setErrorState={setErrorState}
      />
      <hr className="break" />
      <OrderCheckContainer
        formState={formState}
        setFormState={setFormState}
        errorState={errorState}
        setErrorState={setErrorState}
        isValid={isValid}
      />
    </form>
  );
}

export default OrderForm;
