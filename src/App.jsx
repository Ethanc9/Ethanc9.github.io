import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar'; 
import About from './components/about/about';
import './styles.css';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}