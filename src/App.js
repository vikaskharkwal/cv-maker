import { Component } from 'react';
// import './App.css';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: [
        {
          name: '',
          github: '',
          email: '',
          facebook: '',
          phone: '',
          linkedin: '',
          summary: '',
        },
      ],
      degrees: [],
      degree() {
        return {
          course: '',
          institute: '',
          from: '',
          to: '',
        };
      },
      jobs: [],
      job() {
        return {
          position: '',
          company: '',
          from: '',
          to: '',
        };
      },
    };
  }

  addField = (formSet) => {
    this.setState((state) => {
      return {
        [formSet]: state[formSet].concat(
          this.state[formSet.slice(0, formSet.length - 1)]()
        ),
      };
    });
  };

  deleteField = (index, formSet) => {
    this.setState((state) => {
      return {
        [formSet]: state[formSet].filter((item, ind) => {
          return index !== ind;
        }),
      };
    });
    console.log('deleting field');
  };

  handleChange = (index, id, value, formSet) => {
    this.setState((state) => {
      return {
        [formSet]: state[formSet].map((item, ind) => {
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
      <div className='App'>
        <h1 className='header'>Curriculum Vitae</h1>
        <CVForm
          degrees={this.state.degrees}
          jobs={this.state.jobs}
          general={this.state.general}
          addField={this.addField}
          deleteField={this.deleteField}
          handleChange={this.handleChange}
        />
        <div className='previewPrint'>
          <h2>Preview</h2>
          <CVPreview
            general={this.state.general}
            degrees={this.state.degrees}
            jobs={this.state.jobs}
          />
          <button onClick={window.print}>
            <i class='fas fa-print'></i>
            <span>Print</span>
          </button>
        </div>
        <div className='footer'>Made by berserkwal</div>
      </div>
    );
  }
}

export default App;
