import ExperienceListItem from './ExperienceListItem';

function ExperienceList(props) {
  return (
    <>
      <ul>
        {props.experienceList.map(item => (
          <li key={item.id}>  <ExperienceListItem updateCurrentEditObject={props.updateCurrentEditObject} currentEditId={props.currentEditId} setCurrentEditId={props.setCurrentEditId} toggleExperienceForm={props.toggleExperienceForm} item={item} deleteExperience={props.deleteExperience} toggleEditMode={props.toggleEditMode} /> </li>
        ))}
      </ul>

    </>
  );
}

export default ExperienceList;
