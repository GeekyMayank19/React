import React from "react";

const Messages = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "280px",
        position: "absolute",
        top: "33px",
        zIndex: 2,
        border: "1px solid 	#E8E8E8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          marginLeft: "10px",

          marginBottom: "3.5px",
          // maxWidth: "75%",
          justifySelf: "left",
          marginTop: "3.5px",
        }}
      >
        <div
          style={{
            maxWidth: "85%",
            border: "1px solid 	#E8E8E8",
            padding: "5px",
          }}
        >
          test Lorem
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginLeft: "5px",
          justifyContent: "right",
          marginRight: "10px",
          justifySelf: "right",
          marginTop: "3.5px",
          marginBottom: "3.5px",
        }}
      >
        <div
          style={{
            maxWidth: "85%",
            border: "1px solid 	#E8E8E8",
            padding: "4px",
            borderRadius: "5px",
          }}
        >
          test Lorem i
        </div>
      </div>
    </div>
  );
};

export default Messages;
