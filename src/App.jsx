import './App.css'
import FormInput from './components/FormInput';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



function App() {

  // global object for form personal data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    address: ''
  })

  const [educationData, setEducationData] = useState([])

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

  function addEducation() {
    // create new education object
    const newEducation = {
      id: uuidv4(),
      school: '',
      degreee: '',
      start: '',
      end: '',
      location: ''
    }

    setEducationData([...educationData, newEducation])
    console.log(educationData)
  }

  return (
    <>

      <FormInput labelText="Full name" handleChange={handleChange} id="name" />

      <br></br>

      <FormInput labelText="Email" handleChange={handleChange} id="email" />

      <br></br>

      <FormInput labelText="Phone number" handleChange={handleChange} id="phone" />

      <h1>{formData.name}</h1>

      <h1>{formData.email}</h1>

      <h1>{formData.phone}</h1>

      <button onClick={addEducation}>Add education!</button>


    </>
  )
}

export default App
