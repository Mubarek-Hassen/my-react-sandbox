// import { useState } from "react"

import useInput from "../hooks/use-input";

const SimpleInput=(props)=>{
  // NAME
  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput( value => value.trim() !== '');

  // E-Mail
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput( value => value.includes('@'))

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
    console.log('form is valid.')
  }


  const formSubmission = (e) =>{
    e.preventDefault()
    if(!formIsValid){
      return;
    }
    console.log(enteredName)
    console.log(enteredEmail)
    resetNameInput()
    resetEmailInput()
  }
  
  return (
    <form onSubmit={ formSubmission }>
      <div>
        <label htmlFor="name"> Your Name</label>
        <input  type="text" value={enteredName} onChange={ nameChangeHandler } onBlur={ nameBlurHandler } />
      </div>
      {nameInputHasError && <p>Name must not be empty.</p>}
      <div>
        <label htmlFor="email"> Your E-Mail</label>
        <input  type="email" value={ enteredEmail } onChange={ emailChangeHandler } onBlur={ emailBlurHandler } />
        {emailInputHasError && <p>E-Mail must not be empty and must be valid.</p> }
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )

}

export default SimpleInput