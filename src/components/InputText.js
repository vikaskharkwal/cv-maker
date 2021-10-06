import { useState } from 'react';
import { useValueHandler } from '../hooks/valueHandler';

function InputText(props) {
  const { handleChange, index, id, formSet, type } = props;
  const [value, setValue] = useState('');

  useValueHandler(index, id, value, formSet, handleChange);

  function handleInputChange(event) {
    setValue(event.target.value);
  }

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
