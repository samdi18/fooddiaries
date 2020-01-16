import React, { Component } from 'react';
import BlogSummary from './BlogSummary';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link,Redirect } from 'react-router-dom'

class BlogList extends Component{

    state = {
        filter: ''
    }

    handleFilter = (e) =>{
        console.log(e.target.id)
        this.setState({
            filter: e.target.id
        })

    
    };

    componentDidMount(){
        document.body.style.backgroundColor = 'black'

    }

   

    render() {
        console.log(this.props);
        const { blogs, auth } = this.props;

        
        if(!auth.uid) return <Redirect to ='/login'/>
        
      
            return (
                <div className="blog">
                    <ul className = "blog-filters">
                        <li ><a href='#' id = 'All' onClick = {this.handleFilter}>All</a></li>
                        <li ><a href='#' id = 'Favorites' onClick = {this.handleFilter}>Favorites</a></li>
                        <li><a href='#' id = 'Savory' onClick = {this.handleFilter}>Savory</a></li>
                        <li><a href='#' id = 'Sweet' onClick = {this.handleFilter}>Sweet</a></li>
                    </ul>
        
                    <main className="gallery container">
                        {blogs && blogs.map(blog =>{
                            if(this.state.filter === 'Favorites'){
                                if(blog.likedBy.length > 1){
                                    return(
                                        <Link to = {'/bloglist/' + blog.id} key={blog.id} className= "card">
                                            <BlogSummary blog={ blog }  />
                                        </Link>
                            
                                    )
                                }
                                
                            }
        
                            else if(this.state.filter === 'Sweet'){
                                if(blog.cuisine === 'sweet'){
                                    return(
                                        <Link to = {'/bloglist/' + blog.id} key={blog.id} className= "card">
                                            <BlogSummary blog={ blog }  />
                                        </Link>
                            
                                    )
                                }
        
                            }
        
                            else if(this.state.filter === 'Savory'){
                                if(blog.cuisine === 'savory' ){
                                    return(
                                        <Link to = {'/bloglist/' + blog.id} key={blog.id} className= "card">
                                            <BlogSummary blog={ blog }  />
                                        </Link>
                            
                                    )
                                }
        
                            }
                            else{
                                return(
                                    <Link to = {'/bloglist/' + blog.id} key={blog.id} className= "card">
                                        <BlogSummary blog={ blog }  />
                                    </Link>
                            
                                    )
                            }
                            
                        })}
                    </main>
                </div>
           
                )
        

   
      
    }
}

const mapStatetoProps = state =>{
    console.log(state);
    return{
        blogs: state.firestore.ordered.blogs,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'blogs',  orderBy: ['createdAt','desc']   }
    ])
) (BlogList)