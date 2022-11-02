import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Footer from "./Footer/Footer";
import LeftMenu from "./Menu/LeftMenu";
import NavBar from "./NavBar/NavBar";
import PostLeft from "./Posts/PostLeft";
import Posts from "./Posts/Posts";
import PostsRight from "./Posts/PostsRight";

const Container = () => {
  const authContext = useContext(AuthContext);
  const location = useLocation();
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <NavBar />
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", maxWidth: "86%" }}>
            <LeftMenu />
            <Posts />
          </div>
        </div>
        <Footer />
      </div>

      <div style={{ position: "relative", bottom: 0, width: "100%" }}>
        {authContext?.isLoggedIn &&
          location.pathname !== ("/login" || "/register") && <Footer />}
      </div>
    </div>
  );
};

export default Container;
