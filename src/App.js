import { useState } from 'react';
// import './App.css';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [general, setGeneral] = useState([
    {
      name: '',
      github: '',
      email: '',
      facebook: '',
      phone: '',
      linkedin: '',
      summary: '',
    },
  ]);

  const [degrees, setDegrees] = useState([]);
  const [degree] = useState({
    course: '',
    institute: '',
    from: '',
    to: '',
  });
  const [jobs, setJobs] = useState([]);
  const [job] = useState({
    position: '',
    company: '',
    from: '',
    to: '',
  });

  const addField = (formSet) => {
    if (formSet === 'jobs') {
      setJobs(jobs.concat({ ...job }));
    } else {
      setDegrees(degrees.concat({ ...degree }));
    }
  };

  const deleteField = (index, formSet) => {
    if (formSet === 'jobs') {
      setJobs(jobs.filter((item, ind) => index !== ind));
    } else {
      setDegrees(degrees.filter((item, ind) => index !== ind));
    }
  };

  const handleChange = (index, id, value, formSet) => {
    if (formSet === 'jobs') {
      setJobs(
        jobs.map((item, ind) => {
          if (index === ind) {
            item[id] = value;
          }
          return item;
        })
      );
    } else if (formSet === 'degrees') {
      setDegrees(
        degrees.map((item, ind) => {
          if (index === ind) {
            item[id] = value;
          }
          return item;
        })
      );
    } else {
      setGeneral(
        general.map((item, ind) => {
          if (index === ind) {
            item[id] = value;
          }
          return item;
        })
      );
    }
  };

  return (
    <div className='App'>
      <Header />
      <div className='formContainer'>
        <h2>Form</h2>
        <CVForm
          degrees={degrees}
          jobs={jobs}
          general={general}
          addField={addField}
          deleteField={deleteField}
          handleChange={handleChange}
        />
      </div>
      <div className='previewPrint'>
        <h2>Preview</h2>
        <CVPreview general={general} degrees={degrees} jobs={jobs} />
        <button onClick={window.print}>
          <i className='fas fa-print'></i>
          <span>Print</span>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
