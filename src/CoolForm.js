import React, { Component, Link } from "react";
import "./CoolForm.css"

// import MailchimpSubscribe from "react-mailchimp-subscribe"


const submit = () => {

}

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
        });

    return (
        <div className="">
        
            <input
                className="CF-input"
                ref={node => (email = node)}
                type="email"
                placeholder="your@example.com"
            />
            <button className="CF-button" onClick={submit}>
                Join
            </button>
            {status === "sending" && <div style={{ fontSize: 20,color: "white" }}>sending...</div>}
            {status === "error" && (
                <div
                    style={{ fontSize: 10, color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ fontSize: 20, color: "white" }}
                    
                >You have joined the mailing list!</div>
            )}


        </div>
    );
};


class CoolForm extends Component {
    render() {
        return (
            <a href= "https://aiuiuc.substack.com/" target="_blank">
                <button className="CF-button" onClick={submit}>Join Newsletter</button>
            </a>
        );
    }
}

export default CoolForm