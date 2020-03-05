import React, { useState, useEffect } from "react";
import TaskService from "../../utils/taskService";
import TextInput from "../Inputs/TextInput";
import Button from "../Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faPen } from "@fortawesome/free-solid-svg-icons";

const service = new TaskService();

const EditTask = ({ closeForms, task }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    task.id ? setTitle(task.title) : setTitle("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTask = title => {
    service.newTask(title).then(() => closeForms());
  };

  const updateTask = (id, title) => {
    service.updateTask(id, title).then(() => closeForms());
  };

  return (
    <div className="edit-task">
      <TextInput state={title} setState={setTitle} type="text" field="title" />
      {task.id ? (
        <FontAwesomeIcon
          icon={faPen}
          onClick={() => updateTask(task.id, title)}
          size="2x"
          color="whitesmoke"
        />
      ) : (
        <FontAwesomeIcon icon={faTasks} onClick={() => addTask(title)} size="2x" color="whitesmoke" />
      )}
    </div>
  );
};

export default EditTask;
