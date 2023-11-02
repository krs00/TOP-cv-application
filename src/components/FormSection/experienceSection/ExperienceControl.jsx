import { useState } from 'react';
import ExperienceForm from "./ExperienceForm";
import ExperienceList from "./ExperienceList";
import ExperienceEditForm from './ExperienceEditForm';

function ExperienceControl(props) {

  const [isFormVisible, setFormVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentEditId, setCurrentEditId] = useState('')
  const [ currentEditObject, setCurrentEditObject ] = useState({})

  function updateCurrentEditObject(id) { 
    const newList = [...props.experienceList] 
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === id) { 
        setCurrentEditObject(newList[i])
      }
    }
  }


  function toggleEditMode() {
    setEditMode(!editMode) 
  }

  function toggleExperienceForm() {
    const { clearExperienceData } = props
    clearExperienceData()
    setFormVisible(!isFormVisible) 
  }

  function toggleEditForm() {
    toggleEditMode()
    toggleExperienceForm()
  }

  function handleSaveBtnPress() {
    { props.addExperience() }
    toggleExperienceForm()
  }

  if (isFormVisible === true && editMode === false) {
    return (
      <>
        <ExperienceForm handleInputsChange={props.handleInputsChange} />
        <button onClick={toggleExperienceForm}>Return</button> 
        <button onClick={handleSaveBtnPress}>Save</button>

      </>
    );
  } else if (isFormVisible === true && editMode === true) {

    return (
      <>
      <ExperienceEditForm currentEditObject={currentEditObject} handleExperienceUpdate={props.handleExperienceUpdate}
      currentEditId={currentEditId} />
      <button onClick={toggleEditForm}>Return</button>
      </>
    )

  } else if (isFormVisible === false) {
    return (
      <>
        <ExperienceList
          experienceList={props.experienceList}
          deleteExperience={props.deleteExperience}
          toggleEditMode={toggleEditMode}
          toggleExperienceForm={toggleExperienceForm}
          setCurrentEditId={setCurrentEditId}
          currentEditId={currentEditId}
          updateCurrentEditObject={updateCurrentEditObject} />

        <button onClick={toggleExperienceForm}>Add Experience</button>
      </>
    );
  }
}

export default ExperienceControl;
