import React from 'react';
import './Footer.css';
import logo1 from './Images/Logo.png';;

function Footer(){
    return(
        <>
            <footer className='footer'>
                <div className='footer-col'>
                    <img src={logo1} className='logo1-img'></img>
                </div>
        <div class="footer-col">
            <h4 className='footer-heading'>products</h4>
            <ul className='footer-list'>
                <li className='list-item'><a href="#">teams</a></li>
                <li className='list-item'><a href="#">advertising</a></li>
                <li className='list-item'><a href="#">colabs</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4 className='footer-heading'>Work with</h4>
            <ul className='footer-list'>
                <li className='list-item'><a href="#">Pinterest</a></li>
                <li className='list-item'><a href="#">Unsplash</a></li>
                <li className='list-item'><a href="#">Dupe</a></li>
                <li className='list-item'><a href="#">Pixabay</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4 className='footer-heading'>company</h4>
            <ul className='footer-list'>
                <li className='list-item'><a href="#">about</a></li>
                <li className='list-item'><a href="#">legal</a></li>
                <li className='list-item'><a href="#">contact us</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4 className='footer-heading'>follow us</h4>
            <div class="links">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer