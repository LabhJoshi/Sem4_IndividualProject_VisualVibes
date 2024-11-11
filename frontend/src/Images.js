import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Images.css';
import axios from "axios";
import { AiFillHeart, AiOutlineDownload } from 'react-icons/ai';
import Navbar from "./Navbar";

function Images() {
    const username=localStorage.getItem('username');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('title');
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImagesWithQuery = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/images/get-images-with-query/', { 'query': title });
                setImages(response.data.hits);
                console.log(images);
            } catch (error) {
                console.log(error);
            }
        }

        const fetchImages = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/images/get-images/');
                setImages(response.data.hits);
            } catch (error) {
                console.log(error);
            }
        }

        if (title) {
            fetchImagesWithQuery();
        }
        else {
            fetchImages();
        }
    }, []);

    const handleDownload = async (imageUrl, imageName) => {
        try {
          // Fetch the image as a Blob
          const response = await fetch(imageUrl, {
            mode: 'cors', // Ensure CORS is handled properly
          });
          const blob = await response.blob();
    
          // Create a temporary link element
          const link = document.createElement('a');
          const objectUrl = URL.createObjectURL(blob);
          link.href = objectUrl;
          link.download = imageName || 'download';
          
          // Append to the document and click the link to download
          document.body.appendChild(link);
          link.click();
    
          // Clean up
          document.body.removeChild(link);
          URL.revokeObjectURL(objectUrl);
        } catch (error) {
          console.error("Error downloading the image:", error);
        }
      };

    return (
        <div className="image-body">
            {title ? <div><Navbar user={username}/><h1>Images of {title}</h1></div> : <h1 className="heading">Creative Masterpieces in Action</h1>}
            <div className="img-container">
                {
                    images.map((data) => (
                        <div className="box" key={data.id}>
                            <img src={data.webformatURL} alt={data.tags} />
                            <div className="overlay">
                                {/* <AiFillHeart style={{ color: 'red' }} />{data.views} */}
                                <AiOutlineDownload 
                                    className="download-icon" style={{fontSize:'30px', cursor:'pointer'}}
                                    onClick={() => handleDownload(data.webformatURL, `image_${data.id}`)} 
                                />
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Images;