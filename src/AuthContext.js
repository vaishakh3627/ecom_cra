import React, { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState({
    type: "user",
    token: null,
    isLoading: true,
  });

  const toggleUserType = (type) =>
    setUser(previousState => ({
      ...previousState,
      type: type
    }))

  const updateUser = (token, type) =>
    setUser({
      type: type,
      token: token,
      isLoading: false,
    });

  const tokenDummy =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIxYmJjZWZhODA2MzQ2OGIwM2IzNmI3IiwiaWF0IjoxNjQ1OTg1MTQyLCJleHAiOjE2NDg1NzcxNDJ9.SI9pU6kJs9SvWKzDllZqaoQFXd9eG7eVGbCT7UfaV-g";

  useEffect(() => {
    localStorage.setItem("ecom-user-key", JSON.stringify(tokenDummy));
    let token = JSON.parse(localStorage.getItem("ecom-user-key"));
    if (token !== user.token) updateUser(token, "user");
    else updateUser(null);
  }, []);

  const signin = (token, cb) => {
    updateUser(token, "user");
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
    toggleUserType
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
