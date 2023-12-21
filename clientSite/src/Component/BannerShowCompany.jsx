import React, { useState, useEffect } from 'react'
import "../assets/css/cra.css"
import banner1 from "../assets/img/Tca-banner.avif"
import banner2 from "../assets/img/cepta-banner.avif"
import banner3 from "../assets/img/uncodemy-banner1.jpg"
import banner4 from "../assets/img/ess-banner.avif"



export default function Crausel() {
    const images = [banner1, banner2, banner3, banner4];
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
                    style={{height:"113px",margin:"5px 5px 5px 5px"}}
                >
                    <img  src={image} alt={`Slide ${index + 1}`} />
                    
                </div>
            ))}
        </div>

    )
}
