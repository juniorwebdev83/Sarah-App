import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar'; // Import NavBar component
import Home from './components/Home';
import About from './components/About';
import WhoIsSarah from './components/WhoIsSarah';
import Contact from './components/Contact'; // Import Contact component

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/whoissarah" element={<WhoIsSarah />} />
          <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
