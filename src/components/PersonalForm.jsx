import FormInput from "./FormInput";


function PersonalForm(props) {
    return ( 
      <> 
       <FormInput handleChange={props.handleInputsChange} labelText="Name" id="name"/>
      </>
    );
  }
  
  export default PersonalForm;
  