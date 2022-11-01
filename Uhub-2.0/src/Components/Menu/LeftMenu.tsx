import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./LeftMenu.css";
import ProfileMenu from "./ProfileMenu";
import PublicMenu from "./PublicMenu";
const LeftMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSubmenuActive, setIsSubmenuActive] = useState(false);
  const location = useLocation();

  return (
    <div
      style={{
        width: "13.5%",
        justifyContent: "flex-end",
        flexDirection: "row",
      }}
    >
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
            // background: isActive ? "#E3E6E8" : "white",
            marginTop: "2px",
          }}
        >
          Public
        </div>

        <PublicMenu />

        <div
          className="home-icon"
          style={{
            padding: "8px",
            fontSize: "14px",
            fontWeight: "600",
            // background: isActive ? "#E3E6E8" : "white",
            marginTop: "2px",
          }}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Profile
        </div>
        {isActive && <ProfileMenu />}
      </div>
    </div>
  );
};

export default LeftMenu;
