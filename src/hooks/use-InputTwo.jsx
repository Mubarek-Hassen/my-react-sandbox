import { useState } from "react";

const useInputTwo =(validatingFunc)=>{
  const [enteredVal, setEnteredVal] = useState('')
  const [isTouch, setIsTouch] = useState(false)

  const valIsValid = validatingFunc(enteredVal);
  const valHasError = !valIsValid && isTouch;

  const changeHandle =e=>{
    setEnteredVal(e.target.value)
  }

  const blurHandler = e =>{
    setIsTouch(true)
  }

  const resetter =(e)=>{
    setEnteredVal("")
    setIsTouch(false)
  }

  return {
    val: enteredVal, isValid: valIsValid, valHasError, resetter, blurHandler, changeHandle
  }

}
export default useInputTwo;