const BasicForm =(props)=>{
  return (
    <form>
      <div>
        <div>
          <label htmlFor="name">First Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="name">E-Mail Address</label>
          <input type="text" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default BasicForm;