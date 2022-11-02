import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="profile-menu home-icon"
        style={{
          padding: "8px",
          fontSize: "13px",
          marginLeft: "10px",
          borderRadius: "1px solid black",
        }}
        onClick={() => navigate("/profile")}
      >
        Profile
      </div>
      <div
        className="profile-menu home-icon"
        style={{ padding: "8px", fontSize: "13px", marginLeft: "10px" }}
      >
        My Posts
      </div>
      <div
        className="profile-menu home-icon"
        style={{ padding: "8px", fontSize: "13px", marginLeft: "10px" }}
      >
        Ebooks
      </div>
    </div>
  );
};

export default ProfileMenu;
