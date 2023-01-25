import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from "react";


import Homepage from "./views/Homepage";
import About from "./views/About";
import Apply from "./views/Apply";
import "./App.css"

export default function App() {
  return (
    <div className="App">
        
        <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage/>} />
                    {/* <Route exact path="about" element={<About/>} /> */}
                    <Route exact path="apply" element={<ApplyRedirect/>} />
                </Routes>
        </Router>
    </div>
  );
}

// function ApplyRedirect() {
//   return (
//     <div>
//       <Link to={{ pathname: "https://docs.google.com/forms/d/1LqjQPBAnmPNEVkCbzryONDYSJDnqniYL9gFgQI4xHCQ/closedform" }} target="_blank"></Link>
//     </div>
//   )
// }

function ApplyRedirect() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://docs.google.com/forms/d/1LqjQPBAnmPNEVkCbzryONDYSJDnqniYL9gFgQI4xHCQ/closedform');
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return <></>;
}