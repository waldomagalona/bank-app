import React from 'react';
import { UsersContext } from '../UsersContext';
import './HeaderLogo.css';

export default function Nav()
{
    return(
        <div class="nav">
            <div class="logo">
                <div id="abbrev">BDW</div>
                <div id="bankName">Bangko De Waldo</div>
            </div>
        </div>
    )
}

//export default Nav;