import FormInput from "./FormInput";

function PersonalDetailsForm(props) {
    return ( 
      <> 
      <br></br>
       <p>personal details form</p>
       <FormInput id="name" labelText="Full name" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="email" labelText="Email" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="phone" labelText="Phone" handleInputsChange={props.handleInputsChange}/>
       <br></br>
       <FormInput id="address" labelText="Address" handleInputsChange={props.handleInputsChange}/>
       <br></br>
      </> 
    );
  }
  
  export default PersonalDetailsForm;
  