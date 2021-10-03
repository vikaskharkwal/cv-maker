import { useState, useEffect } from 'react';

function InputText(props) {
  const { handleChange, index, id, formSet } = props;
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    handleChange(index, id, value, formSet);
  }, [value]);

  console.log();
  return (
    <div className={`input${id.slice(0, 1).toUpperCase() + id.slice(1)}`}>
      <label htmlFor={id}>{id}</label>
      <textarea id={id} onChange={handleInputChange} value={value} rows='5' />
    </div>
  );
}

export default InputText;
