import { useRef, useState, useEffect } from "react"

const SimpleInput=(props)=>{
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(()=>{
    if(enteredNameIsValid){
      console.log('Name Is Valid!')
    }
  },[enteredNameIsValid])

  const nameInputChangeHandler = event =>{
    setEnteredName(event.target.value)
  }
  const formSubmission = (e) =>{
    e.preventDefault()
    setEnteredNameTouched(true)
    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false)
      return;
    }
    setEnteredNameIsValid(true)
    console.log(enteredName)
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue)
    setEnteredName('')
  }
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  return (
    <form onSubmit={ formSubmission }>
      <div>
        <label htmlFor="name"> Your Name</label>
        <input ref={nameInputRef} type="text" onChange={ nameInputChangeHandler } />
      </div>
      {nameInputIsInvalid && <p>Name must not be empty.</p>}
      <div>
        <button>Submit</button>
      </div>
    </form>
  )

}

export default SimpleInput