import './App.css'
import FormSection from './components/FormSection'; 
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

  // ~~~~~~~~~~~~~~~~~~~~~ PERSONAL FORM SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // This function updates the the global object for personal form data

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
  // ~~~~~~~~~~~~~~~~~~~~~ PERSONAL FORM SECTION END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // ~~~~~~~~~~~~~~~~~~~~~~~~ EDUCATION SECTION ~~~~~~~~~~~~~~~~~~~~~~~~

  // holds created education objects
  const [educationList, setEducationList] = useState([])

  // this function will remove the currently selected education object in education control from the education list
  function deleteEducation(idToRemove) {  
    const updatedEducationList = [...educationList]
    const filteredData = updatedEducationList.filter(item => item.id !== idToRemove);
    setEducationList(filteredData)
  }

  // function for updating education objects inside education list for the edit form
  function handleEducationUpdate(e, id) {
      // grab the name attribute of the current input field
      const name = e.target.name 
      // grab text/value inputted into input field
      const value = e.target.value 
      // make a copy of the education list to avoid mutating state
      const updatedEducationList = [ ...educationList ]
                               
      for (let i = 0; i < updatedEducationList.length; i++) {
        const currentEducation = updatedEducationList[i]
        if (currentEducation.id === id ) {
          currentEducation[name] = value
        }
      }
      setEducationList(updatedEducationList) 
  }

  // clears education data from global form object "formData"
  function clearEducationData() {
    const updatedFormData = { ...formData }
    updatedFormData.school = ""
    updatedFormData.degree = ""
    updatedFormData.eduStart = ""
    updatedFormData.eduEnd = ""
    updatedFormData.eduLocation = ""
    setFormData(updatedFormData) 
  }

  // adds new education object to education list
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
  // ~~~~~~~~~~~~~~~~~~~~~~~~ EDUCATION SECTION END ~~~~~~~~~~~~~~~~~~~~~~~~

  // ~~~~~~~~~~~~~~~~~~~~~~~~ EXPERIENCE SECTION ~~~~~~~~~~~~~~~~~~~~~~~~

   



  
  return (
    <> 
    <FormSection 
    addEducation={addEducation} 
    handleInputsChange={handleInputsChange} 
    clearEducationData={clearEducationData}
    educationList={educationList}
    deleteEducation={deleteEducation}
    handleEducationUpdate={handleEducationUpdate} /> 




    <ResumeSection formData={formData}  
                  educationList={educationList} />

 
    </>
  )
}

export default App
