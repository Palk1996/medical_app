import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Database from './pages/Database';
import Upload from './pages/Upload';

function App() {
  return (
    <div className='h-screen flex text-textPrimary bg-background'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Database" element={<Upload />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
