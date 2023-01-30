import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div
        className="public-menu home-icon"
        style={{
          padding: "8px",
          fontSize: "13px",
          marginLeft: "10px",
          borderRadius: "1px solid black",
          background: location.pathname === "/profile" ? "#E3E6E8" : "",
          marginTop: "2px",
        }}
        onClick={() => navigate("/profile")}
      >
        Profile
      </div>
      {/* <div
        className="public-menu home-icon"
        style={{
          padding: "8px",
          fontSize: "13px",
          marginLeft: "10px",
          marginTop: "1px",
        }}
      >
        My Posts
      </div> */}
      <div
        className="public-menu home-icon"
        style={{
          padding: "8px",
          fontSize: "13px",
          marginLeft: "10px",
          marginTop: "2px",
          background: location.pathname === "/addpost" ? "#E3E6E8" : "",
        }}
        onClick={() => navigate("/addpost")}
      >
        Post
      </div>
    </div>
  );
};

export default ProfileMenu;
