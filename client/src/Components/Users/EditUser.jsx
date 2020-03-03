import React, { useState, useEffect } from "react";
import UserService from "../../utils/userService";
import TextInput from "../Inputs/TextInput";
import Button from "../Buttons/Button";

const service = new UserService();

const EditUser = ({ closeForms, userId }) => {
  const [name, setName] = useState("");

  const addUser = name => {
    service.newUser(name).then(() => closeForms());
  };

  const updateUser = (id, name) => {
    service.updateUser(id, name).then(() => closeForms());
  };

  return (
    <div>
      {userId ? <h1>Update User:</h1> : <h1>New User:</h1>}
      <TextInput state={name} setState={setName} type="text" field="name" />
      {userId ? (
        <Button type="Update User" onClick={() => updateUser(userId, name)} />
      ) : (
        <Button type="Add User" onClick={() => addUser(name)} />
      )}
    </div>
  );
};

export default EditUser;
