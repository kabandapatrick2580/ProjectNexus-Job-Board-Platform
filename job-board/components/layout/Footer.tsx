import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 My Job Portal. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#privacy" className="footer-link">Privacy Policy</a>
                    <a href="#terms" className="footer-link">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
