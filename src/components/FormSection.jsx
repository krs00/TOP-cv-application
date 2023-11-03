import PersonalDetailsForm from "./FormSection/PersonalDetailsForm";
import EducationControl from "./FormSection/educationSection/EducationControl";
import ExperienceControl from "./FormSection/experienceSection/ExperienceControl";

function FormSection(props) {
    return ( 
      <>
      <div className="form-section">
        <div className="form-section-modal">
        <PersonalDetailsForm handleInputsChange={props.handleInputsChange} />
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <EducationControl 
        addEducation={props.addEducation} 
        handleInputsChange={props.handleInputsChange} 
        clearEducationData={props.clearEducationData}
        educationList={props.educationList}
        deleteEducation={props.deleteEducation}
        handleEducationUpdate={props.handleEducationUpdate} />
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <ExperienceControl 
        addExperience={props.addExperience} 
        handleInputsChange={props.handleInputsChange} 
        clearExperienceData={props.clearExperienceData}
        experienceList={props.experienceList}
        deleteExperience={props.deleteExperience}
        handleExperienceUpdate={props.handleExperienceUpdate} />
      </div>
      </>
    );
  }
  
  export default FormSection;
  