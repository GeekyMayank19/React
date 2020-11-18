import { Button, List, ListItem,  ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
function Todo(props) {


    return (
        <List className="todo__list">
            <ListItem>
              
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline  "/>
            </ListItem>
            <DeleteIcon onClick={event =>db.collection('todos').doc(props.todo.id).delete()}
                >Delete Me</DeleteIcon>
             {/* <li>{props.text }</li> */}
        </List>
    )
}

export default Todo
//rfce react functional component with an export
//componets that something write one and use agian and agian
//porps tends to propeties and allows us to differentceate one componet 
// from another components