import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import ScrollToTop from './components/ScrollToTop';
import OptimizedHome from './components/OptimizedHome';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Intake from './pages/Intake';
import Insurance from './pages/Insurance';
import './App.css';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Topbar />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<OptimizedHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/intake" element={<Intake />} />
            <Route path="/insurance" element={<Insurance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
