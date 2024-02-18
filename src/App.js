import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preloader from "./components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import Pages from "./components/pages";
import "./style.css";

const App = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  function handleNavLinkClick() {
    updateLoad(true);
    document.querySelector(".App").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Router>
      <Preloader load={load} />
      <div className={`App ${load ? "no-scroll" : "scroll"}`}>
        <Navbar handleNavLinkClick={handleNavLinkClick} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Pages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
