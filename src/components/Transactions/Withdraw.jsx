import React, {useState, useContext} from 'react';
import { UsersContext } from '../UsersContext';
import './style.css';

const Withdraw = () =>
{
    const [user,setUser] = useContext(UsersContext);
    const [names,setNames] = useState('');
    const [withdraw, setWithdraw] = useState('');

    const listNames = e => {
        setNames(e.target.value);
        console.log(names);
    };


    //deposit logic
    const updateWithdraw= e => {
        setWithdraw(e.target.value);
    };

    const handleWithdraw = e => {
        e.preventDefault();
        for( let i=0; i<user.length; i++)
        {
            if(user[i].name === names)
            {
                if(user[i].balance >= withdraw)
                {
                    user[i].balance -= parseFloat(withdraw);
                    console.log(user[i].name, user[i].balance);
                    setUser([...user]);
                    console.log(user);
                }

            }
        }
    };

    return(
        //withdraw divs
        <form class = "withdraw-container" onSubmit={handleWithdraw }>
            <select id ="names" onSelect={listNames} onChange={listNames} onClick={listNames} >
                {user.map(user => {
                return (
                    <option> {user.name} </option>
                )
                })}
            </select>
            <input type = "text" name="withdraw" value={withdraw} onChange={updateWithdraw} placeholder='Withdraw Amount'/>
            <button>Withdraw</button>
        </form>        
    );
}

export default Withdraw;