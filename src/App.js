import { Component } from 'react';
import './App.css';
import CVForm from './components/CVForm';

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
          institute: '',
          course: '',
          from: '',
          to: '',
        };
      },
      jobs: [],
      job() {
        return {
          company: '',
          position: '',
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
    console.log(this.state);
  };

  render() {
    return (
      <div className='App'>
        <CVForm
          degrees={this.state.degrees}
          jobs={this.state.jobs}
          general={this.state.general}
          addField={this.addField}
          deleteField={this.deleteField}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
