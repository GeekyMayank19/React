import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./LeftMenu.css";
import PublicMenu from "./PublicMenu";
const LeftMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  return (
    <div
      style={{
        width: "13.5%",
        justifyContent: "flex-end",
        // padding: 10,
        flexDirection: "row",
        // display:'flex',
      }}
    >
      {/* <div style={{ border: "1px solic black", width: "50px" }}>asdf</div> */}
      <div
        style={{
          minWidth: "64.5%",
          justifySelf: "end",
          position: "sticky",
          top: "80px",
          // height:'100%'
        }}
      >
        <div
          className="home-icon"
          style={{
            padding: "8px",
            fontSize: "14px",
            fontWeight: "600",
            backgroundColor:
              location.pathname === "/home" ? "#E3E6E8" : "white",
          }}
        >
          Home
        </div>
        <div
          className="home-icon"
          style={{
            padding: "8px",
            fontSize: "14px",
            fontWeight: "600",
            background: isActive ? "#E3E6E8" : "white",
            marginTop: "2px",
          }}
          onClick={() => setIsActive(!isActive)}
        >
          Public
        </div>
        {isActive && <PublicMenu />}
      </div>
    </div>
  );
};

export default LeftMenu;
