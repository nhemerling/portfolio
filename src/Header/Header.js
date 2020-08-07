import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Header.css';

export default function Header(props) {
    return(
        <>
            <Link to='/'>
                <h1>Nicholas Hemerling</h1>
            </ Link>
            <Nav />
        </>
    );
}