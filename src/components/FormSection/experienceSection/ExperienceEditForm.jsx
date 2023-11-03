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
        <FormInput id="company" labelText="School" handleInputsChange={handleUpdate} defaultValue={currentExperience.school} type="text" />
        <FormInput id="title" labelText="Degree" handleInputsChange={handleUpdate} defaultValue={currentExperience.degree} type="text" />
        <FormInput id="expStart" labelText="Start Date" handleInputsChange={handleUpdate} defaultValue={currentExperience.expStart} type="text" />
        <FormInput id="expEnd" labelText="End Date" handleInputsChange={handleUpdate} defaultValue={currentExperience.expEnd} type="text" />
        <FormInput id="expLocation" labelText="Location" handleInputsChange={handleUpdate} defaultValue={currentExperience.expLocation} type="text" />
        {/* <FormInput id="description" labelText="Description" handleInputsChange={handleUpdate} defaultValue={currentExperience.description} type="textarea"  /> */}

        <label htmlFor="description">Description</label>
        <div>
          <textarea
            id="description"
            defaultValue={currentExperience.description}
            onChange={props.handleInputsChange}
            rows="4" // Specify the number of visible rows
            cols="30" // Specify the number of visible columns (characters)
            placeholder="Enter experience description"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default ExperienceEditForm; 