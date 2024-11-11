import React, { useState } from "react";
import './Form.css';
import { useLocation, useNavigate } from "react-router-dom";
import bg_wedding from './Images/BG_Wedding.jpg';
import bg_baby from './Images/BG_Baby.jpg';
import bg_babyShower from './Images/BG_BabyShower.jpg';
import bg_prewedding from './Images/BG_PreWedding.jpg';
import bg_festival from './Images/BG_Festival.jpg';
import bg_model from './Images/BG_Model.jpg';
import Navbar from "./Navbar";
import axios, { AxiosError } from 'axios';

function Form() {
    const [fullname, setFullName] = useState('');
    const [number, setNumber] = useState(0);
    const [email, setEmail] = useState('');
    const [add, setAdd] = useState('');
    const [date, setDate] = useState(new Date());
    const [days, setDays] = useState(0);

    const username = localStorage.getItem('username');
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const occasion = query.get('occasion');
    var bg;

    if (occasion === 'Wedding') {
        bg = bg_wedding;
    } else if (occasion === 'Pre Wedding') {
        bg = bg_prewedding;
    } else if (occasion === 'Festival') {
        bg = bg_festival;
    } else if (occasion === 'Baby Photoshoot') {
        bg = bg_baby;
    } else if (occasion === 'Baby Shower') {
        bg = bg_babyShower;
    } else if (occasion === 'Model Photoshoot') {
        bg = bg_model;
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const saveData = async () => {
            const userData = {
                'name': fullname,
                'number': number,
                'email': email,
                'address': add,
                'date': date,
                'days': days,
                'occasion': occasion
            }
            await axios.post('http://127.0.0.1:8000/images/store-form-data/', userData).
                then((res) => { console.log(res) }).catch((AxiosError) => { console.log("This is god damn error") });
            alert("Details submitted successfully, Our team will contact you in shortly...!!!");
            navigate('/');
        }

        try {
            const response = await axios.get('http://127.0.0.1:8000/images/get-date/');
            const bookedDates = response.data.list_of_dates;
    
            if (bookedDates.length === 0) {
                saveData();
                return;
            }
    
            // Check if the selected date lies in the booked dates
            let flag = false;
            for (let i = 0; i < bookedDates.length; i++) {
                if (date === bookedDates[i]) {
                    flag = true;
                    break;
                }
            }
    
            if (flag) {
                alert("Sorry, We are already busy on that day..!!!");
            } else {
                saveData();
            }
    
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <body className="form-body" style={{
                backgroundImage: `url(${bg})`, // Set the imported image as background
            }}>
                <form class="booking-form">
                    <h2>Book a Photoshoot for {occasion}</h2>
                    <label className="label" for="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" onChange={(e) => { setFullName(e.target.value) }} required />
                    <br></br>
                    <label className="label" for="contact">Contact Number</label>
                    <input type="tel" id="contact" name="contact" placeholder="Enter your contact number" onChange={(e) => { setNumber(e.target.value) }} required />
                    <br></br>
                    <label className="label" for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value) }} required />
                    <br></br>
                    <label className="label" for="address">Address</label>
                    <textarea id="address" name="address" placeholder="Enter your address" rows="3" onChange={(e) => { setAdd(e.target.value) }} required></textarea>
                    <br></br>
                    <label className="label" for="date">Date of Event</label>
                    <input type="date" id="date" name="date" onChange={(e) => { setDate(e.target.value) }} required />
                    <br></br>
                    <label className="label" for="days">Number of Days</label>
                    <input type="number" id="days" name="days" placeholder="Enter number of days" min="1" onChange={(e) => { setDays(e.target.value) }} required />
                    <br></br>
                    <button type="submit" onClick={handleClick}>Submit</button>
                </form>
            </body>
        </>
    );
}
export default Form;