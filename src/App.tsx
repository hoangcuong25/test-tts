import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import BlankLayout from './layouts/BlankLayout';
import HomePage from './pages/HomePage/HomePage';
import SigninPage from './pages/SigninPage/SigninPage';


const App = () => {
  return (
    <Routes>
      {/* Routes dùng MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* Routes dùng BlankLayout */}
      <Route element={<BlankLayout />}>
        <Route path="/signin" element={<SigninPage />} />
      </Route>
    </Routes>
  );
};

export default App;
