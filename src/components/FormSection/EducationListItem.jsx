function EducationListItem(props) {

    function deleteClicked(e) {
      const btn = e.target
      const id = btn.getAttribute('id')
      props.deleteEducation(id) 
    }

    function showEditForm(e) {
      const btn = e.target
      const id = btn.getAttribute('id')
      props.updateCurrentEditObject(id) 
      props.setCurrentEditId(id)
      props.toggleEditMode()
      props.toggleEducationForm()
    } 


    return (
      <>
       <div className="education-list-item"> 
        <p>{props.item.school}</p>
        <button id={props.item.id} onClick={showEditForm}>Edit</button> 
        <button id={props.item.id} onClick={deleteClicked}>Delete</button> 
       </div> 
      </> 
    );
  }
  
  export default EducationListItem;
  