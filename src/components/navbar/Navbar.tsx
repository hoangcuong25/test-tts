import "./Navbar.css";
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../apis/Auth.apis";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logoutApi();
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
            alert('Logout failed');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="logo" />
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <li>About</li>
                    <li>Help</li>
                    <li>Features</li>
                    <li>Signup</li>
                </ul>
            </div>

            {
                localStorage.getItem('accessToken') ? (
                    <div className="navbar-auth-buttons">
                        <button className="navbar-button" onClick={() => navigate('/profile')}>
                            <span>Profile</span>
                        </button>
                        <button className="navbar-button" onClick={handleLogout}>
                            <span>Logout</span>
                        </button>
                    </div>
                ) : (
                    <button className="navbar-button" onClick={() => navigate('/signin')}>
                        <span>Sign In</span>
                    </button>
                )
            }
        </nav>
    );
};

export default Navbar;
