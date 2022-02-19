import React, { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext()

const AuthProvider = props => {

    const [user, setUser] = useState({
        token: null,
        isLoading: true
    })

    const updateUser = token =>
        setUser({
            token: token,
            isLoading: false
        })

    useEffect(() => {

        let token = JSON.parse(localStorage.getItem("ecom-user-key"))
        if (token !== user.token)
            updateUser(token)
        else
            updateUser(null)
    }, [])

    const signin = (token, cb) => {

        updateUser(token)
        localStorage.setItem("ecom-user-key", JSON.stringify(token))
        cb()
    };

    const signout = () => {

        updateUser(null)
        localStorage.removeItem("ecom-user-key")
    };

    const authContextValue = {
        user,
        signin,
        signout
    };

    return <AuthContext.Provider value={authContextValue} {...props} />
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };