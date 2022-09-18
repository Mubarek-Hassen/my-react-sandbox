
// import React,{ useState } from "react";
// import Button from "./UI/Button";
import { Component } from "react";


// function App() {
//   const [showP, setShowP] = useState(false);
//   const showParagraph =()=>{
//     setShowP(prevShowP => !prevShowP)
//   }
//   return (
//     <div className="App">
//       <h1>Hi Wubit</h1>
//       {showP && <p>This is Added!</p>}
//       <Button onClick={showParagraph}>Show Paragraph</Button>
//     </div>
//   );
// }


// Had to use class based components before react 16.8

// Hooks were introduced at react 16.8
class App extends Component {
  render(){
    return <h2> Hi React Class</h2>
  }
} 

export default App;
