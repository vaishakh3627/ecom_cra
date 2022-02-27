import React, { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState({
    type: "admin",
    token: null,
    isLoading: true,
  });

  const updateUser = (token, type) =>
    setUser({
      type: type,
      token: token,
      isLoading: false,
    });

  const tokenDummy =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjE1MWRmOWVhODA2MzQ2OGIwMTBjNzRjIiwiaWF0IjoxNjQ1ODgzNTIxLCJleHAiOjE2NDg0NzU1MjF9.9Z2XDb-lmLWfq2Jza-er7x5Ludvsueoa7SFmeYFFe64";

  useEffect(() => {
    localStorage.setItem("ecom-user-key", JSON.stringify(tokenDummy));
    let token = JSON.parse(localStorage.getItem("ecom-user-key"));
    if (token !== user.token) updateUser(token, "admin");
    else updateUser(null);
  }, []);

  const signin = (token, cb) => {
    updateUser(token, "admin");
    localStorage.setItem("ecom-user-key", JSON.stringify(token));
    cb();
  };

  const signout = () => {
    updateUser(null);
    localStorage.removeItem("ecom-user-key");
  };

  const authContextValue = {
    user,
    signin,
    signout,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
