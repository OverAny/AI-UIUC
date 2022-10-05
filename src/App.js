import './App.css';
import logo from "./images/1.png";
import background from "./images/Ronus__website_background_for_minimalist_website_portfolio_36e9e5b4-fd4b-4bb3-8e19-562b594d3c0b.png";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://uiuc.us10.list-manage.com/subscribe/post?u=50dafeb09b4fb2ae36474db4c&amp;id=761087a979&amp;f_id=004630e2f0";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

function App() {
  return (
    <div className="App">
      <header style={{backgroundImage: `url(${background})` , backgroundSize: "cover" }}className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{paddingBottom: 100}}>
        <p style={{width: 1000, fontSize: 80, paddingBottom: 0}}>
        Artificial Intelligence is Coming to Illinois
        </p>


        <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div>
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
