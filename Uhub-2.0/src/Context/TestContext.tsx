import React,{createContext, useState} from "react";

type TestContextProviderProps = {
    children: React.ReactNode;
}
type TestContextType = {
    isLogin: boolean,
    setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>
}
export const TextContext = createContext<TestContextType | null>(null);

export const TestContextProvider = ({children}:TestContextProviderProps) =>{
    const [isLogin,setIsLoggedIn] = useState<boolean>(false);
    return <TextContext.Provider value={{isLogin,setIsLoggedIn}}>{children}</TextContext.Provider>
}