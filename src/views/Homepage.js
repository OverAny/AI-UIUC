import "./../App.css";
import "./Homepage.css";
import logo from "./../images/logo2.png";
import background from "./../images/backgroundLongTwo.png";
import { Link } from "react-router-dom";
import CoolForm from "../components/Join.js";

const url =
  "https://uiuc.us10.list-manage.com/subscribe/post?u=50dafeb09b4fb2ae36474db4c&amp;id=761087a979&amp;f_id=004630e2f0";

function Homepage() {
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

            <Link
              className="HP-about-link"
              to="/about"
            >
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
        <div className="App-maindiv" style={{ paddingBottom: 100 }}>
          {/* style={{width: 1000, fontSize: 80, paddingBottom: 0, 
            fontFamily: "Sansation-Light", 
            fontWeight: 100, 
            letterSpacing: 3,
            display: "inline-block"}} */}
          <p className="App-title">
            Artificial Intelligence <br />
            is Coming to Illinois
          </p>

          <div className="HP-newsletter-discord">
            <CoolForm />

            <a href= "https://discord.gg/5tS2rPCHpX" target="_blank">
                  <button className="HP-discord-button">Join Community</button>
            </a>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Homepage;
