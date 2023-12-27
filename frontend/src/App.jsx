import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <div className='h-screen text-textPrimary bg-background '>
      <Router>
        <div className='flex h-full flex-grow'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
          
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
