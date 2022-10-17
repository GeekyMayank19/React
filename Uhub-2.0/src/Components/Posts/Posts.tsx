import React from "react";
import PostLeft from "./PostLeft";
import PostRight from "./PostsRight";

const Posts = () => {
  return (
    <div
      style={{
        display: "flex",
        // border: "1px solid black",
        width: "83%",
        justifyContent: "center",
        padding: "10px",
        flexDirection: "row",
        borderLeft: "1px solid #C8C8C8",
      }}
    >
      <PostLeft />
      <PostRight />
    </div>
  );
};

export default Posts;
