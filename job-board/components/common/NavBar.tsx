import { useLogout } from "@/utils/logout";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const logout = useLogout();
    const [token, setToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);

    useEffect(() => {
        setToken(Cookies.get("accessToken") || null);
        setRefreshToken(Cookies.get("refreshToken") || null);
    }
    , []);

    return (
        <nav className="">
            <div className="logo">
                <h1 className="">Job Board</h1>
                <i className="fi fi-rr-briefcase"></i>
            </div>
            <div className="links">
                <Link href="/" className="link">Home</Link>
                <Link href="/jobs/all_jobs" className="link">Jobs</Link>
            </div>
            <div>
                {token && refreshToken ? (
                <button onClick={logout} className="white-button">
                    Logout
                </button>
                ) : (
                <Link href="/auth/login" className="button">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
