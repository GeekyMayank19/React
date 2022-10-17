import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import MainContainer from "./Components/MainContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
