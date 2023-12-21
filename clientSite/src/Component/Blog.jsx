import React from 'react'
import banner1 from "../assets/img/blogBanner1.png"
import banner2 from "../assets/img/blogBanner2.png"
import banner3 from "../assets/img/blog-banner3.jpg"
import photo from "../assets/img/My-photo.png"
import { Link } from "react-router-dom";
import "../assets/css/blog.css"
import img from '../assets/img/img.png'
import wd from '../assets/img/WD.jpg'
import ds from '../assets/img/Data_s.jpg'
import fs from '../assets/img/FSc.jpg'
import dm from '../assets/img/DM.jpg'
import Crausel from './Crausel'



export default function Blog() {
    return (
        <>
            {/* Banner Section Start  */}

        
           <Crausel/>
          

           

            {/* Banner Section End  */}



            <div className="latestBlog">
                <h4 >LATEST BLOG</h4>
                <h3>The Best Approach to Latest blogs of Mobile App, Web Design & Development, Startups Businesses for Every Personality Type.</h3>
            </div>



            {/* Card Section  */}

            <div className='blog-main'>
                <div className="blog-main-container">
                    <div class="single-card blog-vertical-card-width" >
                        <img src={wd} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet.... </h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div class="single-card blog-vertical-card-width" >
                        <img src={ds} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet... </h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div class="single-card blog-vertical-card-width" >
                        <img src={fs} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet.. </h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div class="single-card blog-vertical-card-width" >
                        <img src={dm} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet.. </h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div class="single-card blog-vertical-card-width" >
                        <img src={img} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet.. </h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div class="single-card blog-vertical-card-width" >
                        <img src={img} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet...</h5>

                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* Start up */}

            <div className="horizontalCard">
                <h3>START UP</h3>
                <h4>A Few Quick Startup blogs to Help You Find the Best START UP Business.</h4>
            </div>
            <div className='startup-section'>

                <div className="main-Card">
                    <div className="imgCard">
                        <img src={ds} alt="" />
                    </div>
                    <div className='contentCardBlog'>
                        <h3><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Start UP</mark></h3>
                        <h5>Lorem ipsum dolor sit.</h5>
                       
                        <div className="card-img">
                            <img src={photo} />
                            <h6>Vinay Nayak</h6>
                            <Link to="/ViewBlog">Read Blog</Link>
                        </div>
                    </div>
                </div>

                <div className="main-Card">
                    <div className="imgCard">
                        <img src={dm} alt="" />
                    </div>
                    <div className='contentCardBlog'>
                        <h3><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Start UP</mark></h3>
                        <h5>Lorem ipsum dolor sit.</h5>
                       
                        <div className="card-img">
                            <img src={photo} />
                            <h6>Vinay Nayak</h6>
                            <Link to="/ViewBlog">Read Blog</Link>
                        </div>
                    </div>
                </div>

                <div className="main-Card">
                    <div className="imgCard">
                        <img src={wd} alt="" />
                    </div>
                    <div className='contentCardBlog'>
                        <h3><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Start UP</mark></h3>
                        <h5>Lorem ipsum dolor sit.</h5>
                        
                        <div className="card-img">
                            <img src={photo} />
                            <h6>Vinay Nayak</h6>
                            <Link to="/ViewBlog">Read Blog</Link>
                        </div>
                    </div>
                </div>

                <div className="main-Card">
                    <div className="imgCard">
                        <img src={fs} alt="" />
                    </div>
                    <div className='contentCardBlog'>
                        <h3><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Start UP</mark></h3>
                        <h5>Lorem ipsum dolor sit.</h5>
                       
                        <div className="card-img">
                            <img src={photo} />
                            <h6>Vinay Nayak</h6>
                            <Link to="/ViewBlog">Read Blog</Link>
                        </div>
                    </div>
                </div>

            </div>


            {/* mobile App section */}
            <div className='mobileApp'>
                <h3>MOBILE APP</h3>
                <h2>Surprising Ways of Mobile App and Mobile app Development Blog Can Affect Your Technologies and Business.</h2>

            </div>

            <div className='blog-main'>
                <div className="blog-main-container">

                    <div class=" single-card blog-vertical-card-width" >
                        <img src={wd} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div class=" single-card blog-vertical-card-width" >
                        <img src={ds} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div class=" single-card blog-vertical-card-width">
                        <img src={fs} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div class=" single-card blog-vertical-card-width">
                        <img src={dm} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div class=" single-card blog-vertical-card-width" >
                        <img src={img} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>

                    <div class=" single-card blog-vertical-card-width" >
                        <img src={img} class="card-img-top-blog" alt="..." />
                        {/* <hr /> */}
                        <div class="card-body">
                            <div className="line"></div>
                            <h5 class="card-title"><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>STARTUP</mark></h5>
                            <h5>Lorem ipsum dolor sit amet...</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div className="card-img">
                                <img src={photo} />
                                <h5>Vinay Nayak</h5>
                                <Link to="/ViewBlog">Read Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="techNews">
                <h4>TECH NEWS</h4>
                <h2>Tech Blogs for Better and Faster Technology..!!</h2>
            </div>


            <div className='startup-section'>

                <div className="main-Card">
                    <div className="imgCard">
                        <img src={ds} alt="" />
                    </div>
                    <div className='contentCardBlog'>
                        <h3><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Start UP</mark></h3>
                        <h5>Lorem ipsum dolor sit.</h5>
                        
                        <div className="card-img">
                            <img src={photo} />
                            <h6>Vinay Nayak</h6>
                            <Link to="/ViewBlog">Read Blog</Link>
                        </div>
                    </div>
                </div>

                <div className="main-Card">
                    <div className="imgCard">
                        <img src={dm} alt="" />
                    </div>
                    <div className='contentCardBlog'>
                        <h3><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Start UP</mark></h3>
                        <h5>Lorem ipsum dolor sit.</h5>
                        
                        <div className="card-img">
                            <img src={photo} />
                            <h6>Vinay Nayak</h6>
                            <Link to="/ViewBlog">Read Blog</Link>
                        </div>
                    </div>
                </div>

                <div className="main-Card">
                    <div className="imgCard">
                        <img src={wd} alt="" />
                    </div>
                    <div className='contentCardBlog'>
                        <h3><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Start UP</mark></h3>
                        <h5>Lorem ipsum dolor sit.</h5>
                        
                        <div className="card-img">
                            <img src={photo} />
                            <h6>Vinay Nayak</h6>
                            <Link to="/ViewBlog">Read Blog</Link>
                        </div>
                    </div>
                </div>

                <div className="main-Card">
                    <div className="imgCard">
                        <img src={fs} alt="" />
                    </div>
                    <div className='contentCardBlog'>
                        <h3><mark style={{ borderRadius: "0px 12px 0px 16px", color: "#214695" }}>Start UP</mark></h3>
                        <h5>Lorem ipsum dolor sit.</h5>
                       
                        <div className="card-img">
                            <img src={photo} />
                            <h6>Vinay Nayak</h6>
                            <Link to="/ViewBlog">Read Blog</Link>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}
