import React from 'react';
import './Contact.scss'

function Contact(props) {
    return (
        <div className="section-component contact" id="contact">
            <div className="container contact__container">
                <div className="about__title title">
                    <span className="title__number">04.</span>
                    <span className="title__text">What's Next?</span>
                </div>
                <h3 className="contact__title">Get In Touch</h3>
                <p className="contact__subtitle">Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <a className="contact__button button__animation" href="mailto:tuanson.dang1404@gmail.com">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Say Hello
                </a>
            </div>
        </div>
    );
}

export default Contact;