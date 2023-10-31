import PersonalDetailsForm from "./FormSection/PersonalDetailsForm";
import EducationControl from "./FormSection/EducationControl";

function FormSection(props) {
    return ( 
      <>
        <p>Form Section</p>
        <PersonalDetailsForm handleInputsChange={props.handleInputsChange} />

        <EducationControl
        addEducation={props.addEducation}
        handleInputsChange={props.handleInputsChange} 
        clearEducationData={props.clearEducationData}
        educationList={props.educationList}
        deleteEducation={props.deleteEducation} />  
      </>
    );
  }
  
  export default FormSection;
  