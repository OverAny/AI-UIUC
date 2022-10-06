import React, { Component } from "react";
import { render } from "react-dom";

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
        <div
            style={{
            background: "#efefef",
            borderRadius: 2,
            padding: 10,
            display: "inline-block"
            }}
        >
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
            style={{ fontSize: "2em", padding: 5 }}
            ref={node => (name = node)}
            type="text"
            placeholder="Your name"
            />
            <br />
            <input
            style={{ fontSize: "2em", padding: 5 }}
            ref={node => (email = node)}
            type="email"
            placeholder="Your email"
            />
            <br />
            <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
            Submit
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