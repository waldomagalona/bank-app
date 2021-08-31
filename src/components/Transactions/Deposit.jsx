import React, {useState, useContext} from 'react';
import { UsersContext } from '../UsersContext';
import './style.css';

const Deposit = () =>
{
    const [user,setUser] = useContext(UsersContext);
    const [names,setNames] = useState('');
    const [deposit, setDeposit] = useState('');

    const listNames = e => {
        setNames(e.target.value);
        console.log(names);
    };


    //deposit logic
    const updateDeposit= e => {
        setDeposit(e.target.value);
    };

    const addDeposit = e => {
        e.preventDefault();
        for( let i=0; i<user.length; i++)
        {
            if(user[i].name === names)
            {
                user[i].balance += parseFloat(deposit);
                console.log(user[i].name, user[i].balance);
                setUser([...user]);
                console.log(user);
            }
        }
    };

    return(
        //deposit divs
        <form class = "deposit-container" onSubmit={addDeposit}>
            <select id ="names" onSelect={listNames} onChange={listNames} onClick={listNames} >
                {user.map(user => {
                return (
                    <option> {user.name} </option>
                )
                })}
            </select>
            <input type = "text" name="deposit" value={deposit} onChange={updateDeposit} placeholder='Deposit Amount'/>
            <button>Deposit</button>
        </form>        
    );
}

export default Deposit;