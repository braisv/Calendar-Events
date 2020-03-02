import React, { useState, useEffect } from 'react';
import UserService from '../../utils/userService';
import './Users.css'

const service = new UserService()

const Users = () => {
    const [users, setUsers] = useState([])

    console.log("USERS: ", users)
    console.log("SERVICE RESPONSE: ", service.getAll())

    useEffect(() => {
        setUsers(service.getAll())

    }, [])
    return (
        <div className="user-options">
            <div className="list-users">
                <h1>USERS</h1>
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
