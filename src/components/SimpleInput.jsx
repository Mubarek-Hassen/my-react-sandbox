import { useState } from "react"

import useInput from "../hooks/use-input";

const SimpleInput=(props)=>{

  const { 
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput( value => value.trim() !== '');

  // E-Mail
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.trim().includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
    console.log('form is valid.')
  }

  const emailInputChangeHandler = e =>{
    setEnteredEmail(e.target.value)
  }

  const emailInputBlurHandler = e =>{
    setEnteredEmailTouched(true)
  }



  const formSubmission = (e) =>{
    e.preventDefault()
    setEnteredEmailTouched(true)
    if(!formIsValid){
      return;
    }
    console.log(enteredName)
    console.log(enteredEmail)
    resetNameInput()
    setEnteredEmail("")
    setEnteredEmailTouched(false)
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
        <input  type="email" value={ enteredEmail } onChange={ emailInputChangeHandler } onBlur={ emailInputBlurHandler } />
        {emailInputIsInvalid && <p>E-Mail must not be empty and must be valid.</p> }
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )

}

export default SimpleInput