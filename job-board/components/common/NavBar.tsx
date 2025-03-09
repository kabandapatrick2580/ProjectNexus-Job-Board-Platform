import { useLogout } from "@/utils/logout";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";


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
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-lg font-bold">Job Board</h1>
        <div>
            {token && refreshToken ? (
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                Logout
            </button>
            ) : (
            <a href="/auth/login" className="hover:underline">Login</a>
            )}
        </div>
        </nav>
    );
};

export default Navbar;
