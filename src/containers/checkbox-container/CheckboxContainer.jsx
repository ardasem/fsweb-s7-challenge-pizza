import React from 'react'
import CheckBox from '../../components/checkbox/CheckBox'
import './checkboxcontainer.css'

function CheckboxContainer({formState,setFormState}) {
  return (
    <div className="ingredients--container">
          <p className="form--heading">Ek Malzemeler</p>
          <p className='form--text'>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="ingredients">
            <CheckBox formState={formState} setFormState={setFormState}/>
          </div>
        </div>
  )
}

export default CheckboxContainer