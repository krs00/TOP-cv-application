import FormInput from "../FormInput";

function EducationForm(props) {

  return (
    <>
      <div className="form-container">
        <FormInput id="school" labelText="School" handleInputsChange={props.handleInputsChange} />
        <FormInput id="degree" labelText="Degree" handleInputsChange={props.handleInputsChange} />
        <FormInput id="eduStart" labelText="Start Date" handleInputsChange={props.handleInputsChange} />
        <FormInput id="eduEnd" labelText="End Date" handleInputsChange={props.handleInputsChange} />
        <FormInput id="eduLocation" labelText="Location" handleInputsChange={props.handleInputsChange} />
      </div>
    </>
  );
}

export default EducationForm; 