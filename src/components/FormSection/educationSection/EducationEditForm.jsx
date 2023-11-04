import FormInput from "../FormInput";

function EducationEditForm(props) {

  const currentEducation = props.currentEditObject

  function handleUpdate(e) {
    const currentEditId = props.currentEditId
    props.handleEducationUpdate(e, currentEditId)
  }

  return (
    <>

      <p className="form-modal-title">Edit education</p>
      <div className="form-container">
        <FormInput id="school" labelText="School" handleInputsChange={handleUpdate} defaultValue={currentEducation.school} type="text" placeHolderText="Enter school / university"/>
        <FormInput id="degree" labelText="Degree" handleInputsChange={handleUpdate} defaultValue={currentEducation.degree} type="text" placeHolderText="Enter Degree / Field Of Study"/>
        <FormInput id="eduStart" labelText="Start Date" handleInputsChange={handleUpdate} defaultValue={currentEducation.eduStart} type="text" placeHolderText="Enter Start Date"/>
        <FormInput id="eduEnd" labelText="End Date" handleInputsChange={handleUpdate} defaultValue={currentEducation.eduEnd} type="text" placeHolderText="Enter End Date"/>
        <FormInput id="eduLocation" labelText="Location" handleInputsChange={handleUpdate} defaultValue={currentEducation.eduLocation} type="text" placeHolderText="Enter Location"/>
      </div>
    </>
  );
}

export default EducationEditForm; 