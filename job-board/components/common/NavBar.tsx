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
        <nav className="header">
            <div className="logo">
                <Image src="/images/dreamjob_logo.svg" alt="Logo" width={50} height={50} />
                <p className="logo-name">DreamJob</p>
            </div>
            <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/jobs/all_jobs">Jobs</Link>
            </div>
            <div>
                {token && refreshToken ? (
                <button onClick={logout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
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
