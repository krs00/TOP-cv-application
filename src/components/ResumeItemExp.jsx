import React from "react";

function ResumeItemExp(props) {
  return (
    <div className="resume-item">
      <div className="box1">
        <div className="resume-item-dates">
        <p>{props.start}</p>
        <p>&nbsp;-&nbsp;</p>
        <p>{props.end}</p> 
        </div>
        <p>{props.location}</p>
      </div>
      <div className="box2">
        <p className="bold-font">{props.company}</p>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div> 
  );
}

export default ResumeItemExp; 
