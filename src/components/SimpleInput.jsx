import { useState } from "react"

import useInput from "../hooks/use-input";

const SimpleInput=(props)=>{
  // NAME
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
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

  // useEffect(()=>{
  //   if(enteredNameIsValid){
  //     setFormIsValid(true)
  //   } else{
  //     setFormIsValid(false)
  //   }
  // },[enteredNameIsValid])


  const nameInputChangeHandler = event =>{
    setEnteredName(event.target.value)
  }
  const emailInputChangeHandler = e =>{
    setEnteredEmail(e.target.value)
  }

  const nameInputBlurHandler = e =>{
    setEnteredNameTouched(true)
  }

  const emailInputBlurHandler = e =>{
    setEnteredEmailTouched(true)
  }



  const formSubmission = (e) =>{
    e.preventDefault()
    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)
    if(!formIsValid){
      return;
    }
    console.log(enteredName)
    console.log(enteredEmail)
    setEnteredName("")
    setEnteredEmail("")
    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)
  }
  
  return (
    <form onSubmit={ formSubmission }>
      <div>
        <label htmlFor="name"> Your Name</label>
        <input  type="text" value={enteredName} onChange={ nameInputChangeHandler } onBlur={ nameInputBlurHandler } />
      </div>
      {nameInputIsInvalid && <p>Name must not be empty.</p>}
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