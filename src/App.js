import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Homepage from "./views/Homepage";
import "./App.css"

export default function App() {
  return (
    <div className="App">
        
        <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage/>} />
                </Routes>
        </Router>
    </div>
  );
}