
import { useRef, useState } from "react"

const SimpleInput=(props)=>{
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputChangeHandler = event =>{
    setEnteredName(event.target.value)
  }
  const formSubmission = (e) =>{
    e.preventDefault()
    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false)
      return;
    }
    setEnteredNameIsValid(true)
    console.log(enteredName)
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue)
  }
  return (
    <form onSubmit={ formSubmission }>
      <div>
        <label htmlFor="name"> Your Name</label>
        <input ref={nameInputRef} type="text" onChange={ nameInputChangeHandler } />
      </div>
      {!enteredNameIsValid && <p>Name must not be empty.</p>}
      <div>
        <button>Submit</button>
      </div>
    </form>
  )

}

export default SimpleInput