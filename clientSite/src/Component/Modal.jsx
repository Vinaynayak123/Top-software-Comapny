// Modal.js

import React from 'react';
import "../assets/css/modal.css"
import image from "../assets/img/enquiry_image.jpg"

const Modal = ({ onClose, children }) => {
    return (
        
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modalmaincotainer">
                   
                    <div className='modalContent'>
                        {children}
                    </div>
                    <div className='modalBackgroundImg'>
                    <img src={image} alt="" srcset="" />
                        <button className="modal-close" onClick={onClose}>
                            &times;
                        </button>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Modal;
