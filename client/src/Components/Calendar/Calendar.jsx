import React, { useState } from "react";
import "./Calendar.css";
import Header from "./header";
import Days from "./days";
import Cells from "./cells";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <div className="calendar">
      <div>
        <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
      </div>
      <div>
        <Days currentDate={currentDate} />
      </div>
      <div>
        <Cells currentDate={currentDate} setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default Calendar;
