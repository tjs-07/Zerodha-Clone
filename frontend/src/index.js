import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import HomePage from './landing_page/Home/HomePage';
// import Pricing from './landing_page/Pricing/PricingPage';
import Signup from './landing_page/Signup/Signup';
import Support from './landing_page/Support/Support';
import Product from './landing_page/Product/Product'; 
import AboutPage from './landing_page/About/AboutPage';
import PricingPage from './landing_page/Pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/Login/LoginPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<Support />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);

