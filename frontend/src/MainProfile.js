import React from "react";
import './MainProfile.css';
import profile from './Images/profile.jpg';
import cover from './Images/Cover.jpg';
import wedding from './Images/Wedding.jpg';
import pre_wed from './Images/Pre_wed.jpg';
import festival from './Images/Festival.jpg';
import baby from "./Images/Baby.jpg";
import baby_s from "./Images/Baby_shower.jpg";
import model from "./Images/Model.jpg";
import Navbar from "./Navbar";

function MainProfile() {

    const username=localStorage.getItem('username');
    const data=[{
        id:'1',
        title:'Wedding',
        src:wedding,
        description:'Ready to capture the magic of your big day? Contact us now!!!'
    },{
        id:'2',
        title:'Pre Wedding',
        src:pre_wed,
        description:'Turn your love story into a dreamy fairytale with us!!!'
    },{
        id:'3',
        title:'Festival',
        src:festival,
        description:'Celebrate the vibrance and joy of your favorite festivals with us!!!'
    },{
        id:'4',
        title:'Baby Photoshoot',
        src:baby,
        description:"Celebrate the wonder of your little one's first moments!!!"
    },{
        id:'5',
        title:'Baby Shower',
        src:baby_s,
        description:'Make your baby shower unforgettable. Let us capture the joy!!!'
    },{
        id:'6',
        title:'Model Photoshoot',
        src:model,
        description:'Ready to steal the spotlight? Let us create stunning, fashion-forward shots!!!'
    },
    {
        id:'7',
        title:'Model Photoshoot',
        src:model,
        description:'Ready to steal the spotlight? Let us create stunning, fashion-forward shots!!!'
    }];

    function handleClick(occasion){
        if(username){
        window.location.href=`/form?occasion=${occasion}`;
        }
        else{
            alert("You have to sign up first!!!");
            window.location.href='/login';
        }
    }
    return (
        <>
        <Navbar user={username}/>
            <body>
                <div class="profile-container">
                    <div class="cover-photo">
                        <img src={cover} alt="Cover Photo" />
                    </div>
                    <div class="profile-details">
                        <div class="profile-picture">
                            <img src={profile} alt="Profile Picture" />
                        </div>
                        <div class="user-info">
                            <h2>Labh Joshi</h2>
                        </div>
                    </div>
                    <div className='about-me'>
                        <p>Visual vibes - Capturing Life's Most Precious Moments</p>
                        <p>As a passionate and professional photographer, I specialize in creating timeless memories through my lens. With expertise across diverse photography categories, I offer personalized photoshoots for a wide range of events including weddings, pre-weddings, baby showers, festivals, and more.</p>
                        <p>Whether it's capturing the joy of a wedding, the magic of a pre-wedding shoot, or the intimate moments of a baby shower, I aim to preserve the essence of your special day in every shot. My portfolio reflects a commitment to creativity, attention to detail, and a love for storytelling through stunning visuals.</p>
                        <p>Let me help you tell your story, frame by frame</p>
                    </div>
                    <div className='contact-details'>
                        <p>Call on :- <a className="links" href='#'>+91 7600874618</a><br/>Email on:- <a className="links" href="#">labhjoshi25@gmail.com</a></p>
                    </div>
                    <br/>
                </div>

                <h1 className="center-text">Special Moments with Us</h1>
                <div className='p-wrapper'>
                    {data.map((val)=>(
                        <div className='single-card'>
                        <div className='front'>
                            <img src={val.src}></img>
                            <div className="image-text">{val.title}</div>
                        </div>
                        <div className='back'>
                            <div className='back-content'>
                                <h2>{val.description}</h2>
                                <h3>Click on the buttom to submit the form</h3>
                                <button onClick={()=>handleClick(val.title)}>Form</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </body>
        </>
    )
}
export default MainProfile;