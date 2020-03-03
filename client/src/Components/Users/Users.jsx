import React, { useState, useEffect } from "react";
import UserService from "../../utils/userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Users.scss";
import Button from "../Buttons/Button";
import EditUser from "./EditUser";

const service = new UserService();

const Users = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    service.getUsers().then(data => setUsers(data));
  }, []);

  const closeForms = () => {
    setAdd(false);
    service.getUsers().then(data => setUsers(data));
  };

  const deleteUser = id => {
    service.removeUser(id).then( () => service.getUsers().then(data => setUsers(data)));
  }

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
        <div className="user-actions flex">
          <Button type="Add" onClick={() => setAdd(!add)} />
          <Button type="Edit" onClick={() => setEdit(!edit)} />
          <Button type="Remove" onClick={() => setRemove(!remove)} />
        </div>
        {add ? <EditUser user="false" closeForms={() => closeForms()} /> : ""}
        <ul>
          {users[0]
            ? filteredUsers.map(user =>
                edit ? (
                  <li>
                    <EditUser user={user} closeForms={() => closeForms()} />
                  </li>
                ) : (
                  <li className="list-item">
                    {user.name}
                    <div className="action-icons">
                      {remove ? (
                        <FontAwesomeIcon
                          icon={faTrash}
                          size="1x"
                          onClick={() => deleteUser(user.id)}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                )
              )
            : "No users"}
        </ul>
      </div>
    </div>
  );
};

export default Users;
