import InputText from './InputText';
import InputTextArea from './InputTextArea';

function BasicInfoForm(props) {
  const keys = Object.keys(props.item);
  return (
    <div className='fields'>
      <InputText
        type='text'
        id={keys[0]}
        index={0}
        formSet='general'
        handleChange={props.handleChange}
      />
      <InputText
        type='text'
        id={keys[1]}
        index={0}
        formSet='general'
        handleChange={props.handleChange}
      />
      <InputText
        type='email'
        id={keys[2]}
        index={0}
        formSet='general'
        handleChange={props.handleChange}
      />
      <InputText
        type='text'
        id={keys[3]}
        index={0}
        formSet='general'
        handleChange={props.handleChange}
      />
      <InputText
        type='tel'
        id={keys[4]}
        index={0}
        formSet='general'
        handleChange={props.handleChange}
      />
      <InputText
        type='text'
        id={keys[5]}
        index={0}
        formSet='general'
        handleChange={props.handleChange}
      />
      <InputTextArea
        type='text'
        id={keys[6]}
        index={0}
        formSet='general'
        handleChange={props.handleChange}
      />
    </div>
  );
}

export default BasicInfoForm;
