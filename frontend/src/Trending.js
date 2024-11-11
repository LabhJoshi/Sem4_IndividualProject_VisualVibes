import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react';
import EdiorsChoice from "./EditorsChoice";
import CarouselThree from './CarouselThree';
import Navbar from "./Navbar";

function Trending(){
    return(
        <>
            <Navbar/>
           <EdiorsChoice/>
           {/* <CarouselThree/> */}
        </>
   
    );
}
export default Trending;