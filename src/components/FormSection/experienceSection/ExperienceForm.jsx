import FormInput from "../FormInput";

function ExperienceForm(props) {

    return ( 
      <>
        <br></br>
       <p>Add Experience Form</p>
       <FormInput id="company" labelText="School" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="title" labelText="Degree" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="expStart" labelText="Start Date" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="expEnd" labelText="End Date" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="expLocation" labelText="Location" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="description" labelText="Description" handleInputsChange={props.handleInputsChange}/>
       <br></br>
      </>
    );
  }
  
  export default ExperienceForm; 