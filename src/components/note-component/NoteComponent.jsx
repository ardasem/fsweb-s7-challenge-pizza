import React from "react";
import './notecomponent.css'


function NoteContainer(props) {
  const {formState,setFormState,name,heading,msg,errorState} = props;

  const handleChange = (e)=>{
    const {value,name} = e.target

    setFormState((prevState)=>{
      return {
        ...prevState,
        [name]: value
      }

    })

  }

  return (
    <div className="note--component">
      <p className="form--heading">{heading}</p>
      
      <textarea
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
