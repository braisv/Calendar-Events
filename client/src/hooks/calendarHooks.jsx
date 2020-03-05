import { useContext } from "react";
import { CalendarContext } from "../Components/CalendarContext";
import * as dateFns from "date-fns";
import UserService from '../utils/userService';
import TaskService from '../utils/taskService';

const userService = new UserService();
const taskService = new TaskService();

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

  const getData = () => {
    taskService.fetchData().then(data => setState({ ...state, users: data.users, tasks: data.tasks }));
  }

  const setUsers = () => {
    userService.getUsers().then(data => setState({ ...state, users: data }));
  }

  const deleteUser = id => {
    userService.removeUser(id).then( () => setUsers());
  }

  const setTasks = () => {
    taskService.getTasks().then(data => setState({ ...state, tasks: data }));
  }

  const deleteTask = id => {
    taskService.removeTask(id).then( () => setTasks());
  }

  return {
    nextMonth,
    prevMonth,
    onDateClick,
    setUsers,
    deleteUser,
    setTasks,
    deleteTask,
    getData
  };
};

export default useCalendarHooks;
