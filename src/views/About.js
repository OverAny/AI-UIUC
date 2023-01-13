import "./../App.css";
import "./Homepage.css";
import "./About.css";
import background from "./../images/backgroundLongTwo.png";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="App">
            <body>
                <div
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="About-0"
                >
                    <Header/>
                    <div className="App-maindiv" style={{ paddingBottom: 100 }}>

                        <div className="About-0-message">
                        About Us<br />
                        {/* Currently Closed. */}
                        </div>
                    </div>
                </div>

                <div className="About-1">

                    
                </div>
            </body>
            
        </div>
    );

}

export default About;