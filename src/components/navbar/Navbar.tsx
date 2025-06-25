import { FaArrowRight } from 'react-icons/fa';
import "./Navbar.css";
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="logo" />

                <ul className="navbar-links">
                    <li>About</li>
                    <li>Help</li>
                    <li>Features</li>
                    <li>Signup</li>
                </ul>
            </div>

            <button className="navbar-button">
                <span>Request Demo</span>
                <FaArrowRight className="arrow-icon" />
            </button>
        </nav>
    );
};

export default Navbar;
