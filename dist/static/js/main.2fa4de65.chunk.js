(this.webpackJsonpfooddiaries=this.webpackJsonpfooddiaries||[]).push([[0],{218:function(e,t,a){e.exports=a(419)},223:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){},383:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){},386:function(e,t,a){},387:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(90),o=a.n(l),c=(a(223),a(10)),i=a(11),s=a(13),u=a(12),m=a(14),d=a(4),h=a(32),f=(a(64),a(6)),b=a(63),p=a.n(b);a(228),a(231),a(420);p.a.initializeApp({apiKey:"AIzaSyC7eZtkIRlD7nf-HzhUR8IdFrSSnWIGWUs",authDomain:"react-fooddiaries.firebaseapp.com",databaseURL:"https://react-fooddiaries.firebaseio.com",projectId:"react-fooddiaries",storageBucket:"react-fooddiaries.appspot.com",messagingSenderId:"784850069577",appId:"1:784850069577:web:e62895549fd444964fb798",measurementId:"G-948QZ2G5EE"});var g=p.a.firestore(),E=p.a,v=p.a.storage(),N=(v.ref(),Object(f.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.c,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/bloglist",activeClassName:"active-pink"},"Blogs")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/createblog",activeClassName:"active-pink"},"Create Blog")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/notifications",activeClassName:"active-pink"},"Notifications")),r.a.createElement("li",{className:"login-nav"},r.a.createElement("a",{onClick:e.signOut},"Log Out"))))}))),y=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"login-nav"},r.a.createElement(d.c,{to:"/login"},"Login"))))},O=Object(f.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth.uid?r.a.createElement(N,null):r.a.createElement(y,null);return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"main-header"},r.a.createElement(d.b,{to:"/",className:"brand-logo"},"Food",r.a.createElement("span",{className:"text-pink"}," Diaries")),t))})),j=(a(234),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.body.className="home"}},{key:"componentWillUnmount",value:function(){document.body.style.backgroundColor="black"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("main",{className:"home-main-section container"},r.a.createElement("div",{className:"side-content"},r.a.createElement("p",null,"EAT."),r.a.createElement("p",null,"PRAY."),r.a.createElement("p",null,"LOVE."))),r.a.createElement(d.b,{to:"/Signup",className:"mybtn"},"Sign Up"))}}]),t}(n.Component)),k=(a(235),a(51)),C=a.n(k),S=function(e){var t=e.blog;return r.a.createElement("div",{className:"blog01 box"},r.a.createElement("img",{src:t.url,alt:""}),r.a.createElement("div",{className:"likes-date"},r.a.createElement("span",null,t.likedBy.length," likes"),r.a.createElement("span",null,C()(t.createdAt.toDate()).calendar())),r.a.createElement("div",{className:"box-text"},r.a.createElement("h5",null,t.title," ",r.a.createElement("span",{className:"author"}," ",t.authorFirstName," ",t.authorLastName)),r.a.createElement("p",null," ",t.content," ")))},w=a(20),R=a(15),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={filter:""},a.handleFilter=function(e){console.log(e.target.id),a.setState({filter:e.target.id})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="black"}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props,a=t.blogs;return t.auth.uid?r.a.createElement("div",{className:"blog"},r.a.createElement("ul",{className:"blog-filters"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",id:"All",onClick:this.handleFilter},"All")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",id:"Favorites",onClick:this.handleFilter},"Favorites")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",id:"Savory",onClick:this.handleFilter},"Savory")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",id:"Sweet",onClick:this.handleFilter},"Sweet"))),r.a.createElement("main",{className:"gallery container"},a&&a.map((function(t){if("Favorites"===e.state.filter){if(t.likedBy.length>1)return r.a.createElement(d.b,{to:"/bloglist/"+t.id,key:t.id,className:"card"},r.a.createElement(S,{blog:t}))}else if("Sweet"===e.state.filter){if("sweet"===t.cuisine)return r.a.createElement(d.b,{to:"/bloglist/"+t.id,key:t.id,className:"card"},r.a.createElement(S,{blog:t}))}else{if("Savory"!==e.state.filter)return r.a.createElement(d.b,{to:"/bloglist/"+t.id,key:t.id,className:"card"},r.a.createElement(S,{blog:t}));if("savory"===t.cuisine)return r.a.createElement(d.b,{to:"/bloglist/"+t.id,key:t.id,className:"card"},r.a.createElement(S,{blog:t}))}})))):r.a.createElement(h.a,{to:"/login"})}}]),t}(n.Component),I=Object(R.d)(Object(f.b)((function(e){return console.log(e),{blogs:e.firestore.ordered.blogs,auth:e.firebase.auth}})),Object(w.firestoreConnect)([{collection:"blogs",orderBy:["createdAt","desc"]}]))(A),L=(a(383),a(217)),U=a(33),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleLike=function(){a.props.likeBlog(a.props.blog,a.props.match.params.id)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.blog;return e?r.a.createElement("section",{className:"single-blog container"},r.a.createElement("h1",{className:"title text-pink"},e.title),r.a.createElement("p",null," ",e.content),r.a.createElement("h4",{className:"footer"},"Posted by ",e.authorFirstName," ",e.authorLastName),r.a.createElement("h4",{className:"footer"},C()(e.createdAt.toDate()).calendar()),r.a.createElement("button",{class:"like-button",onClick:this.handleLike},"Like")):r.a.createElement("section",{className:"container"},r.a.createElement("p",null,"'Loading Project....'"))}}]),t}(n.Component),B=Object(R.d)(Object(f.b)((function(e,t){console.log(e);var a=t.match.params.id,n=e.firestore.data.blogs;return{blog:n?n[a]:null}}),(function(e){return{likeBlog:function(t,a){return e(function(e,t){return function(a,n){var r,l=n().firebase.auth.uid;r=-1===e.likedBy.indexOf(l)?[].concat(Object(L.a)(e.likedBy),[l]):e.likedBy.filter((function(e){return e!==l}));var o=Object(U.a)({},e,{likedBy:r});g.collection("blogs").doc(t).set(o).then((function(){a({type:"ADD_LIKE",blog:e})})).catch((function(e){a({type:"ADD_LIKE_ERROR",err:e})}))}}(t,a))}}})),Object(w.firestoreConnect)([{collection:"blogs"}]))(F),D=a(31),x=(a(384),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(D.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.login(a.state)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="black"}},{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(h.a,{to:"/"}):r.a.createElement("section",{className:"main-login container"},r.a.createElement("h1",{className:"join-text"},"Spread the ",r.a.createElement("span",{className:"text-pink"},"joy.")),r.a.createElement("div",{className:"form-login"},r.a.createElement("h1",{className:"text-pink"},"Member Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-login"},r.a.createElement("input",{type:"email",id:"email",placeholder:"Email",onChange:this.handleChange}),r.a.createElement("input",{type:"password",id:"password",placeholder:"Password",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"login-btn"},"LOGIN"),r.a.createElement("div",{className:"loginAuthError"},t?r.a.createElement("p",null,t):null),r.a.createElement("p",{className:"forget-pass"},"Forget Username/Password?")),r.a.createElement(d.b,{to:"/Signup"},r.a.createElement("a",{className:"create-account",ref:"#"},"Create Account"))))}}]),t}(n.Component)),_=Object(f.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{login:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(x),G=(a(385),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(D.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="black"}},{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(h.a,{to:"/"}):r.a.createElement("section",{className:"main-section container"},r.a.createElement("h1",{className:"join-text"},"Join the ",r.a.createElement("span",{className:"text-pink"},"fun.")),r.a.createElement("div",{className:"main-form"},r.a.createElement("h1",{className:"text-pink"},"Sign Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-form"},r.a.createElement("input",{type:"email",id:"email",placeholder:"Email",onChange:this.handleChange}),r.a.createElement("input",{type:"password",id:"password",placeholder:"Password",onChange:this.handleChange}),r.a.createElement("input",{type:"text",id:"firstName",placeholder:"First Name",onChange:this.handleChange}),r.a.createElement("input",{type:"text",id:"lastName",placeholder:"Last Name",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"form-btn"},"Register"),r.a.createElement("div",{className:"signUpAuthError"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component)),P=Object(f.b)((function(e){return console.log(e),{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return g.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(G),T=(a(386),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:"",likedBy:"",image:null,url:"",cuisine:""},a.handleSelect=function(e){var t=e.target.value;a.setState({cuisine:t})},a.handleChange=function(e){a.setState(Object(D.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.props),a.props.createBlog(a.state),a.props.history.push("/")},a.handleImage=function(e){if(e.target.files[0]){var t=e.target.files[0];a.setState((function(){return{image:t}}))}},a.handleUpload=function(e){e.preventDefault();var t=a.state.image,n=t.name;v.ref("images/".concat(t.name)).put(t).on("state_changed",(function(e){Math.round(e.bytesTransferred/e.totalBytes*100)}),(function(e){console.log(e)}),(function(){v.ref("images").child(t.name).getDownloadURL().then((function(e){console.log(e),a.setState({url:e})}))})),a.setState((function(){return{image:n}}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="black"}},{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"create-blog container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",{className:"text-pink"},"Create Blog"),r.a.createElement("input",{type:"text",id:"title",placeholder:"Title",onChange:this.handleChange}),r.a.createElement("textarea",{id:"content",className:"write-blog",placeholder:"Write Blog",onChange:this.handleChange}),r.a.createElement("div",{className:"createblog-buttons"},r.a.createElement("div",{className:"select-wrapper"},r.a.createElement("select",{id:"cuisine",onChange:this.handleSelect},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Select Type"),r.a.createElement("option",{value:"savory"},"Savory"),r.a.createElement("option",{value:"sweet"},"Sweet"))),r.a.createElement("input",{className:"custom-file-input",type:"file",name:"myfile",onChange:this.handleImage}),r.a.createElement("div",{className:"upload-file"},r.a.createElement("button",{onClick:this.handleUpload},"Upload image"))),this.state.url?r.a.createElement("button",{type:"submit",className:"create-btn"},"Create"):null)):r.a.createElement(h.a,{to:"/login"})}}]),t}(n.Component)),W=Object(f.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createBlog:function(t){e(function(e){return function(t,a,n){n.getFirebase;var r=a().firebase.profile,l=a().firebase.auth.uid;g.collection("blogs").add(Object(U.a)({},e,{authorFirstName:r.firstName,authorLastName:r.lastName,authorId:l,createdAt:new Date})).then((function(){t({type:"CREATE_BLOG",blog:e})})).catch((function(e){t({type:"CREATE_BLOG_ERROR",err:e})}))}}(t))}}}))(T),M=(a(387),Object(R.d)(Object(f.b)((function(e){return{notifications:e.firestore.ordered.notifications}})),Object(w.firestoreConnect)([{collection:"notifications",limit:3,orderBy:["time","desc"]}]))((function(e){var t=e.notifications;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"notification-user"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"notification-date"},C()(e.time.toDate()).fromNow()))}))))}))),z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:j}),r.a.createElement(h.b,{exact:!0,path:"/notifications",component:M}),r.a.createElement(h.b,{exact:!0,path:"/bloglist",component:I}),r.a.createElement(h.b,{path:"/bloglist/:id",component:B}),r.a.createElement(h.b,{path:"/login",component:_}),r.a.createElement(h.b,{path:"/signup",component:P}),r.a.createElement(h.b,{path:"/createblog",component:W}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K={authError:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(U.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(U.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(U.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(U.a)({},e,{authError:t.err.message});default:return e}},J={blogs:[{id:1,title:"Stawberry Cheesecake",content:"blah blah blah"},{id:2,title:"Hot Chocolate",content:"blah blah blah"},{id:3,title:"Pizza with Pepporoni",content:"blah blah blah"}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_BLOG":return console.log("created a freaking project",t.blog),e;case"CREATE_BLOG_ERROR":return console.log("created a freaking project error",t.err),e;case"ADD_LIKE":return console.log("liked something maybe"),e;case"ADD_LIKE_ERROR":return console.log("dont know! a like error",t.err),e;default:return e}},Q=a(93),V=Object(R.c)({auth:H,blog:Z,firestore:Q.firestoreReducer,firebase:w.firebaseReducer}),Y=a(216),$=Object(R.e)(V,Object(R.d)(Object(R.a)(Y.a.withExtraArgument({getFirebase:w.getFirebase})))),q={firebase:E,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:$.dispatch,createFirestoreInstance:Q.createFirestoreInstance};o.a.render(r.a.createElement(f.a,{store:$},r.a.createElement(w.ReactReduxFirebaseProvider,q,r.a.createElement((function(e){var t=e.children,a=Object(f.c)((function(e){return e.firebase.auth}));return Object(w.isLoaded)(a)?t:r.a.createElement("div",null,"Loading...")}),null,r.a.createElement(z,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,t,a){}},[[218,1,2]]]);
//# sourceMappingURL=main.2fa4de65.chunk.js.map