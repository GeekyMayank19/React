import React from "react";
import Avatar from "@mui/material/Avatar";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from "@mui/icons-material/Comment";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
import './post.css'
const Post = () => {
  return (
    <div
      style={{
        // border: "1px solid black",
        marginTop:20,
        justifyContent: "center",
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#F5F5F5',
        borderRadius:'6px'
      }}
    >
      <div
        style={{
          // border: "1px solid black",
          display: "flex",
          paddingTop:10
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src=""
          sx={{ width: 45, height: 45 }}
          style={{ margin: "2px", }}
        />
        <div
          style={{
            alignItems: "center",
          }}
        >
          <div style={{marginLeft:5,cursor:'pointer'}}>
            <div style={{fontWeight:"600",fontSize:'14px',marginTop:-1}}>Name</div>
            <div style={{fontWeight:"600" ,fontSize:'13px',marginTop:-6}}>University</div>
            <div style={{fontWeight:"600" ,fontSize:'13px',marginTop:-6}}>Profile</div>
          </div>
        </div>
      </div>
       <h6 className="question" style={{marginTop:-20,marginLeft:5}}>How to plot several outcomes for several groups in R ggplot? </h6>
      <div style={{marginTop:-7,marginLeft:5}}>
        Lorem idivsum dolor sit, amet consectetur adipisicing elit. Repellendus
        maiores nesciunt voluptatem cum excepturi, fugit iusto quam. Officia,
        reiciendis ipsum, suscipit ex maxime odio magni soluta nisi repellendus,
        unde culpa....
      </div>
      <div
        style={{
          // border: "1px solid black",
          display: "flex",
          alignItems: "center",
          padding: "3px",
          justifyContent:"flex-end"
        }}
      >
        <ThumbUpOutlinedIcon color="info" />
        <CommentIcon color="info" style={{ marginLeft: "40px" }} />
        <div style={{ marginLeft: "3px", fontWeight: "500" ,fontSize:12}}>34</div>
        <ShareSharpIcon
          color="info"
          fontSize="small"
          style={{ marginLeft: "40px" }}
        />
      </div>
    </div>
  );
};

export default Post;
