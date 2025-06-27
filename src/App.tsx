import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import BlankLayout from './layouts/BlankLayout';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';

import HomePage from './pages/HomePage/HomePage';
import SigninPage from './pages/SigninPage/SigninPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const App = () => {
  return (
    <Routes>
      {/* Main layout (trang công khai) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* Blank layout (đăng nhập, đăng ký...) */}
      <Route element={<BlankLayout />}>
        <Route path="/signin" element={<SigninPage />} />
      </Route>

      {/* Dashboard layout (sau khi đăng nhập) */}
      <Route element={<DashboardLayout />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
