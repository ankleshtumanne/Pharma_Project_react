import React, { createContext} from "react";
import { useState } from "react";
export const AuthContext=createContext()

export function AuthContextProvider({ children }) {
    const [isAuth, setisAuth] = React.useState(false);
    // 2.A
      return (
      <AuthContext.Provider value={{ isAuth,setisAuth }}>
        {children}
      </AuthContext.Provider>
    );
  }
