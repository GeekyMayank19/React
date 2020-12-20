import React,{useState,useEffect} from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'

import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar,IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import db from './firebase';
import { useStateValue } from './StateProvider';
function Sidebar() {

  const [rooms ,setRooms] =useState([])
  const [{user}, dispatch] = useStateValue();

  useEffect (()=>{
 const unsubscribe = db.collection('rooms').onSnapshot((snapshot) =>
      
        setRooms(snapshot.docs.map(doc =>
          ({
            id: doc.id,
            data: doc.data(),
          })
          ))
      );
      return () => {
        unsubscribe();
      }
  }, [])


    return (
        <div className="sidebar">
          <div className="sidebar__header"> 
          <Avatar src={user?.photoURL}/>
            <div className="sidebar__headerright">
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <ChatIcon/> 
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton> 
            </div>
          </div>
          <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                    <SearchIcon />
                <input placeholder="Search or start new chat" type="text" />
            </div>
          </div>
          <div className="sidebar__chat">
            <SidebarChat addNewChat /> 
            {rooms.map(function (room) {
              return <SidebarChat key={room.id} id={room.id}
                name={room.data.name} />
            })}
           
          </div>
        </div>
    )
}

export default Sidebar
