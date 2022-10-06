import './App.css';
import logo from "./images/logo2.png";
import background from "./images/backgroundLong.png";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://uiuc.us10.list-manage.com/subscribe/post?u=50dafeb09b4fb2ae36474db4c&amp;id=761087a979&amp;f_id=004630e2f0";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

function App() {
  return (
    <div className="App">
      <header style={{backgroundImage: `url(${background})` , backgroundSize: "cover", backgroundPosition: "center" }}className="App-header">
        <div className='App-headerbar'>
            <div className='App-logodiv'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
          <div className="App-maindiv" style={{paddingBottom: 100}}>
          {/* style={{width: 1000, fontSize: 80, paddingBottom: 0, 
            fontFamily: "Sansation-Light", 
            fontWeight: 100, 
            letterSpacing: 3,
            display: "inline-block"}} */}
          <p className="App-title">
          Artificial Intelligence <br/>
          is Coming to Illinois
          </p>


          <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <div className="App-MailchimpStyle">
              <SimpleForm onSubmitted={formData => subscribe(formData)} />
              {/* {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
              {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
              {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>} */}
            </div>
          )}
          />

        </div>
      </header>
    </div>
  );
}

export default App;
