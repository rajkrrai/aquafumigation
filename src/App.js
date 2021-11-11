import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/dumb/Navbar";
import Homepage from "./components/dumb/Homepage";
import "./App.css";
import Footer from "./components/dumb/Footer";
import Ispmcountries from "./components/dumb/Ispmcountries";
import Faq from "./components/dumb/Faq";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/aquafumigation" element={<Homepage />} />

            <Route path="/ispm-countries" element={<Ispmcountries />} />
            <Route path="/faqs" element={<Faq />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
