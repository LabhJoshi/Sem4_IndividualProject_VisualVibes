import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Images from "./Images";
import Footer from './Footer';

function Home(){
    const username=localStorage.getItem('username');
    return(
        <>
        <Navbar user={username}/>
        <Card/>
        <div className="grid" style={{marginTop:'90px'}}>
            <Images/>
        </div>
        <Footer/>
    </>
    );
}
export default Home;