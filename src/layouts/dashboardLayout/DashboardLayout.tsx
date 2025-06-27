import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = () => {
    return (
        <div className='container'>
            <div className="dashboard-layout">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
