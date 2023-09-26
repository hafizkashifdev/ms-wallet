import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/home/home";
import Offers from "./pages/offers/offers";
import Business from "./pages/business/business";
import Careers from "./pages/careers/careers";
import ContactUs from "./pages/contact-us/contact-us";
import Layout from "./lay-out/lay-out";
import CookiePolicy from "./pages/cookie-policy/cookie-policy";
import DataPolicy from "./pages/data-policy/data-policy";
import PrivacyPolicy from "./pages/Privacy-policy/Privacy-policy";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/business" element={<Business />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cockie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/data-policy" element={<DataPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
