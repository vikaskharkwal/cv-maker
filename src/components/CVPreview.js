import React, { Component } from 'react';
import './CV.css';

class CVPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { general, degrees, jobs } = this.props;

    return (
      <div className='cvBox cvPreview'>
        <div className='content'>
          <div className='general'>
            <div className='info'>
              <div className='name'>{general[0].name}</div>
              <div className='email'>{general[0].email}</div>
              <div className='phone'>{general[0].phone}</div>
            </div>
            <div className='socials'>
              {general[0].github ? (
                <div className='social'>
                  {general[0].github}
                  <i class='fab fa-github-alt'></i>
                </div>
              ) : undefined}
              {general[0].facebook ? (
                <div className='social'>
                  {general[0].facebook}
                  <i class='fab fa-facebook'></i>
                </div>
              ) : undefined}
              {general[0].linkedin ? (
                <div className='social'>
                  {general[0].linkedin}
                  <i class='fab fa-linkedin'></i>
                </div>
              ) : undefined}
            </div>
            {general[0].summary ? (
              <div className='summary'>
                <h3>Summary</h3>
                <p>{general[0].summary}</p>
              </div>
            ) : undefined}
          </div>
          <h3>Education</h3>
          <div className='expSection'>
            {degrees.map((item, index) => {
              return (
                <div key={index} className='exp'>
                  <div className='top'>{item.course}</div>
                  <div className='subTop'>{item.institute}</div>
                  <div className='timeSpan'>
                    <div className='from'>{item.from}</div>
                    {item.from || item.to ? <span>-</span> : undefined}
                    <div className='to'>{item.to}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <h3>Work Experience</h3>
          <div className='expSection'>
            {jobs.map((item, index) => {
              return (
                <div key={index} className='exp'>
                  <div className='top'>{item.position}</div>
                  <div className='subTop'>{item.company}</div>
                  <div className='timeSpan'>
                    <div className='from'>{item.from}</div>
                    {item.from || item.to ? <span>-</span> : undefined}
                    <div className='to'>{item.to}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CVPreview;
