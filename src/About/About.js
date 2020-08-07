import React from 'react';
import './About.css';

export default function About(props) {
    return(
        <section id="about" className="wrapper">
            <h2>About Me</h2>
            <div className="group">
                <div className="item">
                    <p>My favorite thing about coding is solving logical problems. 
                        I have always loved the rush of adrenaline I get when trying to solve puzzles. 
                        Coding gives me that rush and I'd love to work on a team with great programmers who feel the same.</p>
                    <p>I also have many years of experience in theater as an actor and comedian, 
                        and love bringing my sense of humor and story-telling to the projects I work on, 
                        as well as the spaces I work in. Reach out if you like to have fun while building 
                        your website!</p>

                    <h3>Services I Provide</h3>
                    <ul>
                        <li>JS, HTML, CSS</li>
                        <li>Beautiful, mobile responsive design</li>
                        <li>Great communication with my clients</li>
                        <li>Finding a sense of humor for your project</li>
                    </ul>

                    <h3>Other Interests</h3>
                    <p>Outside of web development, here's a list of some of my favorite activities.</p>
                    <ul>
                        <li>Making a fool of myself on-stage.</li>
                        <li>Hanging upside-down from a rope.</li>
                        <li>Embarrassing my siblings.</li>
                        <li>Playing dress-up.</li>
                        <li>Skiing (down the mountain and behind the boat).</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}