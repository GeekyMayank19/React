import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

const Container = () => {
  const authContext = useContext(AuthContext);
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <NavBar />
      <Outlet />
      <div style={{ position: "relative", bottom: 0, width: "100%" }}>
        {authContext?.isLoggedIn && <Footer />}
      </div>
    </div>
  );
};

export default Container;
