import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './nav/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './nav/about.jsx'
import Contact from './pages/Contact.jsx'
import LoginForm from './nav/LoginForm.jsx'
import RegisterForm from './nav/RegisterForm.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </main>
    </>
  )
}

export default App
