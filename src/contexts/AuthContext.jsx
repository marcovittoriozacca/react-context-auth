import { createContext, useContext, useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user, setUser] = useStorage(false, "user");

    const handleLogin = (data) => {
        setIsLoggedIn(true)
        setUser(data);
    };

    const handleLoggedInStatus = () => {
        if(user !== false){
            setIsLoggedIn(true)
        }else{
            setIsLoggedIn(false)
        }
    }

    useEffect(()=>{
        handleLoggedInStatus();
    },[isLoggedIn, user])

    const handleLogout = () => {
        setIsLoggedIn(false)
        setUser(false);
    };

    const values = {
        isLoggedIn,
        user,
        handleLogin,
        handleLogout
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext);
}


export{
    AuthProvider,
    useAuth,
}