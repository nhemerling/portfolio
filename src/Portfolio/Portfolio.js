import React from 'react';
import ConsiderateHomePage from '../images/ConsiderateHomePage.png';
import BurntToastLandingPage from '../images/BurntToastLandingPage.png';
import LangTrainLogin from '../images/LangTrainLogin.png';

export default function Portfolio(props) {
    return(
        <section id="portfolio" className="wrapper">
            <h2>Portfolio</h2>
            <div className="group">
                <div className="item">
                    <a href="https://considerate-app.vercel.app" target="_blank" rel="noopener noreferrer">
                        <img src={ConsiderateHomePage} alt="Considerate App Home Page" className="rounded" />
                    </a>
                    <h3>Considerate</h3>
                    <p>Considerate helps you keep track of the things your friends like and of the occasions when you'd like to give them the perfect gift.</p>
                    <p>I used React.js and CSS on the front-end, and Node.js, Express, and PostgreSQL on the back-end.</p>
                    <p>Check out the app <a href="https://considerate-app.vercel.app" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    <p>And the GitHub repo <a href="https://github.com/nhemerling/considerate-client" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
                <div className="item">
                    <a href="https://burnt-toast-app.vercel.app" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://lang-train.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src={LangTrainLogin} alt="LangTrain App Login Page" className="rounded" />
                    </a>
                    <h3>LangTrain</h3>
                    <p>Lang Train is an app that uses spaced repetition to teach the user a few words in German.</p>
                    <p>We used React.js and CSS on the front-end, and Node.js, Express, and PostgreSQL on the back-end.</p>
                    <p>Check out the app <a href="https://lang-train.vercel.app/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    <p>And the GitHub repo <a href="https://github.com/thinkful-ei-quail/Spaced-Repetition-App-NicholasH-Jim" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
            </div>
        </section>
    );
}