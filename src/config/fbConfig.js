import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyC7eZtkIRlD7nf-HzhUR8IdFrSSnWIGWUs",
    authDomain: "react-fooddiaries.firebaseapp.com",
    databaseURL: "https://react-fooddiaries.firebaseio.com",
    projectId: "react-fooddiaries",
    storageBucket: "react-fooddiaries.appspot.com",
    messagingSenderId: "784850069577",
    appId: "1:784850069577:web:e62895549fd444964fb798",
    measurementId: "G-948QZ2G5EE"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  // firebase.firestore().settings({timestampsInSnapshots: true});

  export const firestore = firebase.firestore();

  export default firebase

  // Get a reference to the storage service, which is used to create references in your storage bucket
  export const storage = firebase.storage();
  // Create a storage reference from our storage service
  export const storageRef = storage.ref();