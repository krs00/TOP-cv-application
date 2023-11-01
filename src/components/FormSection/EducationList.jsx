import EducationListItem from './EducationListItem';

function EducationList(props) {
    return (
      <>
        <ul className='no-list-style'>
        {props.educationList.map(item => (
        <li key={item.id}>  <EducationListItem currentEditId={props.currentEditId} setCurrentEditId={props.setCurrentEditId} toggleEducationForm={props.toggleEducationForm} item={item} deleteEducation={props.deleteEducation} toggleEditMode={props.toggleEditMode} /> </li>
        ))}
    </ul>
      
      </>
    );
  }
  
  export default EducationList;
  