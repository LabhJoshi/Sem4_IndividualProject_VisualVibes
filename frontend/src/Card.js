import React from "react";
import vid from './Images/BGvideo.mp4';
// import './Card.css';
import './Card.css';

function Card() {
   const card_data = [
      {
         id: 1,
         src: "https://cdn.pixabay.com/photo/2024/04/09/22/28/trees-8686902_960_720.jpg",
         card_description: 'The Great Path',
         card_title: 'Nature'
      }, {
         id: 2,
         src: "https://cdn.pixabay.com/photo/2017/05/20/20/22/clouds-2329680_960_720.jpg",
         card_description: 'Greatest Horizon',
         card_title: 'Sky'
      }, {
         id: 3,
         src: "https://cdn.pixabay.com/photo/2021/08/02/16/08/peacock-6517183_960_720.jpg",
         card_description: 'Path of Great Adventure',
         card_title: 'Wildlife'
      }, {
         id: 4,
         src: "https://cdn.pixabay.com/photo/2022/08/22/07/35/city-7403001_960_720.jpg",
         card_description: 'Full of Lights',
         card_title: 'City'
      }, {
         id: 5,
         src: "https://cdn.pixabay.com/photo/2023/05/31/09/57/building-8030986_960_720.jpg",
         card_description: 'Life of Gray',
         card_title: 'Black and White'
      }, {
         id: 6,
         src: "https://cdn.pixabay.com/photo/2013/10/09/02/26/waterfall-192984_960_720.jpg",
         card_description: 'Go with the Flow',
         card_title: 'Waterfalls'
      }
   ];
   return (
      <div>
         <div class="video-container">
            <video src={vid} loop autoPlay muted playsInLine></video>
         </div>
         <div class="container">
            <h1 className="cards-heading">Top-tier Shoots You Won't Want to Miss!</h1>
            <div class="card__container">
               {
                  card_data.map((data) => (
                     <article className="card__article">
                        <img src={data.src} alt="image"
                           class="card__img" />
                        <div class="card__data">
                           <span class="card__description">{data.card_title}</span>
                           <h2 class="card__title">{data.card_description}</h2>
                           <a href={`/images?title=${data.card_title}`} class="card__button">View</a>
                        </div>
                     </article>
                  ))
               }
            </div>
         </div>
      </div>
   );
}

export default Card;