import React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
// import { getCurrentUser } from "../services/user";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userInfo, setUserInfo] = useState(null);

  const setNewToken = (newToken) => {
    setToken(newToken);
  };

  // const getUserInfo = async () => {
  //   try {
  //     const res = await getCurrentUser();
  //     console.log("getUserInfo: ", res);
  //     if (res) {
  //       setUserInfo(res);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setNewToken,
      userInfo,
    }),
    [token, userInfo]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
