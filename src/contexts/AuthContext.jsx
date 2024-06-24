import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const handleLogin = () => setIsLoggedIn(true);

    const handleLogout = () => setIsLoggedIn(false);

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

export{
    AuthProvider,
}