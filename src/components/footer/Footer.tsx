import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'; // <-- ảnh logo thật
import { FaYoutube, FaInstagram, FaGithub, FaCommentDots } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Column 1: Logo + address */}
                <div className="footer-col logo-col">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo" className="footer-logo-img" />
                        <span className="logo-text">DataWarehouse</span>
                    </div>
                    <p className="address">
                        <strong>Warehouse Society, 234 Bahagia</strong><br />
                        Ave Street PRBW 29281
                    </p>
                    <p className="email">info@warehouse.project</p>
                    <p className="phone">1-232-3434 (Main)</p>
                </div>

                {/* Column 2: About */}
                <div className="footer-col">
                    <h4>About</h4>
                    <ul>
                        <li>Profile</li>
                        <li>Features</li>
                        <li>Careers</li>
                        <li>DW News</li>
                    </ul>
                </div>

                {/* Column 3: Help */}
                <div className="footer-col">
                    <h4>Help</h4>
                    <ul>
                        <li>Support</li>
                        <li>Sign Up</li>
                        <li>Guide</li>
                        <li>Reports</li>
                        <li>Q & A</li>
                    </ul>
                </div>

                {/* Column 4: Social Media */}
                <div className="footer-col">
                    <h4>Social Media</h4>
                    <div className="social-icons">
                        <FaYoutube />
                        <FaInstagram />
                        <FaGithub />
                    </div>
                </div>
            </div>

            {/* Bottom text */}
            <div className="footer-bottom">
                <p>
                    © Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.
                </p>

                {/* Floating chat icon */}
                <div className="chat-icon">
                    <FaCommentDots />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
