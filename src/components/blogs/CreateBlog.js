import React, { Component } from 'react'
import '../../css/createBlog.css'
import { connect } from 'react-redux'
import {createBlog} from '../../store/actions/blogActions'
import { Redirect } from 'react-router-dom'
import { storage } from '../../config/fbConfig'

class CreateBlog extends Component{
    state = {
        title: '',
        content: '',
        likedBy: '',
        image : null,
        url :'',
        cuisine:''
      }
      
      handleSelect = (e) =>{
        const selectValue = e.target.value;
        this.setState({cuisine:selectValue});
      }

      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.createBlog(this.state);
        this.props.history.push('/');
      }

      handleImage = (e) =>{
        if (e.target.files[0]) {
          const image = e.target.files[0];
          // console.log(image);
          this.setState(() => ({image}));
        }
        
      }

      handleUpload = (e) =>{
        e.preventDefault();
        const {image} = this.state;
        const imageName = image.name;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        snapshot => {
          // progress function ...
        const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        error => {
          // Error function ...
          console.log(error);
        },
         () => {
          // complete function ....
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});

          })
      });
      this.setState(() => ({ image: imageName}));
      }

  


      componentDidMount(){
        document.body.style.backgroundColor = 'black'


    }

  
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to ='/login'/>
        return (
            
        <div className="create-blog container">
            <form onSubmit = {this.handleSubmit}>
              <h1 className="text-pink">Create Blog</h1>

              <input type="text" id="title" placeholder="Title" onChange = {this.handleChange}/>
              

              <textarea id="content" className="write-blog"placeholder="Write Blog"onChange = {this.handleChange} ></textarea>

              <div className= "createblog-buttons">
                  <div className="select-wrapper">
                      <select id ='cuisine' onChange = {this.handleSelect}>
                          <option value="" disabled selected hidden>Select Type</option>
                          <option value="savory">Savory</option>
                          <option value="sweet">Sweet</option>
                       
                      </select>
                  </div>

       
                  <input className='custom-file-input' type="file" name="myfile"  onChange = { this.handleImage}/>


                  <div className ='upload-file'>
                     <button onClick = {this.handleUpload}>Upload image</button>
                  </div>
              </div>

              
              {this.state.url ? <button type = "submit" className="create-btn">Create</button>:null}
            </form>

        </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    createBlog : blog => {dispatch(createBlog(blog))}
  }
}

const mapStatetoProps = state =>{
 
  return{
    auth : state.firebase.auth
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(CreateBlog)