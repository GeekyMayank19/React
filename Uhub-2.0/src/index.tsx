import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Authorization from "./Pages/AuthorizationPage/Authorization";
import MainContainer from "./Components/MainContainer";
import Container from "./Components/Container";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="home" element={<MainContainer />} />
          <Route path="auth/*" element={<Authorization />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
