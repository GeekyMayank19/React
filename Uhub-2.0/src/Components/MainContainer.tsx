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
