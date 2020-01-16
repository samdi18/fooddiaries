import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider,useSelector } from 'react-redux'
import thunk from 'redux-thunk'
// import {reduxFirestore,getFirestore} from 'redux-firestore'
import { createFirestoreInstance } from 'redux-firestore'
// import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import { ReactReduxFirebaseProvider, getFirebase,isLoaded } from 'react-redux-firebase'

import firebase from './config/fbConfig'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase})),
        // reduxFirestore(fbConfig),
        // reactReduxFirebase(fbConfig)
    )
);

const rrfConfig = { 
    userProfile: 'users',
    useFirestoreForProfile:true
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
    }

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading...</div>;
    return children
 }

ReactDOM.render(
    <Provider store ={store}> 
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
            
        </ReactReduxFirebaseProvider>
    </Provider>, 
    
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
