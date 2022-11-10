import React from "react";
import PostLeft from "./PostLeft";
import PostRight from "./PostsRight";

const Posts = () => {
  return (
    <div
      style={{
        // border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        flexDirection: "row",
      }}
    >
      <PostLeft />
      <PostRight />
    </div>
  );
};

export default Posts;
