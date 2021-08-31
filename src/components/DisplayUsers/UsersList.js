import React, { useState, useContext } from 'react';
import  {UsersContext} from '../UsersContext';
import "./UsersList.css";
const UsersList = () =>
{
    const [user, setUser] = useContext(UsersContext);

    return(
        <div>
            {
                user.map(user => (
                    <div class = 'user-container'>
                        <div class ='userInfo' id='userName'>{user.name}</div>
                        <div class ='userInfo' id='userEmail'>{user.email}</div>
                        <div class ='userInfo' id='userBalance'>{user.balance}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default UsersList;

