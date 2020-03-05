import React, { useState, useEffect, useContext } from "react";
import { CalendarContext } from "../CalendarContext";
import TaskService from "../../utils/taskService";
import TextInput from "../Inputs/TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faPen } from "@fortawesome/free-solid-svg-icons";

const service = new TaskService();

const EditTask = ({ closeForms, task }) => {
  const [state] = useContext(CalendarContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userTask, setUserTask] = useState({});

  useEffect(() => {
    if (task.id) {
      setTitle(task.title);
      setDescription(task.description);
      setUserTask(task.userTask);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTask = (title, description, user, date) => {
    service.newTask(title, description, user, date).then(() => closeForms());
  };

  const updateTask = (id, title, description, user, date) => {
    service
      .updateTask(id, title, description, user, date)
      .then(() => closeForms());
  };

  console.log("Hello");

  const updateUserTask = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="edit-task">
      <TextInput state={title} setState={setTitle} type="text" field="title" />
      <TextInput
        state={description}
        setState={setDescription}
        type="text"
        field="description"
      />
      <div className="user-select">
        <label>User:</label>
        <select name="user" onChange={e => updateUserTask(e)}>
          {state.users[0]
            ? state.users.map(user => <option value={user}>{user.name}</option>)
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
              description,
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
            addTask(title, description, userTask.id, state.selectedDate)
          }
          size="2x"
          color="whitesmoke"
        />
      )}
    </div>
  );
};

export default EditTask;
