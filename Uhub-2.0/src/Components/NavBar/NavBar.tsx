import React, { useContext } from "react";
import SchoolIcon from "@mui/icons-material/School";
import "./nev.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import HelpIcon from "@mui/icons-material/Help";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(authContext?.isLoggedIn);
  return (
    <div
      style={{
        height: "50px",
        border: "1px solid #BBBFC5",
        backgroundColor: "#F8F8F8",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        boxShadow: "0 1px 5px #BBBFC5",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifySelf: "flex-start",
          width: "60%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
            marginLeft: "10%",
          }}
        >
          <div
            className="hoverIcons"
            style={{
              padding: "11px",
            }}
          >
            <MenuIcon />
          </div>

          <div
            className="hoverIcons"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontWeight: "700",
              fontSize: "30",
              padding: "7px",
              cursor: "pointer",
            }}
            onClick={() => navigate("home")}
          >
            <SchoolIcon fontSize="large" />
            <div style={{ paddingLeft: "10px" }}>Education</div>
          </div>
        </div>

        <div
          style={{
            padding: "3px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            border: "1px solid #BBBFC5",
            borderRadius: "5px",
            marginLeft: "10px",
            width: "50%",
          }}
        >
          <div style={{ color: "#838C95" }}>
            <SearchIcon />
          </div>
          <input
            className="searchInput"
            type="text"
            style={{ border: "0px none", fontSize: "14px", width: "95%" }}
            placeholder="Search"
          />
        </div>
      </div>
      {authContext?.isLoggedIn ? (
        <div
          style={{
            marginRight: "10%",
            display: "flex",
            flexDirection: "row",
            cursor: "pointer",
          }}
        >
          <div className="hoverIcons" style={{ padding: "11px" }}>
            <AccountCircleIcon />
          </div>
          <div className="hoverIcons" style={{ padding: "11px" }}>
            <ChatIcon />
          </div>
          <div className="hoverIcons" style={{ padding: "11px" }}>
            <PeopleIcon />
          </div>
          <div className="hoverIcons" style={{ padding: "11px" }}>
            <HelpIcon />
          </div>
        </div>
      ) : (
        <div style={{ marginRight: "10%" }}>
          <button
            className="login"
            style={{
              border: "1px solid #7AA6C6",
              marginRight: "5px",
              // backgroundColor: "#E1ECF4",
              color: "#38729D",
              borderRadius: "4px",
              fontSize: "12px",
              paddingTop: "4px",
              paddingBottom: "4px",
              paddingLeft: "10px",
              paddingRight: "10px",
              fontWeight: "500",
            }}
            onClick={() => {
              navigate("auth/login");
            }}
          >
            Log in
          </button>
          <button
            className="logout"
            style={{
              border: "1px solid #0B94FF",
              // backgroundColor: "#0B94FF",
              borderRadius: "4px",
              color: "white",
              fontSize: "12px",
              paddingTop: "4px",
              paddingBottom: "4px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
            onClick={() => {
              navigate("auth/register");
            }}
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};
// #2596be
export default NavBar;
