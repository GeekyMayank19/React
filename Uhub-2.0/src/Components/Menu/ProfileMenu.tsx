import React from "react";

const ProfileMenu = () => {
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
        onClick={() => {
          console.log("click");
          // setIsActive(true);
          //   setIsSubmenuActive(true);
        }}
      >
        Edit
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
