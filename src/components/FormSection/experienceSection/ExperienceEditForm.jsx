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
        <FormInput id="company" labelText="Company" handleInputsChange={handleUpdate} defaultValue={currentExperience.company} type="text" placeHolderText="Enter Company Name" />
        <FormInput id="title" labelText="Title" handleInputsChange={handleUpdate} defaultValue={currentExperience.title} type="text" placeHolderText="Enter Position Title" />
        <FormInput id="expStart" labelText="Start Date" handleInputsChange={handleUpdate} defaultValue={currentExperience.expStart} type="text" placeHolderText="Enter Start Date" />
        <FormInput id="expEnd" labelText="End Date" handleInputsChange={handleUpdate} defaultValue={currentExperience.expEnd} type="text" placeHolderText="Enter End Date" />
        <FormInput id="expLocation" labelText="Location" handleInputsChange={handleUpdate} defaultValue={currentExperience.expLocation} type="text" placeHolderText="Enter Location" />
        <FormInput id="description" labelText="Description" handleInputsChange={handleUpdate} defaultValue={currentExperience.description} type="textarea" placeHolderText="Enter Description"  />

        {/* <label htmlFor="description">Description</label>
        <div>
          <textarea 
            id="description"
            defaultValue={currentExperience.description}
            // value={currentExperience.description}
            onChange={props.handleInputsChange}
            rows="4" // Specify the number of visible rows
            cols="30" // Specify the number of visible columns (characters)
            placeholder="Enter experience description"
          ></textarea>
        </div> */}
      </div>
    </>
  );
}

export default ExperienceEditForm; 