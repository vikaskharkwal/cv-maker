import React, { Component } from 'react';
import InputText from './InputText';

class EducationInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const keys = Object.keys(this.props.item);
    return (
      <div className='fields'>
        <InputText
          type='text'
          id={keys[0]}
          index={this.props.index}
          formSet={this.props.formSet}
          handleChange={this.props.handleChange}
        />
        <InputText
          type='text'
          id={keys[1]}
          index={this.props.index}
          formSet={this.props.formSet}
          handleChange={this.props.handleChange}
        />
        <InputText
          type='number'
          id={keys[2]}
          index={this.props.index}
          formSet={this.props.formSet}
          handleChange={this.props.handleChange}
        />
        <InputText
          type='number'
          id={keys[3]}
          index={this.props.index}
          formSet={this.props.formSet}
          handleChange={this.props.handleChange}
        />
        <button
          index={this.props.index}
          type='button'
          onClick={() => [
            this.props.deleteField(this.props.index, this.props.formSet),
          ]}
          className='deleteButton'>
          <i className='far fa-trash-alt'></i>
          <span>Delete</span>
        </button>
      </div>
    );
  }
}

export default EducationInfoForm;
