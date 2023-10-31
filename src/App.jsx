import './App.css'
import FormSection from './components/FormSection'; 
import EducationListItem from './components/FormSection/EducationListItem';
import ResumeSection from './components/ResumeSection';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
 

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

  // holds created education objects
  const [educationList, setEducationList] = useState([])

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

  function addEducation() {
    const educationFormData = { ...formData }

    const newEducation = {
      id: uuidv4(),
      school: educationFormData.school, 
      degree: educationFormData.degree,
      eduStart: educationFormData.eduStart,
      eduEnd: educationFormData.eduEnd,
      eduLocation: educationFormData.eduLocation, 
    }
    const updatedList = [...educationList]
    updatedList.push(newEducation)
    setEducationList(updatedList)
    clearEducationData()
  }



 
  return (
    <> 
    <FormSection
    addEducation={addEducation} 
    handleInputsChange={handleInputsChange} 
    clearEducationData={clearEducationData}/>  



    <ResumeSection formData={formData} />

    <br></br>
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

    <br></br>
    <p>~~~~~~~~~~~~~~~~~</p> 
    <br></br>

    <p>Education List</p> 

    <ul className='no-list-style'>
        {educationList.map(item => (
        <li key={item.id}>  <EducationListItem item={item} /> </li>
        ))}
    </ul>


 
    </>
  )
}

export default App
