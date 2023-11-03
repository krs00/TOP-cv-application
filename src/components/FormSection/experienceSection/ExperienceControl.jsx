import { useState } from 'react';
import ExperienceForm from "./ExperienceForm";
import ExperienceList from "./ExperienceList";
import ExperienceEditForm from './ExperienceEditForm';

function ExperienceControl(props) {

  const [isFormVisible, setFormVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentEditId, setCurrentEditId] = useState('')
  const [currentEditObject, setCurrentEditObject] = useState({})

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
      <div className='form-section-modal'>
        <p className="form-modal-title">Add an experience</p>
        <ExperienceForm handleInputsChange={props.handleInputsChange} />
        <div className='btns-row'>
          <button className='button-1' onClick={toggleExperienceForm}>Return</button>
          <button className='button-1' onClick={handleSaveBtnPress}>Save</button>
        </div>
      </div>
    );
  } else if (isFormVisible === true && editMode === true) {

    return (
      <div className='form-section-modal'>
        <ExperienceEditForm currentEditObject={currentEditObject} handleExperienceUpdate={props.handleExperienceUpdate}
          currentEditId={currentEditId} />
        <button className='button-1' onClick={toggleEditForm}>Return</button>
      </div>
    )

  } else if (isFormVisible === false) {
    return (
      <>

        <div className='form-section-modal'>
          <p className="form-modal-title">Experience List</p>
          <div className='utility-center'>
            <button className='button-1' onClick={toggleExperienceForm}>Add Experience</button>
          </div>
          <ExperienceList
            experienceList={props.experienceList}
            deleteExperience={props.deleteExperience}
            toggleEditMode={toggleEditMode}
            toggleExperienceForm={toggleExperienceForm}
            setCurrentEditId={setCurrentEditId}
            currentEditId={currentEditId}
            updateCurrentEditObject={updateCurrentEditObject} />
        </div>
      </>
    );
  }
}

export default ExperienceControl;
