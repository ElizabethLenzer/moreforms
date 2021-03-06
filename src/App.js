import React, { useState } from 'react'
import UserForm from './components/UserForm'
import Results from './components/Results'
import './App.css';

function App() {
  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  })
  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App;
