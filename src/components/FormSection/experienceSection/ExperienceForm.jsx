import FormInput from "../FormInput";

function ExperienceForm(props) {

  const currentExperience = props.currentEditObject

  return (
    <>
      <div className="form-container">
        <FormInput id="company" labelText="Company" handleInputsChange={props.handleInputsChange} />
        <FormInput id="title" labelText="Title" handleInputsChange={props.handleInputsChange} />
        <FormInput id="expStart" labelText="Start Date" handleInputsChange={props.handleInputsChange} />
        <FormInput id="expEnd" labelText="End Date" handleInputsChange={props.handleInputsChange} />
        <FormInput id="expLocation" labelText="Location" handleInputsChange={props.handleInputsChange} />
        <FormInput id="description" labelText="Description" handleInputsChange={props.handleInputsChange}/>
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