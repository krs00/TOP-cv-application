import FormInput from "../FormInput";

function ExperienceForm(props) {

  const currentExperience = props.currentEditObject

  return (
    <>
      <div className="form-container">
        <FormInput id="company" labelText="Company" handleInputsChange={props.handleInputsChange} placeHolderText="Enter Company Name" />
        <FormInput id="title" labelText="Title" handleInputsChange={props.handleInputsChange} placeHolderText="Enter Position Title" />
        <FormInput id="expStart" labelText="Start Date" handleInputsChange={props.handleInputsChange} placeHolderText="Enter Start Date" />
        <FormInput id="expEnd" labelText="End Date" handleInputsChange={props.handleInputsChange} placeHolderText="Enter End Date" />
        <FormInput id="expLocation" labelText="Location" handleInputsChange={props.handleInputsChange} placeHolderText="Enter Location" />
        <FormInput id="description" labelText="Description" handleInputsChange={props.handleInputsChange} placeHolderText="Enter Description"/>
        {/* <label htmlFor="description">Description</label> 
        <div>
          <textarea
            id="description"
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

export default ExperienceForm; 