import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink
                        exact
                        activeClassName="navbar__link--active"
                        className="navbar__link" 
                        to='/'
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="navbar__link--active"
                        className="navbar__link"
                        to='/about'
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="navbar__link--active"
                        className="navbar__link"
                        to='/portfolio'
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="navbar__link--active"
                        className="navbar__link"
                        to='/contact'
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
// YOURE GOING TO MAKE THESE NAV LINKS AND DO WHAT NAV LINKS DO