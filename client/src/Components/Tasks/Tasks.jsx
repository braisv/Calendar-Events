import React, { useState, useEffect } from "react";
import TaskService from "../../utils/taskService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Tasks.scss";
import Button from "../Buttons/Button";
import EditTask from "./EditTask";

const service = new TaskService();

const Tasks = () => {
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    service.getTasks().then(data => setTasks(data));
  }, []);

  const closeForms = () => {
    setAdd(false);
    service.getTasks().then(data => setTasks(data));
  };

  const deleteTask = id => {
    service.removeTask(id).then( () => service.getTasks().then(data => setTasks(data)));
  }

  let filteredTasks;

  filteredTasks = tasks.filter(el =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="task-options">
      <div className="list-tasks">
        <h1>TASKS</h1>
        <input
          type="text"
          name="searchbar"
          placeholder="Search tasks by name"
          className="searchbar"
          onChange={e => setSearch(e.target.value)}
        />
        <div className="task-actions flex">
          <Button type="Add" onClick={() => setAdd(!add)} />
          <Button type="Edit" onClick={() => setEdit(!edit)} />
          <Button type="Remove" onClick={() => setRemove(!remove)} />
        </div>
        {add ? <EditTask task="false" closeForms={() => closeForms()} /> : ""}
        <ul>
          {tasks[0]
            ? filteredTasks.map(task =>
                edit ? (
                  <li>
                    <EditTask task={task} closeForms={() => closeForms()} />
                  </li>
                ) : (
                  <li className="list-item">
                    {task.title}
                    <div className="action-icons">
                      {remove ? (
                        <FontAwesomeIcon
                          icon={faTrash}
                          size="1x"
                          onClick={() => deleteTask(task.id)}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                )
              )
            : <li className="list-item">No tasks</li>}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
