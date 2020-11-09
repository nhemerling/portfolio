import React from 'react';
import './Contact.css';

export default function Contact(props) {
    return(
        <section id="contact" className="wrapper">
            <h2>Contact Nicholas</h2>
            <div className="group">
                <div className="item">
                    <p>Feel free to reach out. I'd love to hear from you.</p>
                    <ul>
                        <li>Check out my <a href="https://linkedin.com/in/nicholas-hemerling-3b5b77b3" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</li>
                        <li>And here's my <a href="https://github.com/nhemerling" target="_blank" rel="noopener noreferrer">GitHub</a>.</li>
                        <li>Or say hello via my Email: <a href="mailto:nicholas.hemerling@gmail.com" target="_blank" rel="noopener noreferrer">nicholas.hemerling@gmail.com</a></li>
                    </ul>
                </div>
                <div className="item item-double">
                    <form action="https://formspree.io/mdowlvep" method="POST">
                        <label htmlFor="user-name">Name:</label>
                        <input id="user-name" type="text" name="name" required/>

                        <label htmlFor="user-email">Email:</label>
                        <input id="user-email" type="email" name="_replyto" required/>

                        <label htmlFor="user-message">Message:</label>
                        <textarea id="user-message" name="message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}