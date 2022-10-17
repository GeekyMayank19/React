import { Avatar } from "@mui/material";
import "./styles.css";
import React, { FC } from "react";
type Props = {
  onClick: () => void;
};
const UserChatList: FC<Props> = ({ onClick }) => {
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
      className="user-chat"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          marginBottom: "3.5px",
          marginTop: "3.5px",
          border: "1px solid 	#E8E8E8",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            maxWidth: "85%",
            // border: "1px solid 	#E8E8E8",
            padding: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "green"
          }}
          className="chat-user"
          onClick={onClick}
        >
          <Avatar alt="Remy Sharp" sx={{ width: 25, height: 25 }} />
          User Name
        </div>
        <div
          style={{
            maxWidth: "85%",
            // border: "1px solid 	#E8E8E8",
            padding: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" sx={{ width: 25, height: 25 }} />
          User Name
        </div>
        <div
          style={{
            maxWidth: "85%",
            // border: "1px solid 	#E8E8E8",
            padding: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" sx={{ width: 25, height: 25 }} />
          User Name
        </div>
        <div
          style={{
            maxWidth: "85%",
            // border: "1px solid 	#E8E8E8",
            padding: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" sx={{ width: 25, height: 25 }} />
          User Name
        </div>
      </div>
    </div>
  );
};
export default UserChatList;
