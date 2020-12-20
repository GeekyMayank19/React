import React from 'react'
import './post.css'
import Avatar from '@material-ui/core/Avatar';
function Posts({ caption,imageUrl,username}) {
    

    return (
        <div className="post">
            <div className="post__header">
             <Avatar
            className="post__avatar"
            alt="RafehQazi"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWnxG8KNA0o-mdbdZB-HodGPSnZG08mfLAg&usqp=CAU"/> 
            <h3>{username}</h3>
            </div>


            <img className="post__image" src={imageUrl}/>
    <h4 className="post__text"><strong>{username}</strong>{caption}</h4>
        </div>
    )
}

export default Posts
