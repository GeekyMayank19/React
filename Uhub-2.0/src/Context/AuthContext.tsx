import React, { useState, createContext, FC } from "react";
import { IUserRegisterData } from "../Interface";
import url from "../utility/urls";
type Response = {
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: string;
  refreshToken: string;
  expiresIn: string;
};
interface IAuthContext {
  token: string;
  isLoggedIn: boolean;
  register: (data: IUserRegisterData) => void;
  login: () => void;
}
const AuthContext = React.createContext<IAuthContext>({
  token: "",
  isLoggedIn: false,
  register: () => {},
  login: () => {
    console.log("login");
  },
});

export const AuthContextProvider: FC<any> = ({ children }): any => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleRegister = (data: IUserRegisterData) => {
    debugger; // eslint-disable-line
    console.log("url", url.register);
    fetch(url.register, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application",
      },
    }).then((res: any) => {
      if (res.ok) {
        // setToken(res.idToken)
        console.log(res.idToken);
        return res;
      } else {
        return res.json().then((data: any) => {
          console.log(data);
        });
      }
    });
  };
  const handleLogin = () => {
    console.log("login handler ");
  };

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    register: () => handleRegister,
    login: handleLogin,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
