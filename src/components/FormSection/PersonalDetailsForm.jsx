import FormInput from "./FormInput";

function PersonalDetailsForm(props) {
    return ( 
      <> 
       <div > 
       <p className="form-modal-title">Personal Details</p>
       <div className="form-container"> 
       <FormInput id="name" labelText="Full name" handleInputsChange={props.handleInputsChange} placeHolderText="First and last name"/>
       <FormInput id="email" labelText="Email" handleInputsChange={props.handleInputsChange} placeHolderText="Enter email"/>
       <FormInput id="phone" labelText="Phone" handleInputsChange={props.handleInputsChange} placeHolderText="Enter phone number"/>
       <FormInput id="address" labelText="Address" handleInputsChange={props.handleInputsChange} placeHolderText="City, State/Country"/>
       </div> 
       </div>
      </> 
    );
  }
  
  export default PersonalDetailsForm;
  