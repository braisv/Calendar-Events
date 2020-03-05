import React, {useContext} from 'react';
import * as dateFns from "date-fns";
import { CalendarContext } from '../CalendarContext';
import useCalendarHooks from '../../hooks/calendarHooks';

const Header = () => {
    const dateFormat = "MMMM yyyy";
    const [state] = useContext(CalendarContext);
    const { prevMonth, nextMonth } = useCalendarHooks();

    return (
      <div className="header row flex-middle">
        <div className="column col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="column col-center">
          <span>{dateFns.format(state.currentDate, dateFormat)}</span>
        </div>
        <div className="column col-end">
          <div className="icon" onClick={nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    );
  };

export default Header
