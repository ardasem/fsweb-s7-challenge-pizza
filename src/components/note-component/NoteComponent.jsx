import React from "react";
import './notecomponent.css'


function NoteContainer(props) {
  const {formState,setFormState} = props;

  const handleChange = (e)=>{
    const {value} = e.target

    setFormState((prevState)=>{
      return {
        ...prevState,
        notes: value
      }

    })

    console.log(formState)

  }

  return (
    <div className="note--component">
      <p className="form--heading">Sipariş Notu</p>
      <textarea
        name="notes"
        cols="1"
        rows="1"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default NoteContainer;
