import React, {useState, useContext} from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Transfer from './Transfer';

const Transactions = () => {

    return(
        <div>
            <Deposit />
            <Withdraw />
            <Transfer />
        </div>
    );
}
export default Transactions;