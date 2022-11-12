import { useEffect,useState } from "react"

const SimpleInput=(props)=>{
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  // const [formIsValid, setFormIsValid] = useState(false);

  let formIsValid = false;

  if(enteredNameIsValid /** && any other input or dependencies for the form */){
    formIsValid = true;
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

  const nameInputBlurHandler = e =>{
    setEnteredNameTouched(true)
  }



  const formSubmission = (e) =>{
    e.preventDefault()
    setEnteredNameTouched(true)
    if(!enteredNameIsValid){
      return;
    }
    console.log(enteredName)
    setEnteredName("")
    setEnteredNameTouched(false)
  }
  
  return (
    <form onSubmit={ formSubmission }>
      <div>
        <label htmlFor="name"> Your Name</label>
        <input  type="text" value={enteredName} onChange={ nameInputChangeHandler } onBlur={ nameInputBlurHandler } />
      </div>
      {nameInputIsInvalid && <p>Name must not be empty.</p>}
      <div>
        <button>Submit</button>
      </div>
    </form>
  )

}

export default SimpleInput