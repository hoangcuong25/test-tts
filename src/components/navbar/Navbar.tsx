import "./Navbar.css";
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

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

            <button className="navbar-button" onClick={() => navigate('/signin')}>
                <span>Sign In</span>
            </button>
        </nav>
    );
};

export default Navbar;
