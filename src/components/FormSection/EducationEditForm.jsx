import FormInput from "./FormInput";

function EducationEditForm(props) {

    function handleUpdate(e) {
      const currentEditId = props.currentEditId
      props.handleEducationUpdate(e, currentEditId)
    } 

    return ( 
      <>
        <br></br>
       <p>Edit Education Form</p>
       <FormInput id="school" labelText="School" handleInputsChange={handleUpdate}/> 
       <br></br>
       <FormInput id="degree" labelText="Degree" handleInputsChange={handleUpdate}/>
       <br></br>
       <FormInput id="eduStart" labelText="Start Date" handleInputsChange={handleUpdate}/>
       <br></br>
       <FormInput id="eduEnd" labelText="End Date" handleInputsChange={handleUpdate}/>
       <br></br>
       <FormInput id="eduLocation" labelText="Location" handleInputsChange={handleUpdate}/>
       <br></br>
      </> 
    );
  }
  
  export default EducationEditForm; 