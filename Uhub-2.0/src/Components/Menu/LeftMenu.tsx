import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./LeftMenu.css";
import ProfileMenu from "./ProfileMenu";
import PublicMenu from "./PublicMenu";
const LeftMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div
      style={{
        // border: "1px solid black",
        // width: "11.5%",
        width: "140px",
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
            backgroundColor: location.pathname === "/home" ? "#E3E6E8" : "",
          }}
          onClick={() => navigate("/home")}
        >
          Home
        </div>
        <div
          className="home-icon"
          style={{
            padding: "8px",
            fontSize: "14px",
            fontWeight: "600",
            background: location.pathname === "/public" ? "#E3E6E8" : "white",
            marginTop: "2px",
          }}
        >
          Public
        </div>

        <PublicMenu />

        {authContext?.isLoggedIn && (
          <div>
            <div
              className="home-icon"
              style={{
                padding: "8px",
                fontSize: "14px",
                fontWeight: "600",
                background:
                  location.pathname === "/profile" ||
                  location.pathname === "/addpost"
                    ? "#E3E6E8"
                    : "",
                marginTop: "2px",
              }}
              onClick={() => {
                if (
                  location.pathname !== "/profile" &&
                  location.pathname !== "/addpost"
                ) {
                  setIsActive(!isActive);
                }
              }}
            >
              User
            </div>
            {isActive && <ProfileMenu />}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftMenu;
