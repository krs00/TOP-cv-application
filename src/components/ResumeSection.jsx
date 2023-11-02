function ResumeSection(props) {
    return ( 
      <>
       <p>Resume Section</p>
       <p>{props.formData.name}</p> 
       <p>{props.formData.email}</p>
       <p>{props.formData.phone}</p>
       <p>{props.formData.address}</p> 

      <div>
      <h1>List of Education</h1>
      <ul> 
        {props.educationList.map((item) => (
          <li className="no-list-style" key={item.id}>{item.school}</li>
        ))}
      </ul>
      </div>

      <div>
      <h1>List of Experience</h1>
      <ul>  
        {props.experienceList.map((item) => (
          <li className="no-list-style" key={item.id}>{item.company}</li>
        ))} 
      </ul>
    </div>

      </>
    );
  }
  
  export default ResumeSection;
  