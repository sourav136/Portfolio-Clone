import React from 'react';
import "./Contact.css";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import Working from '../../assets/Images/Working.svg';
import ContactBG from '../../assets/Images/contactglobe.svg';
import ContactSpiral from '../../assets/Images/contactspiral.svg';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="container contact-container">
                    <div className="contact-content-holder row">
                        <div className="col-12 col-lg-6 contact-col">
                            <div className="contact-info">
                                <h4 className='contact-h4'>Get in touch</h4>
                                <p className='contact-p'>I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
                                <div className="infos-container">
                                    <div className="info-container d-flex align-item-center">
                                        <div className="info-icon-container">
                                            <IoCall className='info-icon' />
                                            <div className="info-bg"></div>
                                        </div>
                                        <p className='info-p'>1-514-456-2753</p>
                                    </div>
                                    <div className="info-container d-flex align-item-center mt-4">
                                        <div className="info-icon-container">
                                            <IoMail  className='info-icon' />
                                            <div className="info-bg"></div>
                                        </div>
                                        <p className='info-p'>Sou12@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 contact-col">
                            <div className="contact-message">
                                <h4 className='contact-h4'>Send me a message</h4>
                                <form action="https://formsubmit.co/souravbarua789bd@gmail.com" method="POST">
                                    <input className='contact-input' type="text" name="name" placeholder="Name" required/>
                                    <input className='contact-input' type="email" name="email" placeholder="Email Address" required/>
                                    <input className='contact-input' type="text" name="subject" placeholder="Subject" required/>
                                    <textarea className='contact-textarea' name="message" placeholder="Your message" required></textarea>
                                    <button className='submit-button' type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                        <img className='working-image' src={Working} alt="" />
                    </div>
                    <img className='contact-bg' src={ContactBG} alt="" />
                    <img className='contact-spiral' src={ContactSpiral} alt="" />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;