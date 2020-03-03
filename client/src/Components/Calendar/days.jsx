import React from 'react';
import * as dateFns from "date-fns";

const Days = ({ currentDate }) => {
    const dateFormat = "eee";
    const days = [];
    let startDate = dateFns.startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="column col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };

export default Days
