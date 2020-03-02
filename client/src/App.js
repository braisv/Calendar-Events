import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Components/Calendar/Calendar'
import Users from './Components/Users/Users';

function App() {
  return (
    <div className="App flex">
      <Calendar />
      <Users/>
    </div>
  );
}

export default App;
