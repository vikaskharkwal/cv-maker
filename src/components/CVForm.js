import BasicInfoForm from './BasicInfoForm';
import ExperienceSectionForm from './ExperienceSectionForm';

function CVForm(props) {
  return (
    <div className='cvBox cvForm'>
      <form className='content'>
        <div className='section'>
          <h2>General Information</h2>
          <BasicInfoForm
            item={props.general[0]}
            handleChange={props.handleChange}
          />
        </div>
        <div className='section'>
          <h2>Education Information</h2>
          {props.degrees.map((item, index) => (
            <div key={index}>
              <ExperienceSectionForm
                deleteField={props.deleteField}
                formSet='degrees'
                index={index}
                item={item}
                handleChange={props.handleChange}
              />
            </div>
          ))}
          <button
            type='button'
            className='addButton'
            onClick={() => props.addField('degrees')}>
            <i className='fas fa-plus'></i>
            <span>Add</span>
          </button>
        </div>
        <div className='section'>
          <h2>Work Information</h2>
          {props.jobs.map((item, index) => (
            <div key={index}>
              <ExperienceSectionForm
                deleteField={props.deleteField}
                formSet='jobs'
                index={index}
                item={item}
                handleChange={props.handleChange}
                jobs={props.jobs}
                addDegreeField={props.addJobField}
              />
            </div>
          ))}
          <button
            type='button'
            className='addButton'
            onClick={() => props.addField('jobs')}>
            <i className='fas fa-plus'></i>
            <span>Add</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CVForm;
