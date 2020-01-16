import React from 'react'
import '../../css/blogList.css'
// import Blog01 from '../../css/images/blog02.jpg'
import moment from 'moment'


const BlogSummary =({blog}) =>{

  return(
        <div className="blog01 box">
            <img src={blog.url} alt=''/>
            <div className="likes-date">
                <span>{blog.likedBy.length} likes</span>
                {/* <span>{blog.createdAt.toDate().toDateString()}</span> */}
                <span>{moment(blog.createdAt.toDate()).calendar()}</span>
            </div>
            <div className="box-text">
                <h5>{blog.title} <span className="author"> {blog.authorFirstName} {blog.authorLastName}</span></h5>
                <p> { blog.content} </p>
            </div>
            
        </div>


)
}

export default BlogSummary