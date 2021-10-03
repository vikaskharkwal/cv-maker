import { useState, useEffect } from 'react';

function InputText(props) {
  const { handleChange, index, id, formSet, type } = props;
  const [value, setValue] = useState('');

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  useEffect(() => {
    handleChange(index, id, value, formSet);
  }, [value]);

  return (
    <div className={`input${id.slice(0, 1).toUpperCase() + id.slice(1)}`}>
      <label htmlFor={id}>{id}</label>
      <input
        type={type}
        id={id}
        onChange={handleInputChange}
        value={value}
        autoComplete='off'
      />
    </div>
  );
}

export default InputText;
