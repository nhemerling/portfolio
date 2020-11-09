import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import './Main.css';

export default function Main(props) {
    return(
        <main>
            <Home />
            <About />
            <Portfolio />
            <Contact />
        </main>
    );
}