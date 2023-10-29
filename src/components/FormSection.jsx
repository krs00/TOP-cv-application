import PersonalDetailsForm from "./PersonalDetailsForm";

function FormSection(props) {
    return ( 
      <>
        <p>Form Section</p>
        <PersonalDetailsForm handleInputsChange={props.handleInputsChange} /> 
      </>
    );
  }
  
  export default FormSection;
  