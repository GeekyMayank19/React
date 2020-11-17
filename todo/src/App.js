import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React , {useState,useEffect } from 'react'
import './App.css';
import Todo from './Todo';

import db from './firebase'
import firebase from 'firebase';

//1:30:27
function App() {
  //state are short time memory
  const [todos, setTodos] = useState(['abc','def'])
 const[input,setInput]= useState('')

// when the app loads we need to listen to the data base and fetch new todos as they get added/ removed
 useEffect(() => {

  /// this code here.. fires when the app.js loads
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
    // console.log(snapshot.docs.map(doc => doc.data()))
    setTodos(snapshot.docs.map(doc => doc.data().todo))// this allow to read the data from data base and add into setTodos
  })
 }, [])

 const addTodo = (event) =>{
   //thie will fire off when we click the button
      
      //stop the defult setting of submit it refresh the whole page
      event.preventDefault();

      db.collection('todos').add({
        todo: input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })

      // setTodos([...todos, input]) //it will add the input at the end of todos array
      setInput('')// clean up the input after clicking add todo button
    }

  return (
    <div className="App">
      <h2>hello world</h2>
      <form>
        <FormControl>
  <InputLabel> Write a ToDo</InputLabel>
          <Input value={input} onChange={event =>setInput(event.target.value)}></Input>
        </FormControl>
      {/* <input value={input} onChange={event =>setInput(event.target.value)}>
      </input> */}
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add Todo
</Button>
      {/* <button type="submit" onClick={addTodo}> Add Todo</button> */}

      </form>
      
      <ul>
        {todos.map(todo =>(
          <Todo text={todo}/>
          // <li>{todo }</li>
        ))}
       
      </ul>
    </div>
  );
}


export default App;
