import React from 'react';
import './About.css'
import Confident from '../../assets/Images/confident.png';
import AboutCircle from '../../assets/Images/AboutCircle.png'
import Ruby from '../../assets/Images/Ruby.png'
const About = () => {
    return (
        <div>
            <div className="about">
                <div className="container about-container">
                    <div className="about-content-holder">
                        <img className='confident-image' src={Confident} alt="" />
                        <div className="about-text">
                            <h3 className='about-h3'>About Me</h3>
                            <p className='about-p'>My name is Sourasith Phomhome. I’m a UI Designer and a instructor based in Montreal. I’m curently working with Design+Code. I’m passionate about creating digital experiences and teaching design. My goal is to help beginners to grow their skills.</p>
                        </div>
                    </div>
                    <div className="about-circle-container">
                        <img className='about-circle' src={AboutCircle} alt="" />
                        <img src={Ruby} className='about-ruby' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;