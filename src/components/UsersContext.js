import React, {useState, createContext} from 'react';

export const UsersContext = createContext();

export const UsersProvider = (props) =>
{
    const [user, setUser] = useState([
        {name: 'John Waldo Magalona', email: 'sample1@gmail.com', balance: 1000000},
        {name: 'sample 2', email: 'sample2@gmail.com', balance: 1000000},
        {name: 'sample 3', email: 'sample3@gmail.com', balance: 1000000}
    ]);
    return(
       <UsersContext.Provider value = {[user, setUser]}>
           {props.children}
       </UsersContext.Provider>
    )
}