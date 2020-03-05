import React, { useState, createContext } from "react";

const CalendarContext = createContext();

const CalendarContextProvider = props => {
  const [state, setState] = useState({
      tasks: [],
      users: [],
      currentDate: new Date(),
      selectedDate: new Date()
  });

  return (
    <CalendarContext.Provider value={[state, setState]}>
      <div className="flex">{props.children}</div>
    </CalendarContext.Provider>
  );
};

export { CalendarContext, CalendarContextProvider };