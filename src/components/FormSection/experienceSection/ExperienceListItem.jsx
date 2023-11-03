function ExperienceListItem(props) {

    function deleteClicked(e) {
      const btn = e.target
      const id = btn.getAttribute('id')
      props.deleteExperience(id) 
    }

    function showEditForm(e) {
      const btn = e.target 
      const id = btn.getAttribute('id')
      props.updateCurrentEditObject(id) 
      props.setCurrentEditId(id)
      props.toggleEditMode()
      props.toggleExperienceForm() 
    } 


    return (
      <>
       <div> 
        <p>{props.item.company}</p>
        <div className="btns-row">
        <button className="button-1" id={props.item.id} onClick={showEditForm}>Edit</button> 
        <button className="button-1" id={props.item.id} onClick={deleteClicked}>Delete</button>
        </div>
       </div> 
      </> 
    );
  }
  
  export default ExperienceListItem; 
  