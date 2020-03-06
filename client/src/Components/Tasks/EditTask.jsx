import React, { useState, useEffect, useContext } from "react";
import { CalendarContext } from "../CalendarContext";
import TaskService from "../../utils/taskService";
import TextInput from "../Inputs/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faPen } from "@fortawesome/free-solid-svg-icons";
import * as dateFns from "date-fns";

const service = new TaskService();

const EditTask = ({ closeForms, task }) => {
  const [state] = useContext(CalendarContext);
  const [title, setTitle] = useState("");
  const [userTask, setUserTask] = useState(state.users[0].id);

  useEffect(() => {
    if (task.id) {
      setTitle(task.title);
      setUserTask(task.userTask);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTask = (title, user, date) => {
    service.newTask(title, user, date).then(() => closeForms());
  };

  const updateTask = (id, title, user, date) => {
    service
      .updateTask(id, title, user, date)
      .then(() => closeForms());
  };

  const updateUserTask = e => {
    e.preventDefault();
    setUserTask(e.target.value)
  };

  return (
    <div className="edit-task">
      <TextInput state={title} setState={setTitle} type="text" field="title" />
      <div className="user-select">
        <label>User:</label>
        <select name="user" onChange={e => updateUserTask(e)}>
          {state.users[0]
            ? state.users.map( (user, i) => <option key={i} value={user.id}>{user.name}</option>)
            : ""}
        </select>
      </div>

      {task.id ? (
        <FontAwesomeIcon
          icon={faPen}
          onClick={() =>
            updateTask(
              task.id,
              title,
              userTask.id,
              state.selectedDate
            )
          }
          size="2x"
          color="whitesmoke"
        />
      ) : (
        <FontAwesomeIcon
          icon={faTasks}
          onClick={() =>
            addTask(title, userTask, dateFns.format(state.selectedDate, "PPP"))
          }
          size="2x"
          color="whitesmoke"
        />
      )}
    </div>
  );
};

export default EditTask;
