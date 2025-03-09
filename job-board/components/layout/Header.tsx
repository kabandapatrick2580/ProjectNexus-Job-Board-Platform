import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="header-title">My Job Portal</h1>
                <nav className="header-nav">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#jobs" className="nav-link">Jobs</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
