import './App.css'
import FormSection from './components/FormSection'; 
import ResumeSection from './components/ResumeSection';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
 

function App() {

  // global object for form personal data
  const [formData, setFormData] = useState({
    // personal section
    name: '',
    email: '',
    phone: '',
    address: '',
    // education section
    school: '',
    degree: '',
    eduStart: '',
    eduEnd: '',
    eduLocation: '',
    // experience section
    company: '',
    title: '',
    expStart: '', 
    expEnd: '',
    expLocation: '',
    description: '' 
  })

  function handleInputsChange(e) {
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

  function clearEducationData() {
    const updatedFormData = { ...formData }
    updatedFormData.school = ""
    updatedFormData.degree = ""
    updatedFormData.eduStart = ""
    updatedFormData.eduEnd = ""
    updatedFormData.eduLocation = ""
    setFormData(updatedFormData) 
  }

  // {console.log(formData)} 
 
  return (
    <> 
    <FormSection 
    handleInputsChange={handleInputsChange} 
    clearEducationData={clearEducationData}/>  



    <ResumeSection formData={formData} />
    <p>Name: {formData.name}</p>
    <p>Email: {formData.email}</p> 
    <p>Phone: {formData.phone}</p> 
    <p>Address: {formData.address}</p>

    <br></br>
    <p>~~~~~~~~~~~~~~~~~</p> 
    <br></br>

    <p>School: {formData.school}</p>
    <p>Degree: {formData.degree}</p> 
    <p>Start Date: {formData.eduStart}</p>
    <p>End Date: {formData.eduEnd}</p>
    <p>Location: {formData.eduLocation}</p>
    </> 
  )
}

export default App
