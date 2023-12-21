import React from 'react'
import img from '../assets/img/img.png'


export default function Blog() {
    return (
        <>
            <div className='tool-main'>
                <div className="tool-main-container">
                    <div class="card single-card" style={{ width: "18rem" }}>
                        <img src={img} class="card-img-top" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <hr />
                            <p class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Content Writing AI Tools</mark></p>
                            <h4 class="card-text" >Best AI Tool for Content writing...</h4>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div class="card single-card" style={{ width: "18rem" }}>
                        <img src={img} class="card-img-top" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <hr />
                            <p class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Image Editing Tools</mark></p>
                            <h4 class="card-text">Best AI Tool for Image Editing...</h4>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div class="card single-card" style={{ width: "18rem" }}>
                        <img src={img} class="card-img-top" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <hr />
                            <p class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Video Editing Tools</mark></p>
                            <h4 class="card-text">Best AI Tools for Video Editing...</h4>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
