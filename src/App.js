import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Offers from "./pages/offers/offers";
import Business from "./pages/business/business";
import Careers from "./pages/careers/careers";
import ContactUs from "./pages/contact-us/contact-us";
import CookiePolicy from "./pages/cookie-policy/cookie-policy";
import DataPolicy from "./pages/data-policy/data-policy";
import PrivacyPolicy from "./pages/Privacy-policy/Privacy-policy";
import PartnerWithUs from "./pages/partner-with-us/partner-with-us";
import DelegateAccount from "./pages/delegate-account/delegate-account";
import AboutUs from "./pages/about-us/about-us";
import SignUp from "./pages/auth/sign-up/sign-up";
import Layout from "./lay-out/lay-out.jsx"
import SignIn from "./pages/auth/sign-in/sign-in";
import Error404 from "./pages/404/Error404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Error404/>} />
      
            
              <Route index element={<Layout><Home /></Layout>} />
              <Route path="/offers" element={<Layout><Offers /></Layout>} />
              <Route path="/business" element={<Layout><Business /></Layout>} />
              <Route path="/careers" element={<Layout><Careers /></Layout>} />
              <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
              <Route path="/cookie-policy" element={<Layout><CookiePolicy /></Layout>} />
              <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
              <Route path="/data-policy" element={<Layout><DataPolicy /></Layout>} />
              <Route path="/partner-with-us" element={<Layout><PartnerWithUs /></Layout>} />
              <Route path="/delegate-account" element={<Layout><DelegateAccount /></Layout>} />
              <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
              
           
         
      </Routes>
    </Router>
  );
}

export default App;
