const initState = {
    blogs: [
        {id:1, title:'Stawberry Cheesecake', content:'blah blah blah'},
        {id:2, title:'Hot Chocolate', content:'blah blah blah'},
        {id:3, title:'Pizza with Pepporoni', content:'blah blah blah'},
    ]
};

const blogReducer= (state=initState,action) => {
    switch(action.type){
        case 'CREATE_BLOG':
            console.log('created a freaking project', action.blog);
            return state;
        case 'CREATE_BLOG_ERROR':
            console.log('created a freaking project error', action.err);
            return state;
        case 'ADD_LIKE':
            console.log('liked something maybe');
            return state;
        case 'ADD_LIKE_ERROR':
            console.log('dont know! a like error', action.err);
            return state;
        
        default:
            return state;
    }

}

export default blogReducer;