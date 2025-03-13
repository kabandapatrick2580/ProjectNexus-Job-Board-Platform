import { useLogout } from "@/utils/logout";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
                <Image src="/images/dreamjob_logo.svg" alt="DreamJob Logo" width={50} height={50} />
                <h1 className="">DreamJob</h1>
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
                <Link href="/auth/login" className="white-button">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
