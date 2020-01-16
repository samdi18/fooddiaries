import React from 'react'
import '../../css/notifications.css'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'


const Notifications = (props) =>{

    const {notifications} = props;
   return(
       <div className='container'>
           <h1>Notifications</h1>
           <ul className="notifications">
            { notifications && notifications.map(item =>{
                return <li key={item.id}>
                    <span className="notification-user">{item.user} </span>
                    <span>{item.content}</span>
                    <div className="notification-date">{moment(item.time.toDate()).fromNow()}</div>
                </li>
                })
            }
           </ul>
       </div>
   )
}

const mapStatetoProps = state =>{
    //console.log(state);
    return{
        notifications:state.firestore.ordered.notifications
    }
}


export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection:'notifications',limit:3, orderBy: ['time','desc']}
    ])
) (Notifications)