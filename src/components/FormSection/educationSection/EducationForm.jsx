import FormInput from "../FormInput";

function EducationForm(props) {

  return (
    <>
      <div className="form-container">
        <FormInput id="school" labelText="School" handleInputsChange={props.handleInputsChange} type="text" placeHolderText="Enter school / university" />
        <FormInput id="degree" labelText="Degree" handleInputsChange={props.handleInputsChange} type="text" placeHolderText="Enter Degree / Field Of Study"  />
        <FormInput id="eduStart" labelText="Start Date" handleInputsChange={props.handleInputsChange} type="text" placeHolderText="Enter Start Date"  />
        <FormInput id="eduEnd" labelText="End Date" handleInputsChange={props.handleInputsChange} type="text" placeHolderText="Enter End Date"  />
        <FormInput id="eduLocation" labelText="Location" handleInputsChange={props.handleInputsChange} type="text" placeHolderText="Enter Location"  />
      </div>
    </>
  );
}

export default EducationForm; 