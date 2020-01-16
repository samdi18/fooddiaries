import React from 'react'
import { Link } from 'react-router-dom'
import LoginLinks from './LoginLinks'
import '../../css/styles.css'
import SignedOutLinks from './SignedoutLinks'
import { connect } from 'react-redux'


const Navbar =(props) =>{
    const { auth } = props;
    const links = auth.uid? <LoginLinks/> : <SignedOutLinks/>
    return(

        <div className="container">
            <header className="main-header">
                <Link to='/' className ="brand-logo">Food 
                <span className="text-pink"> Diaries</span></Link>
                { links }
            </header>
        </div>

    )
}

const mapStatetoProps = state => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStatetoProps)(Navbar)