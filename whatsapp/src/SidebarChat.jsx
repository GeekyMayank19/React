import { Avatar } from '@material-ui/core'
import React ,{useEffect,useState}from 'react'
import './SidebarChat.css'
import db from './firebase'
import { Link } from 'react-router-dom'

function SidebarChat({id,name, addNewChat }) {
    const [messages,setMessages]=useState("")
    // console.log(name)
useEffect(() => {
    
    if(id){
        db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
            setMessages(snapshot.docs.map((doc)=>
             doc.data()))
        )
    }
    
}, [id])

    const createChat = () =>{
        const roomName=prompt("please eneter name for chat")

        if(roomName){
            // do some clever database stuff...
            db.collection('rooms').add({
                name:roomName,
            })
        }
    }

    return !addNewChat ?(
        <Link to ={`/rooms/${id}`}>
            <div className="sidebarChat">
            <Avatar src="" />
            <div className="sidebarChat__info">
                <h2> {name}</h2>
                <p>{messages[0]?.message}</p>
            </div>   
        </div>
        </Link>
        
    ):(
        <div className="sidebarChat" onClick={createChat}>
            <h2>Add new chat</h2>
        </div>
      )
}

export default SidebarChat
