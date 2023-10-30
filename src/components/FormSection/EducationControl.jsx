import EducationForm from "./EducationForm"; 
import { useState } from 'react';

function EducationControl(props) {

    const [isFormVisible, setFormVisible] = useState(false)

    function toggleEducationForm() {

      const { clearEducationData } = props
      clearEducationData()

      setFormVisible(!isFormVisible)
    }

    if (isFormVisible === true) {
      return ( 
        <>
          <EducationForm handleInputsChange={props.handleInputsChange} />
          <button onClick={toggleEducationForm}>Cancel</button>

        </>
      ); 
    } else if (isFormVisible === false) {
      return ( 
        <>
          <button onClick={toggleEducationForm}>Add Education</button>
        </>
      ); 
    }
  }
  
  export default EducationControl;
  