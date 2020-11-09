import React from 'react';
import nicoHome from '../images/nicoAtMontSaintMichel.jpg';
import './Home.css';

export default function Home(props) {
    return(
        <section id="home" className="wrapper">
            <div className="group">
                <div className="item">
                    <img src={nicoHome} alt="Nicholas Hemerling at Mont Saint Michel in France" className="rounded" />
                </div>
                <div className="item item-double">
                    <p className="intro">Hey! I'm Nicholas Hemerling.</p>
                    <p>I'm a software developer studying at Thinkful, and am based in Lafayette, California.
                        I graduated with a BA from Middlebury College and
                        have also spent two years training at French theater school École Philippe Gaulier.</p>
                </div>
            </div>
        </section>
    );
}