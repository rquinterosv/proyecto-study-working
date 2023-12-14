import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Blog from '../src/pages/Blog';


import Menu from './components/Menu';
import Footer from './components/Footer';
import ConfirmationMessage from './components/ConfirmationMessage'; 


const App = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);


  return (
    <Router>
      <div>
        <Menu /> {/* Render the Menu component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact setFormSubmitted={setFormSubmitted} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/confirmation" element={<ConfirmationMessage show={formSubmitted} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
