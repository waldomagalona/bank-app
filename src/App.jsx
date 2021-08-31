import "./App.css";
import React,{useState} from "react";
import {UsersProvider} from './components/UsersContext';
import HeaderLogo from './components/Nav/HeaderLogo';
import UsersList from "./components/DisplayUsers/UsersList";
import AddUser from './components/AddUser/AddUser';
import Transactions from './components/Transactions/Transactions';

const App = (props) => {
  return(
    
      <div className="App">
        <UsersProvider>
        <HeaderLogo />
        <UsersList />
        <AddUser />
        <Transactions />
        </UsersProvider>
      </div>
  )
}

export default App;
