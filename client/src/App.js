import React from "react";
import "./App.css";
import Calendar from "./Components/Calendar/Calendar";
import Users from "./Components/Users/Users";
import Tasks from "./Components/Tasks/Tasks";
import { CalendarContextProvider } from "./Components/CalendarContext";

function App() {
  return (
    <CalendarContextProvider>
      <div className="App flex">
        <Calendar />
        <Tasks />
        <Users />
    </div>
      </CalendarContextProvider>
  );
}

export default App;
