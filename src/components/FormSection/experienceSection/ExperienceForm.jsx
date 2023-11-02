import FormInput from "../FormInput";

function ExperienceForm(props) {

    return ( 
      <>
      
       <p>Add Experience Form</p>
       <FormInput id="company" labelText="School" handleInputsChange={props.handleInputsChange}/>
    
       <FormInput id="title" labelText="Degree" handleInputsChange={props.handleInputsChange}/>
     
       <FormInput id="expStart" labelText="Start Date" handleInputsChange={props.handleInputsChange}/>
      
       <FormInput id="expEnd" labelText="End Date" handleInputsChange={props.handleInputsChange}/>
      
       <FormInput id="expLocation" labelText="Location" handleInputsChange={props.handleInputsChange}/>
      
       <FormInput id="description" labelText="Description" handleInputsChange={props.handleInputsChange}/>
      
      </>
    );
  }
  
  export default ExperienceForm; 