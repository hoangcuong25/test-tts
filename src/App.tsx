import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import './index.css'


const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App