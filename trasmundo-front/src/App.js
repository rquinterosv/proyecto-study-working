import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Blog from '../src/pages/Blog';

import Menu from './components/Menu'; // Import your Menu component


const App = () => {
  return (
    <Router>
      <div>
        <Menu /> {/* Render the Menu component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
