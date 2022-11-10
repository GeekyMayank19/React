import React from "react";
import { useNavigate } from "react-router-dom";
import Post from "./Post";

const PostLeft = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        // border: "1px solid black",
        width: "70%",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h4>All Posts</h4>
        <button
          className="logout"
          style={{
            border: "1px solid #0B94FF",
            borderRadius: "4px",
            color: "white",
            fontSize: "15px",
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingLeft: "10px",
            paddingRight: "10px",
            width: "60px",
            fontWeight: "700px",
          }}
          onClick={() => navigate("/addpost")}
        >
          Post
        </button>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostLeft;
