import { Avatar } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditIcon from "@mui/icons-material/Edit";
const Profile = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{paddingLeft:'15px'}}>
      <div
        style={{
          padding: "10px",
          paddingRight:'20px',
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop:'10px'
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 100, height: 100 }} />
          <div>
            <div
              style={{ fontWeight: "700", fontSize: "25px", padding: "10px" }}
            >
              Name Surname
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  marginTop: -18,
                  marginLeft: "12px",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#585858",
                }}
              >
                follower 23
              </div>
              <div
                style={{
                  marginTop: -18,
                  marginLeft: "10px",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#585858",
                }}
              >
                flowing 10
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "flex",
              flexDirection: "row",
              borderRadius: "5px",
              padding: "5px",
              border: "1px solid rgb(187, 191, 197)",
              backgroundColor: "#E8E8E8",
            }}
          >
            <div style={{ height: "12px", width: "12px", marginRight: "5px" }}>
              {" "}
              <EditIcon fontSize="inherit" />
            </div>
            <button
              style={{
                border: "none",
                backgroundColor: "#E8E8E8",
                fontWeight: "500",
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
        <div style={{ fontWeight: "500", fontSize: "20px", }}>Education</div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            // {...register("email")}
            // className={`form-control ${errors.email ? "is-invalid" : ""}`}
            style={{
              width: "325px",
              borderRadius: "5px",
              padding: "5px",
              border: "1px solid 		#DCDCDC",
              marginTop: "10px",
              paddingLeft: "15px",
            }}
            placeholder="Name"
            type="text"
          />
          <input
            // {...register("email")}
            // className={`form-control ${errors.email ? "is-invalid" : ""}`}
            style={{
              width: "325px",
              borderRadius: "5px",
              padding: "5px",
              border: "1px solid 		#DCDCDC",
              marginTop: "10px",
              paddingLeft: "15px",
            }}
            placeholder="University"
            type="text"
          />
          <input
            // {...register("email")}
            // className={`form-control ${errors.email ? "is-invalid" : ""}`}
            style={{
              width: "325px",
              borderRadius: "5px",
              padding: "5px",
              border: "1px solid #DCDCDC",
              marginTop: "10px",
              paddingLeft: "15px",
              marginBottom:'13px'
            }}
            placeholder="College"
            type="text"
          />
          <div
            style={{
              fontWeight: "500",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            About me
          </div>
          <div style={{ maxWidth: "600px" }}>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              style={{ minHeight: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
