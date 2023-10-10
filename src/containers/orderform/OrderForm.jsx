import React from "react";
import "./orderform.css";
import { useState,useEffect } from "react";
import CheckBoxContainer from "../checkbox-container/CheckboxContainer";
import PropertiesContainer from "../properties-container/PropertiesContainer";
import NoteComponent from "../../components/note-component/NoteComponent";
import OrderCheckContainer from "../order-check-container/OrderCheckContainer";
import { formSchema } from "../../formSchema";


function OrderForm() {
  const [formState, setFormState] = useState({
    name:"",
    size: "",
    dough: "",
    ingredients: [],
    notes: "",
    quantity: 1,
    price: 85.50,
    ingredientPrice: 5.00,
    totalPrice: 0.00,
    isValid:false,
  });
  const [errorState, setErrorState] = useState({
    name:"",
    size: "",
    dough: "",
    ingredients: "",
  });
  const [isValid, setIsValid] = useState(false);


  useEffect(() => {
    formSchema.isValid(formState).then((valid) => setIsValid(valid));
    console.log(formState);
  }, [formState]);


 const handleSubmit =()=>{
 //
 }

  return (
    <form id='pizza-form' onSubmit={handleSubmit} >
  
        <PropertiesContainer formState={formState} setFormState={setFormState} errorState={errorState} setErrorState={setErrorState}/>
        <CheckBoxContainer formState={formState} setFormState={setFormState} errorState={errorState} setErrorState={setErrorState}/>
        <NoteComponent formState={formState} setFormState={setFormState}/>
        <hr className="break" />
        <OrderCheckContainer formState={formState} setFormState={setFormState} errorState={errorState} setErrorState={setErrorState}/>
       
   
    </form>
  );
}

export default OrderForm;
