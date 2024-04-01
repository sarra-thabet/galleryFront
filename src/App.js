import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Home/Home';
import Portfolio from './portfolio/Portfolio';
import AboutMe from './AboutMe/AboutMe';
import Services from './Servicees/Services';

import Contact from './Contact/Contact';
import { AdminRoutes } from './AdminInterface/AdminInterface';

import { AdminLogin } from './AdminLogin/AdminLogin';
import  {SellCreations}  from './SellCreations/SellCreations';
import {CheckOutPage} from './CheckOutPage/CheckOutPage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/AdminInterface/*" element={<AdminRoutes />} />  
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Services" element={<Services />} />
 
          <Route path="/Contact" element={<Contact />} />
          <Route path="/creations" element={<SellCreations />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/checkout/:id" element={<CheckOutPage />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
