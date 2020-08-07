import React from 'react';
import nicoPortfolio from '../images/nicoBeardGlasses.jpg';

export default function Portfolio(props) {
    return(
        <section id="portfolio" className="wrapper">
            <h2>Portfolio</h2>
            <div className="group">
                <div className="item">
                    <img src={nicoPortfolio} alt="Nicholas Hemerling with a bear and glasses" className="rounded" />
                    <h3>Smell Good App for the Bad Smelling</h3>
                    <p>Do you have trouble smelling good? Would you like to be better at smelling good?</p>
                    <p>I designed this app to help you smell good. I used my smell good skills to make it.</p>
                    <p>Check it out <a href="/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
                <div className="item">
                    <img src={nicoPortfolio} alt="Nicholas Hemerling with a bear and glasses" className="rounded" />
                    <h3>Website for the Governor of the Universe</h3>
                    <p>Got a call one day. I was asked to make a website. It took me a long time but I'm really pleased with how it turned out. The Governor loves it too.</p>
                    <p>I built this site to fix the universe for The Governor. I used JS, HTML, and CSS to build it.</p>
                    <p>Check it out <a href="/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
                <div className="item">
                    <img src={nicoPortfolio} alt="Nicholas Hemerling with a bear and glasses" className="rounded" />
                    <h3>Secret Cybersecurity Project</h3>
                    <p>The less said about this project, the better. If you are NASA, FBI, CIA, or Elon Musk, please stop bothering me.</p>
                    <p>I started this project to help my mom with her emails. I created it utilizing the power of the Oxford Comma, and PHP.</p>
                    <p>Check it out <a href="/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
            </div>
        </section>
    );
}