import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className='header'>
        <h1>Curriculum Vitae</h1>
      </header>
    );
  }
}

export default Header;
