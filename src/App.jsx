import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Consultation from './pages/Consultation'
import Courses from './pages/Courses'
import Blog from './pages/Blog'
import { initializeCursor } from './utils/cursor'

function App() {
  useEffect(() => {
    initializeCursor();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
