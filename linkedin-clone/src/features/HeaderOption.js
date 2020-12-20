import React from 'react'
import './HeaderOption.css'
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

function HeaderOption({avatar,Icon,title,onClick}) {
    
    const user = useSelector(selectUser)

    return (
        <div onClick={onClick} className="headeroption">
            {Icon && <Icon className="headeroption__icon" />}
            {avatar && (
                <Avatar className="headeroption__icon" >
                {user?.email[0]}
             </Avatar>)}
           
            <h4 className="headeroption__title">{title}</h4>
            
        </div>
    )
}

export default HeaderOption
