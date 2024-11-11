import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './TrialOne.css';

function TrialOne() {
    const [images, setImages] = useState([]);
    const KEY = '46106111-0692140a2b57277894494a5aa';
    const query = 'space'

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo`);
                setImages(response.data.hits);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchImages();
    }, []);

    function handleLike(){
        alert("Liked!!!");
    }
    function handleDownload(){
        alert("Downloaded!!!");
    }


    return (
        <>
        {images.map(post => (
          <div className="box" key={post.id}>
            <img src={post.webformatURL} alt={post.id} />
            <div className="overlay">
              <div className="username"><a href={`/artist-profile/${post.user}`}>{post.user}</a></div>
            </div>
          </div>
        ))}
        </>
    );
}

export default TrialOne;