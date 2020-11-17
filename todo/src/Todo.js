import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css'
function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
              
                <ListItemText primary={props.text} secondary="Dummy deadline  "/>
            </ListItem>
             {/* <li>{props.text }</li> */}
        </List>
    )
}

export default Todo
//rfce react functional component with an export
//componets that something write one and use agian and agian
//porps tends to propeties and allows us to differentceate one componet 
// from another components