import InputText from './InputText';

function EducationInfoForm(props) {
  const keys = Object.keys(props.item);
  return (
    <div className='fields'>
      <InputText
        type='text'
        id={keys[0]}
        index={props.index}
        formSet={props.formSet}
        handleChange={props.handleChange}
      />
      <InputText
        type='text'
        id={keys[1]}
        index={props.index}
        formSet={props.formSet}
        handleChange={props.handleChange}
      />
      <InputText
        type='number'
        id={keys[2]}
        index={props.index}
        formSet={props.formSet}
        handleChange={props.handleChange}
      />
      <InputText
        type='number'
        id={keys[3]}
        index={props.index}
        formSet={props.formSet}
        handleChange={props.handleChange}
      />
      <button
        index={props.index}
        type='button'
        onClick={() => [props.deleteField(props.index, props.formSet)]}
        className='deleteButton'>
        <i className='far fa-trash-alt'></i>
        <span>Delete</span>
      </button>
    </div>
  );
}

export default EducationInfoForm;
