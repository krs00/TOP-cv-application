function EducationListItem(props) {

    function showId(e) {
      const btn = e.target
      const id = btn.getAttribute('id')
      props.deleteEducation(id) 
    }


    return (
      <>
       <div className="education-list-item"> 
        <p>{props.item.school}</p>
        <button id={props.item.id} onClick={showId}>Edit</button> 
        <button id={props.item.id} onClick={showId}>Delete</button> 
       </div> 
      </> 
    );
  }
  
  export default EducationListItem;
  