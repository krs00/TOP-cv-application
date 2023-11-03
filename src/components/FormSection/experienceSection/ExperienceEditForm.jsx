import FormInput from "../FormInput";

function ExperienceEditForm(props) {

  const currentExperience = props.currentEditObject

  function handleUpdate(e) {
    const currentEditId = props.currentEditId
    props.handleExperienceUpdate(e, currentEditId)
  }

  return (
    <>

      <p className="form-modal-title">Edit education</p>
      <div className="form-container">
        <FormInput id="company" labelText="School" handleInputsChange={handleUpdate} defaultValue={currentExperience.school} />
        <FormInput id="title" labelText="Degree" handleInputsChange={handleUpdate} defaultValue={currentExperience.degree} />
        <FormInput id="expStart" labelText="Start Date" handleInputsChange={handleUpdate} defaultValue={currentExperience.expStart} />
        <FormInput id="expEnd" labelText="End Date" handleInputsChange={handleUpdate} defaultValue={currentExperience.expEnd} />
        <FormInput id="expLocation" labelText="Location" handleInputsChange={handleUpdate} defaultValue={currentExperience.expLocation} />
        <FormInput id="description" labelText="Description" handleInputsChange={handleUpdate} defaultValue={currentExperience.description} />
      </div>
    </>
  );
}

export default ExperienceEditForm; 