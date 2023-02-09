import React, { useState, createContext, FC } from "react";
interface IAuthContext {
  token: string;
  isLoggedIn: boolean;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthContext = createContext<IAuthContext | null>(null)

export const AuthContextProvider: FC<any> = ({ children }): any => {
  const [token, setToken] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn}}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
