import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/styles.css'
import '../../css/home.css'


class Home extends Component{
    
    componentDidMount(){
        document.body.className="home"


    }

    componentWillUnmount(){
        document.body.style.backgroundColor = 'black'


    }


    render(){
        
    return(
        <div>
                    
                <main className="home-main-section container">
                        <div className="side-content">
                            <p>EAT.</p>
                            <p>PRAY.</p>
                            <p>LOVE.</p>
                        </div>
                </main>
                <Link to='/Signup' className ="mybtn">Sign Up</Link>
                
        </div>
    
      
    
      
    
    
    
        )
    }
  
}

export default Home