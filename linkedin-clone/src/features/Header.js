import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./header.css"
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './userSlice';
import { auth } from './firebase';
function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logoutApp = () =>{
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0/1590003577120?e=2159024400&v=beta&t=CtsDFVp0TAdwyg73A8F82MohzKpAQy-pUGA13atPG6A" alt=""  />
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My NoteBook"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={MessageIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption 
                title="me" avatar={true}
                onClick={logoutApp}
                 />
            </div>

        </div>
    )
}

export default Header;
