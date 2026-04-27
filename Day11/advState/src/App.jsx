import Dropdown from "./components/Dropdown";
import { useState } from "react";
import './App.css';
import ModalPage from "./pages/ModalPage";

function App() {

const [selection,setSelection]=useState(null)

const handleSelect=(option)=>{
  setSelection(option)
}
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div>
      <Dropdown 
      value={selection}  
      options={options} 
      onChange={handleSelect}/>
    </div>
  );
}

export default App;