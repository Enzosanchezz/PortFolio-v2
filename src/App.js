import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar"
import Home from "../src/components/Home/Home"
import Footer from "../src/components/Footer/Footer"
import Projects from "../src/components/Projects/Projects"
import About from "../src/components/About/About"
import "./style.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </Router>

  );
}

export default App;
