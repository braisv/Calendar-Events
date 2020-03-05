import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Tasks.scss";
import Button from "../Buttons/Button";
import EditTask from "./EditTask";
import { CalendarContext } from "../CalendarContext";
import useCalendarHooks from "../../hooks/calendarHooks";
import * as dateFns from "date-fns";

const Tasks = () => {
  const { setTasks, deleteTask } = useCalendarHooks();
  const [state] = useContext(CalendarContext);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);

  const closeForms = () => {
    setAdd(false);
    setTasks();
  };

  return (
    <div className="task-options">
      <div className="list-tasks">
        <h1>TASKS</h1>
        <h2>{dateFns.format(state.selectedDate, "PPP")}</h2>
        <div className="task-actions flex">
          <Button type="Add" onClick={() => setAdd(!add)} />
          <Button type="Edit" onClick={() => setEdit(!edit)} />
          <Button type="Remove" onClick={() => setRemove(!remove)} />
        </div>
        {add ? <EditTask task="false" closeForms={() => closeForms()} /> : ""}
        <ul>
          {state.tasks[0] ? (
            state.tasks.map( (task, i) =>
              edit ? (
                <li key={i}>
                  <EditTask task={task} closeForms={() => closeForms()} />
                </li>
              ) : (
                <li className="list-item"  key={i}>
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
          ) : (
            <li className="list-item">No tasks</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
