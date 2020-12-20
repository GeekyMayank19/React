import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import './app.css';
import Sidebar from './features/Sidebar'
import Header from './features/Header'
import Feed from './features/Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './features/Login';
import { auth } from './features/firebase';
import Widgets from './features/Widgets';
function App() {

  const user=useSelector(selectUser)
 const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName:userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      <div className="header"></div>
       <Header/>
      {!user ?
       <Login/> :(
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
       </div>
      )}
       
       
    </div>
  );
}

export default App;
