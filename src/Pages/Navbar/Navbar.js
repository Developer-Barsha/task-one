import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <h2 id='logo'>OL<span style={{color:'#5BF9FD'}}>C</span>TP</h2>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>My Account</li>
            </ul>
        </nav>
    );
};

export default Navbar;