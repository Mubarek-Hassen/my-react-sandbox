import useInputTwo from "../hooks/use-InputTwo";

const BasicForm =(props)=>{

  // FIRST NAME HANDLER
  const {
    val: enteredFName,
    isValid: enteredFNameIsValid,
    valHasError: fNameHasError,
    changeHandle: fNameChangeHandler,
    blurHandler: fNameBlur,
    resetter: fNameReset
  } = useInputTwo( val => val.trim() !== '')

  // LAST NAME HANDLER

  const {
    val: enteredLName,
    isValid: enteredLNameIsValid,
    valHasError: lNameHasError,
    changeHandle: lNameChangeHandler,
    blurHandler: lNameBlur,
    resetter: lNameReset
  } = useInputTwo( val => val.trim() !== '')

  //E-MAIL HANDLER
  const {
    val: enteredEmail,
    isValid: enteredEmailIsValid,
    valHasError: emailHasError,
    changeHandle: emailChangeHandler,
    blurHandler: emailBlur,
    resetter: emailReset
  } = useInputTwo( val => val.trim().includes('@'))

  const formSubmitter = e=>{
    e.preventDefault()
    if(!completeForm){
      return;
    }
    console.log(enteredFName)
    console.log(enteredLName)
    fNameReset()
    lNameReset()
    emailReset()
  }

  let completeForm = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid){
    completeForm = true
  }

  return (
    <form onSubmit={formSubmitter}>
      <div>
        <div>
          <label htmlFor="name">First Name</label>
          <input type="text" value={enteredFName} onChange={fNameChangeHandler} onBlur={fNameBlur} />
          {fNameHasError && <p>First Name is empty.</p>}
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input type="text" value={ enteredLName } onChange={lNameChangeHandler} onBlur={lNameBlur} />
          {lNameHasError && <p>Last Name is empty.</p>}
        </div>
        <div>
          <label htmlFor="email">E-Mail Address</label>
          <input type="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlur} />
          {emailHasError && <p>Email has error.</p>}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default BasicForm;