import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu right width={ "100%" }>
        <a 
        style={{marginBottom: "5px"}}
        className="menu-item"
        href="https://aiuiuc.substack.com/p/ai-uiuc-rso-information"
        target="_blank">
            About
        </a>
        <a 
        style={{marginBottom: "8px"}}
        className="menu-item" 
        href='/apply'
        >
            Apply
        </a>
        <a 
        className="menu-item" 
        href="https://aiuiuc.substack.com/p/2023-advisors-executive-team"
        target="_blank">
            Team
        </a>
        <a 
        style={{marginBottom: "6px"}}
        className="menu-item"
        href="https://linktr.ee/aiatuiuc/"
        target="_blank">
            Links
        </a>
        <a 
        className="menu-item" 
        href="mailto:team@uiuc.ai?subject=Subject&body=Body%20goes%20here">
            Contact
        </a>
    </Menu>
  );
};