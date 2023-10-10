import React from "react";
import "./orderform.css";
import { useState } from "react";
import CheckBoxContainer from "../checkbox-container/CheckboxContainer";
import PropertiesContainer from "../properties-container/PropertiesContainer";
import NoteComponent from "../../components/note-component/NoteComponent";
import OrderCheckContainer from "../order-check-container/OrderCheckContainer";
//import * as Yup from 'yup'

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

  //const schema = Yup.object.schema

 const handleSubmit =()=>{
 //
 }

  return (
    <form id='pizza-form' onSubmit={handleSubmit} >
  
        <PropertiesContainer formState={formState} setFormState={setFormState}/>
        <CheckBoxContainer formState={formState} setFormState={setFormState}/>
        <NoteComponent formState={formState} setFormState={setFormState}/>
        <hr className="break" />
        <OrderCheckContainer formState={formState} setFormState={setFormState}/>
       
   
    </form>
  );
}

export default OrderForm;
