import React, {useState, useContext} from 'react';
import './AddUser.css';
import { UsersContext } from '../UsersContext';

const AddUser = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [balance,setBalance] = useState('');
    const [user,setUser] = useContext(UsersContext);

    const updateName = e => {
        setName(e.target.value);
    };

    const updateEmail = e => {
        setEmail(e.target.value);
    };

    const updateBalance = e => {
        setBalance(e.target.value);
    };

    const addUser = e => {
        e.preventDefault();
        setUser(prevUser => [...prevUser, {name: name, email: email, balance: balance}]);
        
    };


    return(
        <form class = "container" onSubmit={addUser}>
            <input type = "text" name="name" value={name} onChange={updateName} placeholder='Name'/>
            <input type = "text" name="email" value={email} onChange={updateEmail} placeholder='Email'/>
            <input type = "text" name="balance" value={balance} onChange={updateBalance} placeholder='Balance'/>
            <button>Add User</button>
        </form>
    );
}

export default AddUser;