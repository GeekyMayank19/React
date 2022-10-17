import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Authorization() {
  return (
    <div className="auth-container" >
      <Routes>
        <Route path={`register`} element={<Register />} />
        <Route path={`login`} element={<Login />} />
        {/* <Route path={`${path}/register`} component={RegisterUser} />
        <Route path={`${path}/reset-password`} component={ForgotPassword} />
        <Route path={`${path}/verify`} component={VerifyEmail} />
        <Redirect path="/" to={`${path}/login`} /> */}
      </Routes>
    </div>
  );
}

export default Authorization;
