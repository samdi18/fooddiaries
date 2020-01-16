import React from 'react'
import '../../css/singleBlog.css'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import { Component } from 'react'
import { likeBlog } from '../../store/actions/blogActions'


class BlogDetails extends Component{ 

  handleLike = () =>{
    this.props.likeBlog(this.props.blog,this.props.match.params.id);
  }


  render(){
  console.log(this.props);
  const { blog } = this.props;
  if(blog) {
    return(
         <section className="single-blog container">
            <h1 className="title text-pink">{ blog.title }</h1>
            <p> { blog.content }</p>
            {/* <h3 className= 'text-pink'>{ blog.cuisine }</h3> */}
            <h4 className="footer">Posted by { blog.authorFirstName } { blog.authorLastName }</h4>
            <h4 className="footer">{moment(blog.createdAt.toDate()).calendar()}</h4>

           <button class='like-button' onClick ={this.handleLike}>Like</button>
       
        </section>
    )
     
  }
  else{
    return(
        <section className = "container">
          <p>'Loading Project....'</p>
        </section>
      )
  }

}
}


const mapStatetoProps = (state,ownProps) =>{
  console.log(state);
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  const blog = blogs? blogs[id] :null;
  return {
      blog:blog,
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    likeBlog: (blog,id) => dispatch(likeBlog(blog,id))
  }
}

export default compose(
  connect(mapStatetoProps,mapDispatchtoProps),
  firestoreConnect([
    { collection : 'blogs' }
  ])
)(BlogDetails)


