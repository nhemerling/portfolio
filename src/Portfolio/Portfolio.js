import React from 'react';
import nicoPortfolio from '../images/nicoBeardGlasses.jpg';
import ConsiderateHomePage from '../images/ConsiderateHomePage.png';
import BurntToastLandingPage from '../images/BurntToastLandingPage.png';

export default function Portfolio(props) {
    return(
        <section id="portfolio" className="wrapper">
            <h2>Portfolio</h2>
            <div className="group">
                <div className="item">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={ConsiderateHomePage} alt="Considerate App Home Page" className="rounded" />
                    </a>
                    <h3>Considerate</h3>
                    <p>Considerate helps you keep track of the things your friends like and of the occasions when you'd like to give them the perfect gift.</p>
                    <p>I used React.js and CSS on the front-end, and Node.js, Express, and PostgreSQL on the back-end.</p>
                    <p>Check out the app <a href="https://considerate-app.vercel.app" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    <p>And the GitHub repo <a href="https://github.com/nhemerling/considerate-client" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
                <div className="item">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={BurntToastLandingPage} alt="Burnt Toast App LAnding Page" className="rounded" />
                    </a>
                    <h3>Burnt Toast</h3>
                    <p>Burnt Toast helps users barter services with each other instead of trading currency.</p>
                    <p>We help them provide and seek services, and get connected.</p>
                    <p>We used React.js and CSS on the front-end, and Node.js, Express, and PostgreSQL on the back-end.</p>
                    <p>Check the app <a href="https://burnt-toast-app.vercel.app" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    <p>And the GitHub repo <a href="https://github.com/thinkful-ei-quail/burnt-toast-client" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
                <div className="item">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={nicoPortfolio} alt="Nicholas Hemerling with a bear and glasses" className="rounded" />
                    </a>
                    <h3>Secret Cybersecurity Project</h3>
                    <p>The less said about this project, the better. If you are NASA, FBI, CIA, or Elon Musk, please stop bothering me.</p>
                    <p>I started this project to help my mom with her emails. I created it utilizing the power of the Oxford Comma, and PHP.</p>
                    <p>Check out the app <a href="/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
            </div>
        </section>
    );
}