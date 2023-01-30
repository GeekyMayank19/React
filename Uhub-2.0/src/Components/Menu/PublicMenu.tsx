import React from "react";

const PublicMenu = () => {
  return (
    <div>
      <div
        className="public-menu home-icon"
        style={{
          padding: "8px",
          fontSize: "13px",
          marginLeft: "10px",
          borderRadius: "1px solid black",
          marginTop: "2px",
        }}
      >
        Notes
      </div>
      <div
        className="public-menu home-icon"
        style={{ padding: "8px", fontSize: "13px", marginLeft: "10px" }}
      >
        Sample Paper
      </div>
      <div
        className="public-menu home-icon"
        style={{ padding: "8px", fontSize: "13px", marginLeft: "10px" }}
      >
        Ebooks
      </div>
    </div>
  );
};

export default PublicMenu;
