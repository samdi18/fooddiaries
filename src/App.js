import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import BlogList from './components/blogs/BlogList';
import BlogDetails from './components/blogs/BlogDetails';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import CreateBlog from './components/blogs/CreateBlog';
import Notifications from './components/home/Notification';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path = '/' component={Home} />
            <Route exact path = '/notifications' component={Notifications} />
            <Route  exact path = '/bloglist' component={BlogList} />
            <Route  path = '/bloglist/:id' component={BlogDetails} />
            <Route path ='/login' component ={Login}/>
            <Route path ='/signup' component ={Signup}/>
            <Route path = '/createblog' component = {CreateBlog}/>
       

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;