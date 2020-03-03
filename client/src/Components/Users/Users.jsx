import React, { useState, useEffect } from "react";
import UserService from "../../utils/userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import "./Users.css";
import Button from "../Buttons/Button";
import EditUser from "./EditUser";

const service = new UserService();

const Users = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);
  const [editForm, setEditForm] = useState(false);

  useEffect(() => {
    service.getUsers().then(data => setUsers(data));
  }, []);

  const closeForms = () => {
    setAdd(false);
    setEdit(false);
    editForm = false;
    service.getUsers().then(data => setUsers(data));
  };

  let filteredUsers;

  filteredUsers = users.filter(el =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-options">
      <div className="list-users">
        <h1>USERS</h1>
        <input
          type="text"
          name="searchbar"
          placeholder="Search users by name"
          className="searchbar"
          onChange={e => setSearch(e.target.value)}
        />
        <Button type="Add" onClick={() => setAdd(!add)} />
        <Button type="Edit" onClick={() => setEdit(!edit)} />
        <Button type="Remove" onClick={() => setRemove(!remove)} />
        {add ? <EditUser closeForms={() => closeForms()} /> : ""}
        <ul>
          {users[0]
            ? filteredUsers.map(user => (
                <li>
                  {user.name}
                  <div className="action-icons">
                    {edit ? (
                      <FontAwesomeIcon
                        icon={faPen}
                        onClick={() => setEditForm(!editForm)}
                        size="2x"
                      />
                    ) : (
                      ""
                    )}
                    {remove ? (
                      <FontAwesomeIcon
                        icon={faTrash}
                        size="2x"
                        onClick={() => service.removeUser(user.id)}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                  {editForm ? <EditUser userId={user.id} closeForms={() => closeForms()} /> : ""}
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default Users;
