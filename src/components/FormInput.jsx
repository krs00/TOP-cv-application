function FormInput(props) {
  return ( 
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
      <br></br>
      <input
        type="text"
        id={props.id}
        name={props.id} 
        autoComplete="off" 
        spellCheck="false"
        value={props.value}
        onChange={props.handleChange}
      /> 
    </>
  );
}

export default FormInput;
