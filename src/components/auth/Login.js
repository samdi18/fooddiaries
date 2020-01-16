import React, { Component } from 'react'
import '../../css/login.css'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Login extends Component{
    state = {
        email: '',
        password: ''
      }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
      }

    
      componentDidMount(){
        document.body.style.backgroundColor = 'black'


    }
    render() {
       const { authError,auth } = this.props;
       if(auth.uid) return <Redirect to ='/'/>
        return (
           <section className="main-login container">
            <h1 className="join-text">
                    Spread the <span className="text-pink">joy.</span>
            </h1>

            <div className="form-login">
                <h1 className="text-pink">Member Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-login">
                        <input type="email" id="email" placeholder="Email" onChange={this.handleChange}/>
                        <input type="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                        
                    <button type = "submit" className="login-btn">
                      LOGIN
                    </button>

                    <div className="loginAuthError">
                      {authError? <p>{authError}</p> :null }
                    </div>

                    <p className="forget-pass">Forget Username/Password?</p>                   
                
                    
                </form>

                <Link to='/Signup'><a className="create-account" ref="#" >Create Account</a></Link>
        </div>
        </section>
        )
    }
}

const mapStatetoProps = state =>{
  return{
    authError:state.auth.authError,
    auth : state.firebase.auth
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    login:creds => dispatch(signIn(creds))
  }
}



export default connect(mapStatetoProps,mapDispatchtoProps)(Login)