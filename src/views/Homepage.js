import "./../App.css";
import "./Homepage.css";
import background from "./../images/backgroundLongTwo.png";
import CoolForm from "../components/Join.js";
import Header from "../components/Header.js";
import BurgHeader from "../components/BurgerHeader";
import { useState, useEffect } from 'react';

const url =
  "https://uiuc.us10.list-manage.com/subscribe/post?u=50dafeb09b4fb2ae36474db4c&amp;id=761087a979&amp;f_id=004630e2f0";


function Homepage() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  if (isMobile) {

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
          
          <BurgHeader/>

          <div className="App-maindiv" style={{ paddingBottom: 100 }}>
            {/* style={{width: 1000, fontSize: 80, paddingBottom: 0, 
              fontFamily: "Sansation-Light", 
              fontWeight: 100, 
              letterSpacing: 3,
              display: "inline-block"}} */}
              <div className="HP-title">
                {/* Artificial Intelligence <br />
                is Coming to Illinois */}
                "AI is not the next big thing, <br />
                it is the only thing."
              </div>

            <div className="HP-comment">
                {/* Artificial Intelligence <br />
                is Coming to Illinois */}
                Get Involved
            </div>

            <div className="HP-newsletter-discord">
              <CoolForm />

              <a href= "https://discord.gg/5tS2rPCHpX" target="_blank">
                    <button className="HP-discord-button">Community</button>
              </a>
            </div>

          </div>
        </body>
      </div>
    );

  } else {
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

          <div className="App-maindiv" style={{ paddingBottom: 100 }}>
            {/* style={{width: 1000, fontSize: 80, paddingBottom: 0, 
              fontFamily: "Sansation-Light", 
              fontWeight: 100, 
              letterSpacing: 3,
              display: "inline-block"}} */}
              <div className="HP-title">
                {/* Artificial Intelligence <br />
                is Coming to Illinois */}
                "AI is not the next big thing, <br />
                it is the only thing."
              </div>

            <div className="HP-comment">
                {/* Artificial Intelligence <br />
                is Coming to Illinois */}
                Get Involved
            </div>

            <div className="HP-newsletter-discord">
              <CoolForm />

              <a href= "https://discord.gg/5tS2rPCHpX" target="_blank">
                    <button className="HP-discord-button">Community</button>
              </a>
            </div>

          </div>
        </body>
      </div>
    );
  }
}

export default Homepage;
