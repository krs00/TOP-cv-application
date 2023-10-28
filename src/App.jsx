import './App.css'
import FormInput from './components/FormInput';
import Resume from './components/Resume';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';



function App() {

  // global object for form personal data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '' 
  })

  function handleChange(e) {
    // grab the name attribute of the current input field
    const name = e.target.name
    // grab text/value inputted into input field
    const value = e.target.value
    // make a copy of the form data object to avoid mutating state
    const updatedFormData = { ...formData }
    // update key value from form data object copy with value of 
    updatedFormData[name] = value
    // update form data with copy
    setFormData(updatedFormData)
  }

 
  return (
    <>

      <FormInput labelText="Full name" handleChange={handleChange} id="name" />

      <Resume formData={formData} />

    </>
  )
}

export default App
