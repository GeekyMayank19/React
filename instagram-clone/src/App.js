import React, {useState, useEffect} from 'react'
import './App.css';
import './Posts'
import Posts from './Posts';
import {auth, db} from './firebase'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import './ImageUpload'
import ImageUpload from './ImageUpload';

// import InstagramIcon from '@material-ui/icons/Instagram';

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [posts, setPosts ]= useState ([])
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [openSignIn , setopenSignIn] =useState(false)

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) =>{
     if(authUser) {
       ///user has logged in..
       console.log(authUser)
       setUser(authUser) 

     } else{
       // user has logged out..
       setUser(null)
     }
    })
    return() =>{
      //perform some cleanup actions
      unsubscribe()
    }
  } ,[user, username])

//useEffect runs a pice of code base on a specific condition
// useEffect(() => {
//   db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
//       setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
//     );
// }, []);

const singUp= (event) => {
event.preventDefault()
// user authontication
auth.createUserWithEmailAndPassword(email, password)
.then((authUser) => {
  authUser.user.updateProfile({
    displayName: username
  })
})
.catch((error) => alert(error.message))

setOpen(false)
}

const singIn = (event ) => {
  event.preventDefault()

  auth.signInWithEmailAndPassword(email,password)
  .catch((error) => alert(error.message))

  setopenSignIn(false)

}

  return (
    <div className="app">
      {user?.displayName ? (
      <ImageUpload username={user.displayName}/>
      ): (
        <h3>Sorry you need to login to upload</h3>
      )

  }

        <Modal
        open={open}
        onClose={() => setOpen(false)}>
       <div style={modalStyle} className={classes.paper}>
         
         <form >
         <center >
         <img 
        className="app__headerimage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"  
        alt=""
        />
        <div className="app__singup">
         <Input 
         placeholder="username"
         type="text"
         value ={username}
         onChange={(e) => setUsername(e.target.value)}
         />
         <Input
         placeholder="email"
         type="text"
         value ={email}
         onChange={(e) => setEmail(e.target.value)}
         />
         <Input
         placeholder="password"
         type="text"
         value ={password}
          onChange={(e) => setPassword(e.target.value)}
         />

          
          <Button type='submit' onClick={singUp}>Sign Up</Button>
          </div>
         </center>
         </form>
         
       </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setopenSignIn(false)}>
       <div style={modalStyle} className={classes.paper}>
         
         <form >
         <center >
         <img 
        className="app__headerimage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"  
        alt=""
        />
        <div className="app__singup">
       
         <Input
         placeholder="email"
         type="text"
         value ={email}
         onChange={(e) => setEmail(e.target.value)}
         />
         <Input
         placeholder="password"
         type="text"
         value ={password}
          onChange={(e) => setPassword(e.target.value)}
         />

          
          <Button type='submit' onClick={singIn}>Sign Up</Button>
          </div>
         </center>
         </form>
         
       </div>
      </Modal>


      <div className="app__header">
        <img 
        className="app__headerimage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"  
        alt=""
        />
      </div>

      {user ?(
             <Button  onClick={() => auth.signOut()}>Logout</Button>
          ): (
            <div className="app__logincontainer">
               <Button onClick={() => setopenSignIn(true)}>Sign In</Button>
               <Button onClick={() => setOpen(true)}>Sign Up</Button>
            </div>
            
          )}
     
     
     {
       posts.map(({id, post}) =>  (
       <Posts key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
       ))
      }
     

    </div>
  );
}

export default App;
//2:02:44