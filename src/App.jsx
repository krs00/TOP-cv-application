import './App.css'
import { useState } from 'react';


function App() {

  const [value, setValue] = useState('')

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    console.log(newValue) 
    setValue(newValue)
  }

  return (
    <>
    <h1>test</h1> 
    </>
  )
}

export default App
