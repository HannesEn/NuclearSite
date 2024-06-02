// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Fusion from './Fusion';
import Fission from './Fission';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Explore Nuclear Energy</h1>
          <div className="options">
            <Link to="/fusion" className="option" id="fusion">
              <h2>Nuclear Fusion</h2>
              <p>Learn about the process that powers the sun, stars and humanity's dreams.</p>
              <button>Explore Fusion</button>
            </Link>
            <Link to="/fission" className="option" id="fission">
              <h2>Nuclear Fission</h2>
              <p>Discover the technology behind nuclear reactors.</p>
              <button>Explore Fission</button>
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/fusion" element={<Fusion />} />
          <Route path="/fission" element={<Fission />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
