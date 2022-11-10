import React, { useState } from "react";
import ReactQuill from "react-quill";
const Addpost = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ padding: "15px" }}>
      <h4 style={{ fontWeight: "700" }}>Add Post</h4>
      <div style={{ fontSize: "18px", fontWeight: "600" }}>Title</div>
      <input
        // {...register("email")}
        // className={`form-control ${errors.email ? "is-invalid" : ""}`}
        style={{
          width: "325px",
          borderRadius: "5px",
          padding: "5px",
          border: "1px solid 		#DCDCDC",
          marginTop: "5px",
          paddingLeft: "15px",
          fontWeight: "600",
        }}
        placeholder="Post Title"
        type="text"
      />
      <div style={{ fontSize: "18px", fontWeight: "600", marginTop: "10px" }}>
        Body
      </div>
      <input
        // {...register("email")}
        // className={`form-control ${errors.email ? "is-invalid" : ""}`}
        style={{
          width: "325px",
          borderRadius: "5px",
          padding: "5px",
          border: "1px solid 		#DCDCDC",
          marginTop: "5px",
          paddingLeft: "15px",
          fontWeight: "600",
        }}
        placeholder="Post Title"
        type="file"
      />
      <div style={{ maxWidth: "600px" }}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          style={{ minHeight: "200px" }}
        />
      </div>
      <button
        className="logout"
        style={{
          border: "1px solid #0B94FF",
          borderRadius: "4px",
          color: "white",
          fontSize: "15px",
          paddingTop: "4px",
          paddingBottom: "4px",
          paddingLeft: "10px",
          paddingRight: "10px",
          width: "60px",
          fontWeight: "700px",
        }}
        // onClick={() => navigate("/addpost")}
      >
        Post
      </button>
    </div>
  );
};

export default Addpost;
