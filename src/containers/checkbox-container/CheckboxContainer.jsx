import React from 'react'
import CheckBox from '../../components/checkbox/CheckBox'
import './checkboxcontainer.css'

function CheckboxContainer(props) {

    const {formState,setFormState,errorState,setErrorState} = props;

  return (
    <div className="ingredients--container">
          <p className="form--heading">Ek Malzemeler</p>
          <p className='form--text'>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          {errorState.ingredients && <p data-cy='error' className='red'>{errorState.ingredients}</p>}
          <div className="ingredients">
            <CheckBox formState={formState} setFormState={setFormState} errorState={errorState} setErrorState={setErrorState}/>
          </div>
        </div>
  )
}

export default CheckboxContainer