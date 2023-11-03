function ResumeSection(props) {
    return ( 
      <>
      <div className="resume-section">
        <div className="resume-header"> 
      <p>header section</p> 
      <p>{props.formData.name}</p> 
      <p>{props.formData.email}</p>
      <p>{props.formData.phone}</p>
      <p>{props.formData.address}</p>
      </div> 
      
      <div className="resume-body">
      <div>
      <h1>List of Education</h1>
      <ul> 
        {props.educationList.map((item) => (
          <li key={item.id}>{item.school}</li>
        ))}
      </ul>
      </div>

      <div>
      <h1>List of Experience</h1>
      <ul>  
        {props.experienceList.map((item) => (
          <li key={item.id}>{item.company}</li>
        ))}
      </ul>
    </div>
    </div>
    </div>
      </>
    );
  }
  
  export default ResumeSection;
  