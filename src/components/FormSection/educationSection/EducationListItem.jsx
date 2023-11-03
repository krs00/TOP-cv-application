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
      <div>
        <p>{props.item.school}</p>
        <div className="btns-row">
          <button className="button-1" id={props.item.id} onClick={showEditForm}>Edit</button>
          <button className="button-1" id={props.item.id} onClick={deleteClicked}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default EducationListItem;
