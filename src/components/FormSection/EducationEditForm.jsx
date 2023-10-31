import FormInput from "./FormInput";

function EducationEditForm(props) {

    return ( 
      <>
        <br></br>
       <p>Edit Education Form</p>
       <FormInput id="school" labelText="School"/> 
       <br></br>
       <FormInput id="degree" labelText="Degree"/>
       <br></br>
       <FormInput id="eduStart" labelText="Start Date"/>
       <br></br>
       <FormInput id="eduEnd" labelText="End Date"/>
       <br></br>
       <FormInput id="eduLocation" labelText="Location"/>
       <br></br>
      </>
    );
  }
  
  export default EducationEditForm; 