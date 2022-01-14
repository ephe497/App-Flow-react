import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import './App.css';
import './about.css'
import Header from "./Layout/header";
import Home from "./home"
import About from "./about"
import Features from './features'
import Contact from './contact'
import { useEffect } from "react/cjs/react.development";
function App() {
  const [darktheme, setdarkTheme] = useState("")

  return (
    <Router>
      {/* <div className={darktheme}> */}
      <Routes>
        <Route exact path="/about" caseSensitive={false} element={<About />} />
        <Route exact path="/features" caseSensitive={false} element={<Features />} />
        <Route exact path="/contact" caseSensitive={false} element={<Contact />} />
        <Route exact path="/" caseSensitive={false} element={<Home />} />
      </Routes>
      {/* </div > */}
    </Router>
  );
}

export default App;
