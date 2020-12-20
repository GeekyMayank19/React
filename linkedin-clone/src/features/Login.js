import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import './Login.css'
import { login } from './userSlice'
function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] =  useState("")
     const dispatch = useDispatch()

     const loginToApp=(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error))
    }

    const register=()=>{
        if(!name){
            return alert("Plese enter a full name")
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(() =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic
                }))
            })
        }).catch(error => alert(error))
    }

    
    return (
        <div className="login">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                alt=""
            />
            
            <form>
                <input value={name} onChange={event =>setName(event.target.value)}
                 type="text" placeholder="Full name (required if registering)" />

                <input value={profilePic} onChange={event =>setProfilePic(event.target.value)}
                 type="text" placeholder="Profile pic Ure (optional)" />

                <input value={email} onChange={event => setEmail(event.target.value)}
                 type="email" placeholder="Email" />

                <input value={password} onChange={event =>setPassword(event.target.value)}
                 type="password" placeholder="Password"/>
                
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?
            <span className="login__register" onClick={register}>Register Now </span>
            </p>

        </div>

        
    )
}

export default Login
