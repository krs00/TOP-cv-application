import FormInput from "./FormInput";

function PersonalDetailsForm(props) {
    return ( 
      <> 
       <div className="personal-details-form"> 
       <p>personal details form</p>
       <FormInput id="name" labelText="Full name" handleInputsChange={props.handleInputsChange}/>
      
       <FormInput id="email" labelText="Email" handleInputsChange={props.handleInputsChange}/>
       
       <FormInput id="phone" labelText="Phone" handleInputsChange={props.handleInputsChange}/>
       
       <FormInput id="address" labelText="Address" handleInputsChange={props.handleInputsChange}/>
       </div>
      </> 
    );
  }
  
  export default PersonalDetailsForm;
  