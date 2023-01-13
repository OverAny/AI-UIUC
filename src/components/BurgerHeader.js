import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../images/logo2.png";
import "./Header.css";
import { slide as Menu } from 'react-burger-menu'
import Sidebar from '../components/Sidebar';

class Header extends Component {

    render() {
        return (
        <div className="Header-main">
            <Link to="/">
                <div className="Header-logodiv">
                    <img src={logo} className="Header-logo" alt="logo" />
                </div>
            </Link>

            <Sidebar />

        </div>
     )}
    
}

export default Header