import { useContext } from "react";
import { CalendarContext } from "../Components/CalendarContext";
import * as dateFns from "date-fns";

const useCalendarHooks = () => {
  const [state, setState] = useContext(CalendarContext);

  const nextMonth = () => {
    setState({
      ...state,
      currentDate: dateFns.addMonths(state.currentDate, 1)
    });
  };

  const prevMonth = () => {
    setState({
      ...state,
      currentDate: dateFns.subMonths(state.currentDate, 1)
    });
  };

  const onDateClick = day => {
    setState({ ...state, selectedDate: day });
  };

  return {
    nextMonth,
    prevMonth,
    onDateClick
  };
};

export default useCalendarHooks;
