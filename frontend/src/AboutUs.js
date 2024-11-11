import React from 'react';
import image from './Images/About.jpg'
import Navbar from './Navbar';
import './AboutUs.css';
import Footer from './Footer';

function AboutUs() {
    const username = localStorage.getItem('username');
    return (
        <>
            <Navbar user={username} />
            <div className='aboutus-body'>
                <div className='heading'>
                    <h1>ABOUT US</h1>
                </div>
                <div className='container1'>
                    <section className='about'>
                        <div className='about-image'>
                            <img src={image}></img>
                        </div>
                        <div className='about-content'>
                            <h2> Every Shot Tells a Story </h2>
                            <p>"Welcome to our photography portfolio, where we showcase the artistry and creativity of our team. From weddings to baby showers and every special moment in between, we've captured countless memories for our clients. Explore our collection of work, and if you're looking to create unforgettable memories of your own, you can hire us for your next occasion. Let us tell your story, one frame at a time"</p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AboutUs;