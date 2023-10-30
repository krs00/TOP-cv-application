import FormInput from "./FormInput";

function EducationForm(props) {

    return ( 
      <>
        <br></br>
       <p>Add Education Form</p>
       <FormInput id="school" labelText="School" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="degree" labelText="Degree" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="eduStart" labelText="Start Date" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="eduEnd" labelText="End Date" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="eduLocation" labelText="Location" handleInputsChange={props.handleInputsChange}/>
       <br></br>
      </>
    );
  }
  
  export default EducationForm; 