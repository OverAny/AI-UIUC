import "./../App.css";
import "./Homepage.css";
import "./Apply.css";
import background from "./../images/backgroundLongTwo.png";
import { useState, useEffect } from 'react';
import Header from "../components/Header.js";
import BurgHeader from "../components/BurgerHeader";

function Apply() {
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

                        <div className="Apply-message">
                        {/* Artificial Intelligence <br />
                        is Coming to Illinois */}
                        Applications are<br />
                        Currently Closed.
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

                        <div className="Apply-message">
                        {/* Artificial Intelligence <br />
                        is Coming to Illinois */}
                        Applications are<br />
                        Currently Closed.
                        </div>
                    </div>

                </body>
                
            </div>
        );
    }

}

export default Apply;