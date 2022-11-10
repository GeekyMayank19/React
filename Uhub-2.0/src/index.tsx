import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Authorization from "./Pages/AuthorizationPage/Authorization";
import Container from "./Components/Container";
import { AuthContextProvider } from "./Context/AuthContext";
import Profile from "./Pages/AuthorizationPage/Profile";
import Posts from "./Components/Posts/Posts";
import Addpost from "./Pages/Addpost";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="auth/*" element={<Authorization />} />
            <Route path="home" element={<Posts />} />
            <Route path="profile" element={<Profile />} />
            <Route path="addpost" element={<Addpost />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
