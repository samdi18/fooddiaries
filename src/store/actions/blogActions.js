import { firestore } from '../../config/fbConfig'

export const createBlog = (blog) =>{
    return (dispatch,getState,{ getFirebase }) =>{
        //make async call to database
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('blogs').add({
            ...blog,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId,
            createdAt: new Date()

        }).then(() =>{
            dispatch({ type:'CREATE_BLOG',blog });
        }).catch((err) =>{
            dispatch({ type:'CREATE_BLOG_ERROR',err });
        })

    }
}

export const likeBlog = (blog,id) =>{ //the blog param gives access to the likedBy parameter in the state object of CreateBlog.js
    
    return (dispatch, getState)  => {
        const signedInUser = getState().firebase.auth.uid
        let updatedLikedBy;
            if(blog.likedBy.indexOf(signedInUser) ===-1){  //if user uid not in array then add it to the preexisting ones
            updatedLikedBy = [...blog.likedBy, signedInUser] // add in the new signedInUser uid in the updated likedBy array list
            } else {
            updatedLikedBy = blog.likedBy.filter(item => item !== signedInUser)

            }
    
    
        const updatedPost = { ...blog, likedBy: updatedLikedBy} 

        firestore.collection('blogs')
            .doc(id) // pass in the id of the blog from the blog details
            .set(updatedPost).then(() =>{dispatch({type:'ADD_LIKE', blog});
                           }).catch((err) => {dispatch({type:'ADD_LIKE_ERROR', err});
                        })


      };
    

}
