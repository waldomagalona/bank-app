import React, {useState, useContext} from 'react';
import { UsersContext } from '../UsersContext';
import './style.css';

const Transfer = () =>
{
    const [user,setUser] = useContext(UsersContext);
    const [sender,setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [transfer, setTransfer] = useState('');

    const listSender = e => {
        setSender(e.target.value);
        console.log(sender);
    };

    const listReceiver = e => {
        setReceiver(e.target.value);
        console.log(receiver);
    };


    //deposit logic
    const updateTransfer= e => {
        setTransfer(e.target.value);
    };

    const handleTransfer = e => {
        e.preventDefault();
        for( let i=0; i<user.length; i++)
        {
            if(user[i].name === sender)
            {
                if(user[i].balance >= transfer)
                {
                    for(let j=0; j < user.length; j++)
                    {
                        if(user[j].name === receiver)
                        {
                        user[i].balance -= parseFloat(transfer);
                        user[j].balance += parseFloat(transfer);
                        console.log(user[i].name, user[i].balance, user[j].name, user[j].balance);
                        setUser([...user]);
                        console.log(user);
                        }
                    }

                }

            }
        }
    };

    return(
        //deposit divs
        <form class = "transfer-container" onSubmit={handleTransfer}>

            <select id ="sender" onSelect={listSender} onChange={listSender} onClick={listSender} >
                {user.map(user => {
                return (
                    <option> {user.name} </option>
                )
                })}
            </select>

            <select id ="receiver" onSelect={listReceiver} onChange={listReceiver} onClick={listReceiver} >
                {user.map(user => {
                return (
                    <option> {user.name} </option>
                )
                })}
            </select>

            <input type = "text" name="transfer" value={transfer} onChange={updateTransfer} placeholder='Transfer Amount'/>
            <button>Transfer</button>
        </form>        
    );
}

export default Transfer;