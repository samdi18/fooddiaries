import React, { Component } from 'react'
import '../../css/signup.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'


class Signup extends Component{
    state = {
        email: '',
        password: '',
        firstName:'',
        lastName:''
      }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
      }
    
      componentDidMount(){
        document.body.style.backgroundColor = 'black'


    }
    render() {
      const { authError,auth } = this.props;
      if(auth.uid) return <Redirect to ='/'/>
        return (
           <section className="main-section container">
            <h1 className="join-text">
                    Join the <span className="text-pink">fun.</span>
            </h1>

            
            <div className="main-form">
                <h1 className="text-pink">Sign Up</h1>
                <form onSubmit = {this.handleSubmit}>
                    <div className="input-form">
                        <input type="email" id="email" placeholder="Email"onChange={this.handleChange}/>
                        <input type="password" id="password" placeholder="Password"onChange={this.handleChange}/>
                        <input type="text" id="firstName" placeholder="First Name" onChange={this.handleChange}/>
                        <input type="text" id="lastName" placeholder="Last Name" onChange={this.handleChange}/>

                    </div>
                        
                    <button type="submit" className="form-btn">
                      Register
                    </button>

                    <div className="signUpAuthError">
                      {authError? <p>{authError}</p> :null }
                    </div>
                 
                </form>

            </div>
        </section>
        )
    }
}

const mapStatetoProps = state =>{
  console.log(state);
  return {
    auth: state.firebase.auth,
    authError : state.auth.authError
  }
}

const mapDispatchtoProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Signup)