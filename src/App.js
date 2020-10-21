import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import FirstForm from './components/FirstForm';
import SecondForm from './components/SecondForm';

function App() {
  return (
    <div className="App">
      <div className="forms">
        <FirstForm />
        <SecondForm />
      </div>
    </div>
  );
}

export default App;
