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
                <Link 
                className="Header-about-link"
                to="/about">
                    About
                </Link>
                
                <Link
                    className="Header-apply-link"
                    to="/apply">
                    Apply
                </Link>
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