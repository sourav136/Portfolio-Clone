import React from 'react';
import SideNav from './Components/SideNav/SideNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Works from './Components/Works/Works';
import Nav from './Components/Nav/Nav';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SideNav />
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;