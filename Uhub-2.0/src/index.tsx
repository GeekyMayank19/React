import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Authorization from "./Pages/AuthorizationPage/Authorization";
import Container from "./Components/Container";
import { AuthContextProvider } from "./Context/AuthContext";
import Posts from "./Components/Posts/Posts";
import Addpost from "./Pages/Addpost";
import Test from "./Pages/Test";
import BasicModal from "./Pages/BasicModal";
import Profile from "./Pages/Profile";
import { TestContextProvider } from "./Context/TestContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <TestContextProvider>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="auth/*" element={<Authorization />} />
            <Route path="home" element={<Posts />} />
            <Route path="profile" element={<Profile />} />
            <Route path="addpost" element={<Addpost />} />
            <Route path="test" element={<BasicModal />} />
          </Route>
        </Routes>
      </AuthContextProvider>
      </TestContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
