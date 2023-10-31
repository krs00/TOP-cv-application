import { useState } from 'react'; 
import EducationForm from "./EducationForm"; 
import EducationList from "./EducationList";

function EducationControl(props) {

    const [isFormVisible, setFormVisible] = useState(false)

    function toggleEducationForm() {
      const { clearEducationData } = props
      clearEducationData()
      setFormVisible(!isFormVisible) 
    }

    function handleSaveBtnPress() {
      {props.addEducation()}
      toggleEducationForm()
    }

    if (isFormVisible === true) {
      return ( 
        <>
          <EducationForm handleInputsChange={props.handleInputsChange} />
          <button onClick={toggleEducationForm}>Cancel</button> 
          <button onClick={handleSaveBtnPress}>Save</button>
 
        </>
      ); 
    } else if (isFormVisible === false) {
      return ( 
        <>
          <EducationList 
          educationList={props.educationList} 
          deleteEducation={props.deleteEducation}/>
          <button onClick={toggleEducationForm}>Add Education</button>
        </>
      ); 
    }
  }
  
  export default EducationControl;
  