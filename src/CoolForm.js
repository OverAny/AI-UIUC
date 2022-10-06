import React, { Component } from "react";
import "./CoolForm.css"

import MailchimpSubscribe from "react-mailchimp-subscribe"


const CustomForm = ({ status, message, onValidated }) => {
        let email, name;
        const submit = () =>
        email &&
        name &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            NAME: name.value
        });
    
        return (
        <div className="">
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
            <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}
            {status === "success" && (
            <div
                style={{ color: "green" }}
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}


            <input
            className="CF-input" 
            ref={node => (email = node)}
            type="email"
            placeholder="your@example.com"
            />
            <button className="CF-button" onClick={submit}>
            Join
            </button>
        </div>
        );
    };


class CoolForm extends Component {
    render() {
        const url = 
        "https://uiuc.us10.list-manage.com/subscribe/post?u=50dafeb09b4fb2ae36474db4c&amp;id=761087a979&amp;f_id=004630e2f0";
        return (
        <div>
            <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
                />
            )}
            />
        </div>
        );
    }
    }
    
export default CoolForm