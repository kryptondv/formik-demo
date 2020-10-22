import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import FirstForm from './components/FirstForm';
import SecondForm from './components/SecondForm';
import ThirdForm from './components/ThirdForm';

function App() {
  return (
    <div className="App">
      <div className="forms">
        <FirstForm />
        <SecondForm />
        <ThirdForm />
      </div>
    </div>
  );
}

export default App;
