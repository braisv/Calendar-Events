import React, { useState, useEffect } from 'react';
import UserService from '../../utils/userService';
import './Users.css'
import Button from '../Buttons/Button';
import EditUser from './EditUser';

const service = new UserService()

const Users = () => {
    const [users, setUsers] = useState([])
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);
    const [add, setAdd] = useState(false);

    useEffect(() => {
        service.getUsers().then(data => setUsers(data))
    }, [])

    const closeForms = () => {
        setAdd(false)
        setEdit(false)
        service.getUsers().then(data => setUsers(data))
      }

    return (
        <div className="user-options">
            <div className="list-users">
                <h1>USERS</h1>
                <Button type="Add" onClick={() => setAdd(!add)} />
                <Button type="Edit" onClick={() => setEdit(!edit)} />
                <Button type="Remove" onClick={() => setRemove(!remove)} />
                {add ? <EditUser closeForms={() => closeForms()} /> : ""}
                <ul>
                    {users[0] ? users.map(user => (
                        <li>{user.name}</li>
                    )) : ""}
                </ul>
            </div>
        </div>
    )
}

export default Users
