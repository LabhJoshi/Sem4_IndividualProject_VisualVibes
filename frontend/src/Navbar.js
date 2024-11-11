import { React, useEffect, useState } from "react";
import logo from './Images/Logo.png';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

function Navbar({ user }) {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const body = document.body;
        let lastScroll = 0;

        const handleScroll = () => {
            const current = window.scrollY;
            if (current <= 0) {
                body.classList.remove("scroll-up")
            }
            if (current > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up")
                body.classList.add("scroll-down")
            }
            if (current < lastScroll && body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-down")
                body.classList.add("scroll-up")
            }
            lastScroll = current;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    };

    const toggleMenu = () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    };


    return (
        <div className="nav-body">
            <header class="header">
                <div class="inner flex">
                    <a href="/" class="logo"><img src={logo} style={{ height: '100px' }} /></a>
                    <nav>
                        <ul>
                            <li><a href="/" >Home</a></li>
                            <li><a href="/trending" >Trending</a></li>
                            <li><a href="/profile" >Profile</a></li>
                            <li><a href="/about" >About Us</a></li>
                            {(!user) ? (
                                <li><a className="login-button" href="/login">Login</a></li>
                            ) : (
                                <li><a className="login-button" onClick={handleLogout}>Logout</a></li>
                            )}
                            <li>
                                <div className="search"><input className="search-input" type="text" placeholder="Search..." required onChange={(e) => { setQuery(e.target.value) }} />
                                    <a href={`/images?title=${query}`}><ion-icon name="search-outline"></ion-icon></a>
                                </div>
                            </li>
                        </ul>
                        <div class="hamburger" onclick={toggleMenu}>&#9776;</div>
                    </nav>
                </div>
            </header>
        </div>
    );
}
export default Navbar;