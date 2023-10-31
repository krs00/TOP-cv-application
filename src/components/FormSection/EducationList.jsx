import EducationListItem from './EducationListItem';

function EducationList(props) {
    return (
      <>
        <ul className='no-list-style'>
        {props.educationList.map(item => (
        <li key={item.id}>  <EducationListItem item={item} deleteEducation={props.deleteEducation} /> </li>
        ))}
    </ul>
      
      </>
    );
  }
  
  export default EducationList;
  