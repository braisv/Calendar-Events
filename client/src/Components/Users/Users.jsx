import React, { useState, useEffect, useContext } from "react";
import { CalendarContext } from "../CalendarContext";
import useCalendarHooks from "../../hooks/calendarHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Users.scss";
import Button from "../Buttons/Button";
import EditUser from "./EditUser";

const Users = () => {
  const { setUsers, deleteUser, getData } = useCalendarHooks();
  const [search, setSearch] = useState("");
  const [state] = useContext(CalendarContext);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeForms = () => {
    setAdd(false);
    setUsers();
  };

  let filteredUsers;

  filteredUsers = state.users.filter(el =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  const showElement = (id) => {
    var x = document.getElementById(id);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

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
          {state.users[0] ? (
            filteredUsers.map((user, i) =>
              edit ? (
                <li key={i}>
                  <EditUser user={user} closeForms={() => closeForms()} />
                </li>
              ) : (
                <li className="list-item" key={i} onClick={() => showElement(user.id)}>
                  <div className="flex between">
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
                  </div>
                  <ul className="tasks-user" id={user.id}>
                    {state.tasks[0]
                      ? state.tasks.map( (task, i) => {
                          if (task.user.name === user.name)
                            return <li key={i}>{task.title}</li>;
                            return ""
                        })
                      : ""}
                  </ul>
                </li>
              )
            )
          ) : (
            <li className="list-item">No users</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Users;
