import React, { useContext } from "react";
import * as dateFns from "date-fns";
import { CalendarContext } from "../CalendarContext";
import useCalendarHooks from "../../hooks/calendarHooks";

const Cells = () => {
  const [state] = useContext(CalendarContext);
  const { onDateClick } = useCalendarHooks();

  const monthStart = dateFns.startOfMonth(state.currentDate);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);
  const dateFormat = "d";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      const cloneDay = dateFns.toDate(day);
      let selectedDay = dateFns.format(cloneDay, "PPP");
      let taskNumber = 0;
      state.tasks.filter(task => {
        if (task.date === selectedDay) taskNumber++;
      });

      days.push(
        <div
          className={`column cell ${
            !dateFns.isSameMonth(day, monthStart)
              ? "disabled"
              : dateFns.isSameDay(day, state.selectedDate)
              ? "selected"
              : ""
          }`}
          key={day}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
          <span className="task-number">
            {taskNumber > 0 ? taskNumber : ""}
          </span>
        </div>
      );
      day = dateFns.addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {" "}
        {days}{" "}
      </div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

export default Cells;
