import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import FlipMove from "react-flip-move"


function Feed() {

    const [posts, setPost] = useState([]);
    const [input,setInput] = useState("")
    const user=useSelector(selectUser)
    useEffect(()=>{
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot =>(
            setPost(snapshot.docs.map(doc=>(
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    },[])

    const sendPost = (event) =>{
        event.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message:input,
            photoUrl: user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),

        })
        setInput('')
       
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                   <CreateIcon/> 
                   <form>
                       <input value={input} onChange={event => setInput(event.target.value)} type="text"/>
                       <button onClick={sendPost} type="submit">Send</button>
                   </form>
                </div>
                <div className="feed__inputOption">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon } title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventIcon} title="Event"  color="C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            {/* post */}
            <FlipMove>
            {posts.map(({id, data:{name, description, message, photoUrl}})=>(
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
            
            
            {/* <Post nmae="Mayank Sharma" description="This is a test"
                message="WOW this worked "
            /> */}
        </div>
    )
}

export default Feed
