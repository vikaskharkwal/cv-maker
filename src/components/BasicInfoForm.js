import React, { Component } from 'react';
import InputText from './InputText';
import InputTextArea from './InputTextArea';

class BasicInfoForm extends Component {
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
          index={0}
          formSet='general'
          handleChange={this.props.handleChange}
        />
        <InputText
          type='text'
          id={keys[1]}
          index={0}
          formSet='general'
          handleChange={this.props.handleChange}
        />
        <InputText
          type='email'
          id={keys[2]}
          index={0}
          formSet='general'
          handleChange={this.props.handleChange}
        />
        <InputText
          type='text'
          id={keys[3]}
          index={0}
          formSet='general'
          handleChange={this.props.handleChange}
        />
        <InputText
          type='tel'
          id={keys[4]}
          index={0}
          formSet='general'
          handleChange={this.props.handleChange}
        />
        <InputText
          type='text'
          id={keys[5]}
          index={0}
          formSet='general'
          handleChange={this.props.handleChange}
        />
        <InputTextArea
          type='text'
          id={keys[6]}
          index={0}
          formSet='general'
          handleChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default BasicInfoForm;
