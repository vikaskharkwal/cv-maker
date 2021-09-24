import React, { Component } from 'react';
import BasicInfoForm from './BasicInfoForm';
import './CVForm.css';
import EducationInfoForm from './ExperienceSectionForm';
import './InfoForm.css';

class CVForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='cvForm'>
        <h1>Curriculum Vitae</h1>
        <form>
          <div className='section'>
            <h2>General Information</h2>
            <BasicInfoForm
              item={this.props.general[0]}
              handleChange={this.props.handleChange}
            />
          </div>
          <div className='section'>
            <h2>Education Information</h2>
            {this.props.degrees.map((item, index) => (
              <div key={index}>
                <EducationInfoForm
                  deleteField={this.props.deleteField}
                  formSet='degrees'
                  index={index}
                  item={item}
                  handleChange={this.props.handleChange}
                />
              </div>
            ))}
            <button
              type='button'
              className='addButton'
              onClick={() => this.props.addField('degrees')}>
              <i className='fas fa-plus'></i>
              <span>Add</span>
            </button>
          </div>
          <div className='section'>
            <h2>Work Information</h2>
            {this.props.jobs.map((item, index) => (
              <div key={index}>
                <EducationInfoForm
                  deleteField={this.props.deleteField}
                  formSet='jobs'
                  index={index}
                  item={item}
                  handleChange={this.props.handleChange}
                  jobs={this.props.jobs}
                  addDegreeField={this.props.addJobField}
                />
              </div>
            ))}
            <button
              type='button'
              className='addButton'
              onClick={() => this.props.addField('jobs')}>
              <i className='fas fa-plus'></i>
              <span>Add</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CVForm;
