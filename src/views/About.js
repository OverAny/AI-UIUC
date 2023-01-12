import "./../App.css";
import "./Homepage.css";
import "./About.css";
import background from "./../images/backgroundLongTwo.png";
import logo from "./../images/logo2.png";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="App">
            <header
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="App-header"
            >

                <div className="App-headerbar">
                    <Link to="/">
                        <div className="App-logodiv">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </Link>

                <div className="HP-header-right">
                    <Link className="HP-about-link">
                        About
                    </Link>
                    <a
                        className="HP-apply-link"
                        href="https://google.com"
                        target="_blank"
                    >
                        Apply
                    </a>
                    <a
                        className="HP-invovled-href"
                        href="https://linktr.ee/aiatuiuc/"
                        target="_blank"
                    >
                    Links
                    </a>
                    <a className="HP-contact-a" href="mailto:team@uiuc.ai?subject=Subject&body=Body%20goes%20here">
                        Contact
                    </a>
                </div>
            </div>

            </header>
            
        </div>
    );

}

export default About;