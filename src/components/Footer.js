import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className='footer'>
        <p>
          Made by{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://berserkwal.github.io'>
            berserkwal
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
