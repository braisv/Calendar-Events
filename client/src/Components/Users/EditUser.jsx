import React, { useState, useEffect } from "react";
import UserService from "../../utils/userService";
import TextInput from "../Inputs/TextInput";
import Button from "../Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faPen } from "@fortawesome/free-solid-svg-icons";

const service = new UserService();

const EditUser = ({ closeForms, user }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    user.id ? setName(user.name) : setName("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addUser = name => {
    service.newUser(name).then(() => closeForms());
  };

  const updateUser = (id, name) => {
    service.updateUser(id, name).then(() => closeForms());
  };

  return (
    <div className="edit-user">
      <TextInput state={name} setState={setName} type="text" field="name" />
      {user.id ? (
        <FontAwesomeIcon
          icon={faPen}
          onClick={() => updateUser(user.id, name)}
          size="2x"
          color="whitesmoke"
        />
      ) : (
        <FontAwesomeIcon icon={faUserPlus} onClick={() => addUser(name)} size="2x" color="whitesmoke" />
      )}
    </div>
  );
};

export default EditUser;
