import FormInput from "../FormInput";

function EducationForm(props) {

  return (
    <>
      <div className="form-container">
        <FormInput id="school" labelText="School" handleInputsChange={props.handleInputsChange} type="text" />
        <FormInput id="degree" labelText="Degree" handleInputsChange={props.handleInputsChange} type="text"  />
        <FormInput id="eduStart" labelText="Start Date" handleInputsChange={props.handleInputsChange} type="text"  />
        <FormInput id="eduEnd" labelText="End Date" handleInputsChange={props.handleInputsChange} type="text"  />
        <FormInput id="eduLocation" labelText="Location" handleInputsChange={props.handleInputsChange} type="text"  />
      </div>
    </>
  );
}

export default EducationForm; 