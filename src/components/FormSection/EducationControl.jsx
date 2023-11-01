import { useState } from 'react';
import EducationForm from "./EducationForm";
import EducationList from "./EducationList";
import EducationEditForm from './EducationEditForm';

function EducationControl(props) {

  const [isFormVisible, setFormVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentEditId, setCurrentEditId] = useState('')


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
      <>
        <EducationForm handleInputsChange={props.handleInputsChange} />
        <button onClick={toggleEducationForm}>Return</button> 
        <button onClick={handleSaveBtnPress}>Save</button>

      </>
    );
  } else if (isFormVisible === true && editMode === true) {

    return (
      <>
      <EducationEditForm handleEducationUpdate={props.handleEducationUpdate}
      currentEditId={currentEditId} />
      <button onClick={toggleEditForm}>Return</button>
      </>
    )

  } else if (isFormVisible === false) {
    return (
      <>
        <EducationList
          educationList={props.educationList}
          deleteEducation={props.deleteEducation}
          toggleEditMode={toggleEditMode}
          toggleEducationForm={toggleEducationForm}
          setCurrentEditId={setCurrentEditId}
          currentEditId={currentEditId} />

        <button onClick={toggleEducationForm}>Add Education</button>
      </>
    );
  }
}

export default EducationControl;
