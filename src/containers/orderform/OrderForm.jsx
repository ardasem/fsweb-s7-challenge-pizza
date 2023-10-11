import React from "react";
import "./orderform.css";
import { useState, useEffect } from "react";
import CheckBoxContainer from "../checkbox-container/CheckboxContainer";
import PropertiesContainer from "../properties-container/PropertiesContainer";
import NoteComponent from "../../components/note-component/NoteComponent";
import OrderCheckContainer from "../order-check-container/OrderCheckContainer";
import { formSchema } from "../../formSchema";

function OrderForm() {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    dough: "",
    ingredients: [],
    notes: "",
    quantity: 1,
    price: 85.5,
    ingredientPrice: 5.0,
    totalPrice: 0.0,
  });
  const [errorState, setErrorState] = useState({
    name: "",
    size: "",
    dough: "",
    ingredients: "",
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => setIsValid(valid));
  }, [formState]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <NoteComponent
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
        formState={formState}
        setFormState={setFormState}
        heading={"Sipariş Notu"}
        name={"notes"}
        msg={"Sipariş notunuzu buradan iletebilirsiniz..."}
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
