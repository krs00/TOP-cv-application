import FormInput from "../FormInput";

function EducationEditForm(props) {

    const currentEducation = props.currentEditObject

    function handleUpdate(e) {
      const currentEditId = props.currentEditId
      props.handleEducationUpdate(e, currentEditId)
    } 

    return ( 
      <>
        <br></br>
       <p>Edit Education Form</p>
       <FormInput id="school" labelText="School" handleInputsChange={handleUpdate} defaultValue={currentEducation.school} /> 
       <br></br>
       <FormInput id="degree" labelText="Degree" handleInputsChange={handleUpdate} defaultValue={currentEducation.degree} />
       <br></br>
       <FormInput id="eduStart" labelText="Start Date" handleInputsChange={handleUpdate} defaultValue={currentEducation.eduStart} />
       <br></br>
       <FormInput id="eduEnd" labelText="End Date" handleInputsChange={handleUpdate} defaultValue={currentEducation.eduEnd} />
       <br></br>
       <FormInput id="eduLocation" labelText="Location" handleInputsChange={handleUpdate} defaultValue={currentEducation.eduLocation} />
       <br></br>
      </> 
    );
  }
  
  export default EducationEditForm; 