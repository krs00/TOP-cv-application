import { useState } from 'react';
import EducationForm from "./EducationForm";
import EducationList from "./EducationList";
import EducationEditForm from './EducationEditForm';

function EducationControl(props) {

  const [isFormVisible, setFormVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentEditId, setCurrentEditId] = useState('')
  const [currentEditObject, setCurrentEditObject] = useState({})

  function updateCurrentEditObject(id) {
    const newList = [...props.educationList]
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === id) {
        setCurrentEditObject(newList[i])
      }
    }
  }


  function toggleEditMode() {
    setEditMode(!editMode)
  }

  function toggleEducationForm() {
    const { clearEducationData } = props
    clearEducationData()
    setFormVisible(!isFormVisible)
  }

  function toggleEditForm() {
    toggleEditMode()
    toggleEducationForm()
  }

  function handleSaveBtnPress() {
    { props.addEducation() }
    toggleEducationForm()
  }

  if (isFormVisible === true && editMode === false) {
    return (
      <div className='form-section-modal'>
        <EducationForm handleInputsChange={props.handleInputsChange} />
        <button onClick={toggleEducationForm}>Return</button>
        <button onClick={handleSaveBtnPress}>Save</button>
      </div> 
    );
  } else if (isFormVisible === true && editMode === true) {

    return (
      <div className='form-section-modal'>
        <EducationEditForm currentEditObject={currentEditObject} handleEducationUpdate={props.handleEducationUpdate}
          currentEditId={currentEditId} />
        <button onClick={toggleEditForm}>Return</button>
      </div>
    )

  } else if (isFormVisible === false) {
    return (
      <>
          <div className='form-section-modal'>
          <div className='utility-center'>
          <button className='button-1' onClick={toggleEducationForm}>Add Education</button>
          </div>
          <EducationList 
          educationList={props.educationList}
          deleteEducation={props.deleteEducation}
          toggleEditMode={toggleEditMode}
          toggleEducationForm={toggleEducationForm}
          setCurrentEditId={setCurrentEditId}
          currentEditId={currentEditId}
          updateCurrentEditObject={updateCurrentEditObject} />
          </div>
          </>
    );
  }
}

export default EducationControl;
