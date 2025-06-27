import "./Sidebar.css"
import logo from '../../assets/logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={logo} alt="" />

            <div className="sidebar-links">
                <a href="#">Posts</a>
                <a href="#">Logout</a>
            </div>
        </div>
    );
};

export default Sidebar;
