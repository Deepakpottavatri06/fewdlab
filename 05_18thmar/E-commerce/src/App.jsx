import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      {/* Navbar (appears on all pages) */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        
       
        <Route path="/partners" element={<Partners />} />
       

      </Routes>

      {/* Footer (appears on all pages) */}
            {/* Footer */}
            <Footer />
    </Router>
  );
}

export default App;