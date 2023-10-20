import Resume from "./Resume"
import React, { useState } from 'react';

function FormSection() {

  return (
    <>
      <InputField labelText="Enter your Kymani:"/>
    </>
  )
}

function InputField(props) {

  const [value, setValue] = useState('')

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <form>
      <label htmlFor="name">{props.labelText}</label>
      <input type="text"
        id="name"
        name="name"
        autoComplete="off"
        spellCheck="false"
        value={value}
        onChange={handleInputChange} />

      <Resume text={value} />

    </form>


  );
}








export default FormSection
