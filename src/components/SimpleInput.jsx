
import { useRef, useState } from "react"

const SimpleInput=(props)=>{
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const nameInputChangeHandler = event =>{
    setEnteredName(event.target.value)
  }
  const formSubmission = (e) =>{
    e.preventDefault()
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
      <div>
        <button>Submit</button>
      </div>
    </form>
  )

}

export default SimpleInput