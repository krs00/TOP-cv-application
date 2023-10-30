import PersonalDetailsForm from "./FormSection/PersonalDetailsForm";
import EducationControl from "./FormSection/EducationControl";

function FormSection(props) {
    return ( 
      <>
        <p>Form Section</p>
        <PersonalDetailsForm handleInputsChange={props.handleInputsChange} />

        <EducationControl 
        handleInputsChange={props.handleInputsChange} 
        clearEducationData={props.clearEducationData} /> 
      </>
    );
  }
  
  export default FormSection;
  