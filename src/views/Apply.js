import "./../App.css";
import "./Homepage.css";
import "./About.css";
import background from "./../images/backgroundLongTwo.png";
import { Link } from "react-router-dom";
import Header from "../components/Header.js";

function Apply() {
    return (
        <div className="App">
            <body
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="App-header"
            >

                <Header/>


            </body>
            
        </div>
    );

}

export default Apply;