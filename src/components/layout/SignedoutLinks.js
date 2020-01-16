import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/styles.css'

const SignedOutLinks =() =>{
    return(
        <nav className="main-nav">
            <ul>
                <li className="login-nav"><NavLink to='/login'>Login</NavLink></li>
            </ul>
        </nav>


    )
}

export default SignedOutLinks