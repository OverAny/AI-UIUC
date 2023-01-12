import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Homepage from "./views/Homepage";
import About from "./views/About";
import "./App.css"

export default function App() {
  return (
    <div className="App">
        
        <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage/>} />
                    <Route exact path="about" element={<About/>} />
                </Routes>
        </Router>
    </div>
  );
}