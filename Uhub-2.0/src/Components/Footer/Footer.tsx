import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#181818",
        height: "220px",
        color: "white",
        display: "flex",
        flexDirection: "row",
        padding: "35px",
        justifyContent: "space-around",
        // position: "fixed",
        // bottom: 0,
        // width: "100%",
        zIndex: 100,
      }}
    >
      <div
        style={{
          fontWeight: "700",
          fontSize: "30",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SchoolIcon fontSize="large" />
          <div style={{ paddingLeft: "10px" }}>Education</div>
        </div>
        <div>
          <div>
            {" "}
            <div
              style={{
                maxWidth: "200px",
                fontSize: "14px",
                fontWeight: "400",
                marginTop: "10px",
              }}
            >
              Education is the basis of our successful future. Education should
              be free for everyone, because not every person can afford it.
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div style={{ fontSize: "30", fontWeight: "700" }}>PRODUCTS</div>
        <div style={{ fontSize: "14px", fontWeight: "400", marginTop: "10px" }}>
          <div>Teams</div>
          <div>Advertising</div>
          <div>Collectives</div>
          <div>Talent</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div style={{ fontSize: "30", fontWeight: "700" }}>Company</div>
        <div style={{ fontSize: "14px", fontWeight: "400", marginTop: "10px" }}>
          <div>About</div>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
          <div>Cookie Settings</div>
          <div>Cookie Policy</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontWeight: "700",
          fontSize: "30",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          Contact Us
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            cursor: "pointer",
          }}
        >
          <TwitterIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
          <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
