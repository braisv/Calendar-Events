import React from "react";
import "./Calendar.css";
import Header from "./header";
import Days from "./days";
import Cells from "./cells";

const Calendar = () => {  
  return (
    <div className="calendar">
      <div>
        <Header />
      </div>
      <div>
        <Days />
      </div>
      <div>
        <Cells />
      </div>
    </div>
  );
};

export default Calendar;
