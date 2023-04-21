import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Content from "./components/content";
import Home from "./components/home";
import { Navigation } from "./components/navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <Router>
      <Navigation />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Content />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
