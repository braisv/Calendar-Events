import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Components/Calendar/Calendar'
import Users from './Components/Users/Users';
import Tasks from './Components/Tasks/Tasks';

function App() {
  return (
    <div className="App flex">
      <Calendar />
      <Tasks />
      <Users/>
    </div>
  );
}

export default App;
