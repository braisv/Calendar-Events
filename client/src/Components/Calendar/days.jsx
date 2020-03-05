import React, {useContext} from "react";
import * as dateFns from "date-fns";
import { CalendarContext } from '../CalendarContext';

const Days = () => {
  const [state] = useContext(CalendarContext);

  const dateFormat = "eee";
  const days = [];
  let startDate = dateFns.startOfWeek(state.currentDate);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="column col-center" key={i}>
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
      </div>
    );
  }
  return <div className="days row">{days}</div>;
};

export default Days;
