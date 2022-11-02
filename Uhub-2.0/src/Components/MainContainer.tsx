import React from "react";
import Footer from "./Footer/Footer";
import LeftMenu from "./Menu/LeftMenu";
import Posts from "./Posts/Posts";

const MainContainer = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", maxWidth: "86%" }}>
          <LeftMenu />
          <Posts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainContainer;

{
  /* <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: `calc(100vh - ${"270px"})`,
            border: "1px solid black",
            minWidth: "82%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <LeftMenu />
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                height: "2000px",
              }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div> */
}

{
  /* <div style={{ display: "flex", maxWidth: "86%" }}>
                <LeftMenu />
                <div
                  style={{
                    display: "flex",
                    border: "1px solid black",
                    width: "83%",
                    justifyContent: "center",
                    padding: "10px",
                    flexDirection: "row",
                    borderLeft: "1px solid #C8C8C8",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      width: "70%",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4>All Posts</h4>
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
                      >
                        Post
                      </button>
                    </div>
                    <div style={{ width: "1200px" }}></div>
                    {/* <Post /> 
                  </div>
      
                  <div
                    style={{
                      // border: "1px solid black",
                      width: "30%",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  ></div>
      
                </div>
              </div> 
            */
}
