import React, { useState, useEffect } from "react";
import './CarouselThree.css';
import { useLocation } from "react-router-dom";
import axios from "axios";

function CarouselThree() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('title');
    const [images, setImages] = useState([]);
   

    useEffect(() => {
        
        const initSlider = () => {
            const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button")
            const imageList = document.querySelector(".slider-wrapper .image-list")
            const sliderScrollbar = document.querySelector("#carousel3 .slider-scrollbar");
            const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
            
            scrollbarThumb.addEventListener("mousedown", (e) => {
                const startX = e.clientX;
                var thumbPosition = scrollbarThumb.offsetLeft;
                
                const handleMouseMove = (e) => {
                    const deltaX = e.clientX - startX;
                    const newthumbPosition = thumbPosition + deltaX;
                    const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
                    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newthumbPosition))
                    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
                    scrollbarThumb.style.left = `${boundedPosition}px`;
                    imageList.scrollLeft = scrollPosition;
                }
                
                const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp)
                }
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp)
            })
            
            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "prev-slide" ? -1 : 1;
                    console.log(direction)
                    const scrollAmount = imageList.clientWidth * direction;
                    console.log(scrollAmount)
                    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
                })
            })
            
            const updateScrollThumbPosition = () => {
                const scrollPosition = imageList.scrollLeft;
                const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
                scrollbarThumb.style.left = `${thumbPosition}px`;
            }
            
            imageList.addEventListener("scroll", () => {
                updateScrollThumbPosition();
            })
        }
        initSlider();


        const fetchImagesWithQuery = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/images/get-images-by-downloads/', { 'query': title });
                setImages(response.data.hits);
            } catch (error) {
                console.log(error);
            }
        }
        
        fetchImagesWithQuery();
        // console.log('Images State:', images);
    }, [title]);
    
    return (
        <div className="body-3">
            <div id="carousel3">
                <div className="slider-wrapper">
                    <div>
                        <button id="prev-slide" className="slide-button"><ion-icon name="arrow-back-outline"></ion-icon></button>
                    </div>
                    {/* <div className="image-list">
                        <img src={images[0].webformatURL} className="image-item" />
                        <img src={images[1].webformatURL} className="image-item" />
                        <img src={images[2].webformatURL} className="image-item" />
                        <img src={images[3].webformatURL} className="image-item" />
                        <img src={images[4].webformatURL} className="image-item" />
                        <img src={images[5].webformatURL} className="image-item" />
                        <img src={images[6].webformatURL} className="image-item" />
                    </div> */}
                    {images.map((data)=>(
                        <div className="image-list">
                            <img src={data.webformatURL} className="image-item" alt={data.tags} />
                        </div>
                    ))}
                    <div>
                        <button id="next-slide" className="slide-button"><ion-icon name="arrow-forward-outline"></ion-icon></button>
                    </div>
                </div>
                <div className="slider-scrollbar">
                    <div className="scrollbar-track">
                        <div className="scrollbar-thumb">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarouselThree;