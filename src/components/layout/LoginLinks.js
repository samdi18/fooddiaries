import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/styles.css'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const LoginLinks =(props) =>{
   
    return(
        <nav className="main-nav">
            <ul >
                <li ><NavLink to='/' >Home</NavLink></li>
                <li ><NavLink to='/bloglist' activeClassName='active-pink' >Blogs</NavLink></li>
                <li ><NavLink to='/createblog' activeClassName='active-pink'>Create Blog</NavLink></li>
                <li ><NavLink to='/notifications' activeClassName='active-pink'>Notifications</NavLink></li>
                <li className="login-nav"><a onClick= {props.signOut}>Log Out</a></li>
            </ul>
        </nav>


    )
}

const mapDispatchtoProps = dispatch =>{
    return{
        signOut: () => dispatch(signOut())
    }
}


export default connect(null,mapDispatchtoProps) (LoginLinks)