import React from 'react';
import './Home.css';
import svg1 from '../../assets/Images/SVG-1.svg';
import svg2 from '../../assets/Images/SVG-2.svg';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Works from '../Works/Works';


const Home = () => {

    return (
        <div>
            <div className="home" id='home'>
                <div className="container home-container">
                    <img className='svg-1' src={svg1} alt="Ruby image" />
                    <div className="home-text">
                        <h2 className='home-h2'>Creative UI Designer Sourasith Phomhome Based in Montreal</h2>
                        <div className="home-buttons">
                            <Link to="/contact" className='hire-button'>Hire me</Link>
                            <a 
                            href="https://drive.google.com/uc?export=download&id=1jXlUejp6iv-4KvhG2qmnsWb06EKE5Y76"
                            className='cv-button'>
                                Download CV
                            </a>
                        </div>
                    </div>
                    <img className='svg-2' src={svg2} alt="planet image" />
                </div>
            </div>
            <About/>
            <Works/>
            <Contact/>
        </div>
    );
};

export default Home;