import React, { Component } from 'react';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    setTimeout(() => {
      this.props.handleChange(
        this.props.index,
        this.props.id,
        this.state.value,
        this.props.formSet
      );
    }, 1);
  };
  render() {
    const { id } = this.props;
    console.log();
    return (
      <div className={`input${id.slice(0, 1).toUpperCase() + id.slice(1)}`}>
        <label htmlFor={id}>{id}</label>
        <textarea
          id={id}
          onChange={this.handleChange}
          value={this.state.value}
          rows='5'
        />
      </div>
    );
  }
}

export default InputText;
