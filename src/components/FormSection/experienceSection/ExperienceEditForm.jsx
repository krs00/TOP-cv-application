import FormInput from "../FormInput";

function ExperienceEditForm(props) {

    const currentExperience = props.currentEditObject

    function handleUpdate(e) {
      const currentEditId = props.currentEditId
      props.handleExperienceUpdate(e, currentEditId)
    } 

    return ( 
      <>
        <br></br>
       <p>Edit Experience Form</p>
       <FormInput id="company" labelText="School" handleInputsChange={handleUpdate} defaultValue={currentExperience.school} /> 
       <br></br>
       <FormInput id="title" labelText="Degree" handleInputsChange={handleUpdate} defaultValue={currentExperience.degree} />
       <br></br>
       <FormInput id="expStart" labelText="Start Date" handleInputsChange={handleUpdate} defaultValue={currentExperience.expStart} />
       <br></br>
       <FormInput id="expEnd" labelText="End Date" handleInputsChange={handleUpdate} defaultValue={currentExperience.expEnd} />
       <br></br>
       <FormInput id="expLocation" labelText="Location" handleInputsChange={handleUpdate} defaultValue={currentExperience.expLocation} />
       <br></br>
       <FormInput id="description" labelText="Description" handleInputsChange={handleUpdate} defaultValue={currentExperience.description} />
       <br></br>
      </> 
    );
  }
  
  export default ExperienceEditForm; 