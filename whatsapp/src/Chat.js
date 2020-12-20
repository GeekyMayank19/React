import React,{useState,useEffect} from 'react'
import './Chat.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { AttachFile, InsertEmoticon, Today } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase'
import { useStateValue } from './StateProvider';
import firebase from 'firebase'

function Chat() {
    const [input, setInput]=useState("")
    const {roomId} = useParams()
    const [roomName, setRoomName]=useState("")
    const [messages, setMessages]=useState([])
    const [{user}, dispatch] =useStateValue()

    useEffect (() =>{
        if(roomId){
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomName
                (snapshot.data().name))

            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => 
                    doc.data())))
        }
    },[roomId])

    const sendMessage =(event)=>{
        console.log("you typed >>",input)
        event.preventDefault();

        db.collection('rooms').doc(roomId).collection('messages').add({
            message:input,
            name:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    }

    // function hendelonchange(event){
    //     const newinput=event.target.value

    //     setInput(newinput)
    //     console.log(newinput)
      
    // }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>{roomName} </h3>
                    <p>Last seen at {new Date(
                        messages[messages.length -1]?.
                        timestamp?.toDate()
                    ).toUTCString()} </p>
                </div>
                <div className="chat__headerRight">
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <AttachFile/> 
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton> 

                </div>
            </div>
            <div className="chat__body">
            {messages.map((message) =>(
                <p className={`chat__message ${
                    message.name===user.displayName &&
                "chat__reciver"} `}>
                    <span className="chat__name ">
                    {message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">
                    {/* {new Date(message.timestamp?.toDate().toUTCString())} */}
                    </span>
                </p>
            ))}
                
            </div>
            <div className="chat__footer">
                  <InsertEmoticon />
                  <form type="submit">
                      <input 
                      value={input} 
                      onChange={(event) => {
                          setInput(event.target.value)
                        //   console.log(event.target.value)
                          }} 
                       type="text" />
                      <button onClick={sendMessage}>Send a message</button>
                  </form>  
                  <MicIcon/>
            </div>
                
        </div>
    )
}

export default Chat
