import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'; // Import a CSS file for layout styling

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
