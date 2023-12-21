import React, { useState, useEffect } from 'react'
import "../assets/css/cra.css"
import banner1 from "../assets/img/blogBanner1.png"
import banner2 from "../assets/img/blogBanner2.png"
import banner3 from "../assets/img/blog-banner3.jpg"
import smallpic from "../assets/img/My-photo.png"


export default function Crausel() {
    const images = [banner1, banner2, banner3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            if (!isMouseOver) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [isMouseOver]);
    return (



        <div className="animated-carousel"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
        >
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={image} alt={`Slide ${index + 1}`} />
                    <div className="carousel-caption" style={{left:"4%",width:"476px"}}>
                    
                        <p>TEAM BLOGS</p>
                        <h2>A Complete Guide to NFT Marketplace Development.</h2>
                        <p>Developing an app might also sound challenging, and it is not as smooth as it sounds. Every new idea has its problem in implementation…</p>
                        <div className="carouseldiv">
                            <div className="carouselimgname">
                                <img src={smallpic} alt="" />
                                <div className="carouselnamedate">
                                    <h4 className='carouselname'>Name Lname</h4>
                                    <p className='carouseldate'>22 March 2020</p>

                                </div>
                                
                            </div>
                            <div className="carouselbtn">
                                <button className='carouselbtnReadblog'>Read Blog</button>
                            </div>
                        </div>
                        {/* <div className="carouselbtn">
                            <button className='carouselbtnReadblog'>Read Blog</button>
                        </div> */}
                    </div>
                </div>
            ))}
        </div>

    )
}
