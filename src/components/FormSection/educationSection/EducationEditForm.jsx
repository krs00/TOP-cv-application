import FormInput from "../FormInput";

function EducationEditForm(props) {

    const currentEducation = props.currentEditObject

    function handleUpdate(e) {
      const currentEditId = props.currentEditId
      props.handleEducationUpdate(e, currentEditId)
    } 

    return ( 
      <>
      
       <p>Edit Education Form</p>
       <FormInput id="school" labelText="School" handleInputsChange={handleUpdate} defaultValue={currentEducation.school} /> 
       <FormInput id="degree" labelText="Degree" handleInputsChange={handleUpdate} defaultValue={currentEducation.degree} />
       <FormInput id="eduStart" labelText="Start Date" handleInputsChange={handleUpdate} defaultValue={currentEducation.eduStart} />
       <FormInput id="eduEnd" labelText="End Date" handleInputsChange={handleUpdate} defaultValue={currentEducation.eduEnd} />
       <FormInput id="eduLocation" labelText="Location" handleInputsChange={handleUpdate} defaultValue={currentEducation.eduLocation} />
      </> 
    );
  }
  
  export default EducationEditForm; 