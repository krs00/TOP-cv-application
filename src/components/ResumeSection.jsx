import ResumeItemEdu from "./ResumeItemEdu";
import ResumeItemExp from "./ResumeItemExp";

function ResumeSection(props) {
  return (
    <>
      <div className="resume-section">
        <div className="resume-header">
          <p className="resume-header-name">{props.formData.name}</p>

          <div className="resume-personals-section">
            <p className="resume-header-text">||✉ {props.formData.email}</p>
            <p className="resume-header-text">||☏ {props.formData.phone}</p>
            <p className="resume-header-text">||🏠 {props.formData.address}</p>
          </div>
        </div>

        <div className="resume-body">



          <div>
            <h1>Education</h1>
            <ul>
              {props.educationList.map((item) => (
                <li key={item.id}><ResumeItemEdu school={item.school} degree={item.degree} start={item.eduStart} end={item.eduEnd} location={item.eduLocation}/></li>
              ))}
            </ul>
          </div>

          <div>
            <h1>Experience</h1>
            <ul>
              {props.experienceList.map((item) => (
                <li key={item.id}><ResumeItemExp company={item.company} title={item.title} start={item.expStart} end={item.expEnd} location={item.expLocation} description={item.description} /></li> 
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeSection;
