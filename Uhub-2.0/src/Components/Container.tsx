import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Footer from "./Footer/Footer";
import LeftMenu from "./Menu/LeftMenu";
import NavBar from "./NavBar/NavBar";

const Container = () => {
  const authContext = useContext(AuthContext);
  const location = useLocation();

  return (
    <div>
      <NavBar />
      {(location.pathname === "/auth/login" ||
        location.pathname === "/auth/register") && <Outlet />}
      {location.pathname !== "/auth/login" &&
        location.pathname !== "/auth/register" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LeftMenu />
            <div
              style={{
                height: "100%",
                width: "75vw",
                borderLeft: "1px solid #C8C8C8",
                minHeight: `calc(100vh - ${"270px"})`,
              }}
            >
              <Outlet />
            </div>
          </div>
        )}
      <div style={{ position: "relative", bottom: 0, width: "100%" }}>
        {location.pathname !== "/auth/login" &&
          location.pathname !== "/auth/register" && <Footer />}
      </div>
    </div>
  );
};

export default Container;
