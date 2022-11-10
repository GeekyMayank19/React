import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div
        className="profile-menu home-icon"
        style={{
          padding: "8px",
          fontSize: "13px",
          marginLeft: "10px",
          borderRadius: "1px solid black",
          background: location.pathname === "/profile" ? "#E3E6E8" : "white",
        }}
        onClick={() => navigate("/profile")}
      >
        Profile
      </div>
      <div
        className="profile-menu home-icon"
        style={{ padding: "8px", fontSize: "13px", marginLeft: "10px" ,marginTop:"1px"}}
      >
        My Posts
      </div>
      {/* <div
        className="profile-menu home-icon"
        style={{ padding: "8px", fontSize: "13px", marginLeft: "10px" }}
      >
        Ebooks
      </div> */}
    </div>
  );
};

export default ProfileMenu;
