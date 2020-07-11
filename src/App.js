import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navber from './Navber';
function App() {
  return (
    <div className="App">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
