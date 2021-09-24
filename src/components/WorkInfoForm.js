import React, { Component } from 'react';
import Input from './Input';

class WorkInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      job: {
        company: '',
        position: '',
        fromDate: '',
        toDate: '',
      },
    };
  }

  addJobField = () => {
    this.setState((state) => {
      return { jobs: state.jobs.concat(this.state.job) };
    });
    console.log(this.state.jobs);
  };

  handleChange = (index, id, value) => {
    this.setState((state) => {
      return {
        jobs: state.jobs.filter((item, ind) => {
          if (index === ind) {
            item[id] = value;
          }
          return item;
        }),
      };
    });
  };

  render() {
    return (
      <div>
        <div className='section'>
          <h2>Work Information</h2>
          {this.state.jobs.map((item, index) => {
            return (
              <div className='fields' key={index}>
                <div className='inputSchool'>
                  <label htmlFor='company'>Company</label>
                  <Input
                    type='text'
                    id='company'
                    index={index}
                    handleChange={this.handleChange}
                  />
                </div>
                <div className='inputCourse'>
                  <label htmlFor='position'>Position</label>
                  <Input
                    type='text'
                    id='position'
                    index={index}
                    handleChange={this.handleChange}
                  />
                </div>
                <div className='inputFromDate'>
                  <label htmlFor='fromDate'>From</label>
                  <Input
                    type='number'
                    id='fromDate'
                    index={index}
                    handleChange={this.handleChange}
                  />
                </div>
                <div className='inputToDate'>
                  <label htmlFor='toDate'>To</label>
                  <Input
                    type='number'
                    id='toDate'
                    index={index}
                    handleChange={this.handleChange}
                  />
                </div>
                <button index={index} type='button' className='saveButton'>
                  <i className='fas fa-check'></i>
                </button>
                <button index={index} type='button' className='deleteButton'>
                  <i className='far fa-trash-alt'></i>
                </button>
              </div>
            );
          })}
          <button
            type='button'
            className='addButton'
            onClick={this.addJobField}>
            <i className='fas fa-plus'></i>
          </button>
        </div>
      </div>
    );
  }
}

export default WorkInfoForm;
