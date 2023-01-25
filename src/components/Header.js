import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../images/logo2.png";
import "./Header.css";

class Header extends Component {

    render() {
        return (
        <div className="Header-main">
            <Link to="/">
                <div className="Header-logodiv">
                    <img src={logo} className="Header-logo" alt="logo" />
                </div>
            </Link>

            <div className="Header-right">
                <a 
                    className="Header-about-link"
                    href="https://aiuiuc.substack.com/p/ai-uiuc-rso-information"
                    target="_blank"
                >
                    About
                </a>

                <a 
                    className="Header-team-link"
                    href="https://aiuiuc.substack.com/p/2023-advisors-executive-team"
                    target="_blank"
                >
                    Team
                </a>

                {/* USE WHEN APPLICATIONS ARE CLOSED */}
                {/* <Link
                    className="Header-apply-link"
                    to="/apply">
                    Apply
                </Link> */}
                <a
                    className="Header-apply-link"
                    href="https://docs.google.com/forms/d/1LqjQPBAnmPNEVkCbzryONDYSJDnqniYL9gFgQI4xHCQ/closedform"
                    target="_blank"
                    >
                    Apply
                </a>
                <a
                    className="Header-invovled-href"
                    href="https://linktr.ee/aiatuiuc/"
                    target="_blank"
                >
                Links
                </a>
                <a className="Header-contact-a" href="mailto:team@uiuc.ai?subject=Subject&body=Body%20goes%20here">
                    Contact
                </a>
            </div>
        </div>
     )}
    
}

export default Header