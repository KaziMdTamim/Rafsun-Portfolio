import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/LOGO-06.png'
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import Partner from '../Partner/Partner';
import './Home.css';


const Home = () => {
    return (
        <div>
            <div className="top-part">
                <img width='260px' src={img} alt="" />
                    <Navbar></Navbar>
                    <div className="title">
                    <h1>Rafsan - A Creative Designer, Entrepreneur and Storyteller</h1>
                    </div>
                    <About></About>
            </div>
            <div className="journey">
                <h1>Journey</h1>
                <h3 className='liner'></h3>
                <p>
                I always follow a rule in my life and I advise everyone to follow that rule.
                “We should be happy in the most difficult situations of life and have gratitude and confidence in our Creator.”
                    <br />
                    <br />
                I started working on graphic design in 2016, but I took it professionally from November 2020. In the last week of November 2020, I joined the HOTEL CHAIN as a creative designer. From there my journey started. Then walk on the path of dreams. I started working on my own designing farm called GRAFX69. IN SA ALLAH, it'll one day be recognized as the largest advertising and designing farm in the world.
                    <br />
                    <br />
                From a young age, I love to practice literature. "Odrisho shotru" has already finished writing the first thriller story book of my life, which has not been published yet. Several more stories are in the process of being written.
                    <br />
                    <br />
                I'm a storyteller. I always try to tell stories through my every work, be it my designing works or writing or photography.
                </p>
                {/* <Link className="journey-link">Take A Tour Of My Journey</Link> */}
            </div>
            <Partner></Partner>
        </div>
    );
};

export default Home;