import './App.css';
import background from './assets/main-background.svg';
import { createNewEvent } from './apiService';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <div className='container'>
        <header>
          <h1>Create new event</h1>
          <h3>Simple demonstration app for BrainHub recruitment process</h3>
        </header>

        <Form onCreateNewEvent={createNewEvent} />
      </div>
      <img className='background-circle' src={background} alt='' />
    </>
  );
}

export default App;
