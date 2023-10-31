import { useState } from 'react';
import EducationForm from "./EducationForm";
import EducationList from "./EducationList";
import EducationEditForm from './EducationEditForm';

function EducationControl(props) {

  const [isFormVisible, setFormVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)

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
        <button onClick={toggleEducationForm}>Cancel</button>
        <button onClick={handleSaveBtnPress}>Save</button>

      </>
    );
  } else if (isFormVisible === true && editMode === true) {

    return (
      <>
      <EducationEditForm />
      <button onClick={toggleEditForm}>go back</button>
      </>
    )

  } else if (isFormVisible === false) {
    return (
      <>
        <EducationList
          educationList={props.educationList}
          deleteEducation={props.deleteEducation}
          toggleEditMode={toggleEditMode}
          toggleEducationForm={toggleEducationForm} />

        <button onClick={toggleEducationForm}>Add Education</button>
      </>
    );
  }
}

export default EducationControl;
