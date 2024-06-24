import { Link, NavLink, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

import { IoEye as ShowPassword, IoEyeOff as HidePassword  } from "react-icons/io5";

export default function(){

    const { isLoggedIn } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [showPassword, setShowPassword] = useState(false);
    
    return(
        <section>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>
                        Email
                        <input type="text" name="email" id="email"/>
                    </label>
                </div>

                <div className="mb-3">
                    <label>
                        Password
                        <div className="relative bg-rose-100 w-min">
                            <input className="pr-10" type={showPassword? "text" : "password" } name="password" id="password"/>
                            <div className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer" onClick={() => setShowPassword(curr => !curr)}>
                                {showPassword === false? <ShowPassword/> : <HidePassword/>}
                            </div>
                        </div>
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>

            <div>
                <Link to={"/register"}>Register here!</Link>
            </div>
        </section>
    )

}