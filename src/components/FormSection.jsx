import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationControl from "./EducationControl";

function FormSection(props) {
    return ( 
      <>
        <p>Form Section</p>
        <PersonalDetailsForm handleInputsChange={props.handleInputsChange} />
        <EducationControl /> 
      </>
    );
  }
  
  export default FormSection;
  