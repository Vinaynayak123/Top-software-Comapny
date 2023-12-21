import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "./DataContext";
import img from "../assets/img/img.png";
import img1 from "../assets/img/bannerimg.jpg"
import fs from "../assets/img/fs.jpg";
import cm from "../assets/img/cm.png";
import "../assets/css/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Banner() {

  const [searchTerm, setSearchTerm] = useState();
  const { setData } = useDataContext();
  const navigate = useNavigate();


  const handleSearch = async () => {
    console.log('search term =', searchTerm)  // we are search from frontEnd 

    if (!searchTerm || searchTerm.trim() === ""){
      // alert("please enter the valid course")
      toast.error("please enter the valid course")

    }
    else{
      let res = await fetch(`http://localhost:8000/courses?q=${searchTerm}`, {
        method: "GET",  // to get the value from the database 
        headers: {
          "Content-Type": "application/json",
        },
      });

      res = await res.json()  // receive the data response 
      localStorage.setItem('filteredData', JSON.stringify(res))




      setData(res);  // Update data in the DataContext

      console.log("Fetched Data:", res); // this console to show the res data 

      

      //alert("suceesfully full redirected") // alert to know this function work properly
      toast.success("suceesfully full redirected")
      navigate("/showCompany")   // redirect to next page 
    }



    

  };





  return (
    <>
      <div className="main-banner">
        <div className="main-container">
          <div className="container-writen">
            <div className="container-writen-heading">
              <h2 style={{ color: "#214695" }}>Transform your business with Top IT Software Company</h2>
            </div>
            <div className="container-writen-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora repellendus enim, excepturi tempore natus suscipit
                veniam voluptatum sunt ullam sed expedita sapiente, minima
                architecto vero velit explicabo et soluta, omnis esse recusandae
                in unde delectus id error. Placeat distinctio ratione architecto
                eaque sint id modi unde. Ducimus perspiciatis ut deserunt.

              </p>
             

            </div>

            <div className="input-btn">
              <input
                class="form-control me-2"
               
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn searchButton" onClick={handleSearch}>Search</button>
            </div>




          </div>
          <div className="container-image">
            <div className="img">
              <img src={img1} />
            </div>
          </div>
        </div>
      </div>

      <div className="box-heading">
        <h3>List of Top Institute in India in 2023 </h3>
      </div>

      <div className="container-box">


        <div className="main-box">
          <div className="box-container">
            <div className="box">
              <div className="box-detail">
                <h3>
                  1.{" "}
                  <a href="#" target="blank">
                    Web Development
                  </a>
                </h3>
                <p style={{ opacity: "0.5" }}>Technology</p>
                <div className="tecnology">
                  <a
                    style={{ cursor: "pointer" }}
                    title="Top Python Development Companies"

                  >
                    Python
                  </a>
                  <a
                    style={{ cursor: "pointer" }}
                    title="Top Java Development Companies"
                    onClick={handleSearch}
                  >
                    Java
                  </a>
                  <p
                    style={{ cursor: "pointer" }}
                    title="Top Mern Development Companies"
                  >
                    Mern
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="Top Mean Development Companies"
                  >
                    Mean
                  </p>




                </div>

                <div className="services-line">
                  <h6 style={{ opacity: "0.5" }}>Location</h6>
                  <div className="location">
                    <div className="tecnology">
                      <p style={{ cursor: "pointer" }}>Noida</p>
                      <p style={{ cursor: "pointer" }}>Delhi</p>
                      <p style={{ cursor: "pointer" }}>Lucknow</p>
                      <p style={{ cursor: "pointer" }}>Kanpur</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-img">
                <img src={fs} alt="" />
               
              </div>
              
            </div>
          </div>
        </div>

        <div className="main-box">
          <div className="box-container">
            <div className="box">
              <div className="box-img">
                <img src={fs} alt="" />
                
              </div>
              <div className="box-detail">
                <h3>
                  2.{" "}
                  <a href="#" target="blank">
                    Data Science
                  </a>
                </h3>
                <p style={{ opacity: "0.5" }}>Technology</p>
                <div className="tecnology">
                  <a
                    style={{ cursor: "pointer" }}
                    title="Top Python Development Companies"
                    href=""
                  >
                    Python
                  </a>
                  <p
                    style={{ cursor: "pointer" }}
                    title="Top R Development Companies"
                  >
                    R
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="Top SQL Development Companies"
                  >
                    SQL
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="Top ApacheHadoop Development Companies"
                  >
                    ApacheHadoop
                  </p>
                </div>

                <div className="services-line">
                  <h6 style={{ opacity: "0.5" }}>Location</h6>
                  <div className="location">
                    <div className="tecnology">
                      <p style={{ cursor: "pointer" }}>Noida</p>
                      <p style={{ cursor: "pointer" }}>Delhi</p>
                      <p style={{ cursor: "pointer" }}>Lucknow</p>
                      <p style={{ cursor: "pointer" }}>Kanpur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-box">
          <div className="box-container">
            <div className="box">
              <div className="box-img">
                <img src={fs} alt="" />
               
              </div>
              <div className="box-detail">
                <h3>
                  3.{" "}
                  <a href="#" target="blank">
                    Digital Marketing
                  </a>
                </h3>
                <p style={{ opacity: "0.5" }}>Technology</p>
                <div className="tecnology">
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Python
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Java
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Mern
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Mean
                  </p>
                </div>

                <div className="services-line">
                  <h6 style={{ opacity: "0.5" }}>Location</h6>
                  <div className="location">
                    <div className="tecnology">
                      <p style={{ cursor: "pointer" }}>Noida</p>
                      <p style={{ cursor: "pointer" }}>Delhi</p>
                      <p style={{ cursor: "pointer" }}>Lucknow</p>
                      <p style={{ cursor: "pointer" }}>Kanpur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-box">
          <div className="box-container">
            <div className="box">
              <div className="box-img">
                <img src={fs} alt="" />
              
              </div>
              <div className="box-detail">
                <h3>
                  4.{" "}
                  <a href="#" target="blank">
                    Software Testing
                  </a>
                </h3>
                <p style={{ opacity: "0.5" }}>Technology</p>
                <div className="tecnology">
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Python
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Java
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Mern
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Mean
                  </p>
                </div>

                <div className="services-line">
                  <h6 style={{ opacity: "0.5" }}>Location</h6>
                  <div className="location">
                    <div className="tecnology">
                      <p style={{ cursor: "pointer" }}>Noida</p>
                      <p style={{ cursor: "pointer" }}>Delhi</p>
                      <p style={{ cursor: "pointer" }}>Lucknow</p>
                      <p style={{ cursor: "pointer" }}>Kanpur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-box">
          <div className="box-container">
            <div className="box">
              <div className="box-img">
                <img src={fs} alt="" />
              
              </div>
              <div className="box-detail">
                <h3>
                  5.{""}
                  <a href="#" target="blank">
                    Full-Stack Developer
                  </a>
                </h3>
                <p style={{ opacity: "0.5" }}>Technology</p>
                <div className="tecnology">
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Python
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Java
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Mern
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="This is a tooltip for a paragraph element"
                  >
                    Mean
                  </p>
                </div>

                <div className="services-line">
                  <h6 style={{ opacity: "0.5" }}>Location</h6>
                  <div className="location">
                    <div className="tecnology">
                      <p style={{ cursor: "pointer" }}>Noida</p>
                      <p style={{ cursor: "pointer" }}>Delhi</p>
                      <p style={{ cursor: "pointer" }}>Lucknow</p>
                      <p style={{ cursor: "pointer" }}>Kanpur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-box">
          <div className="box-container">
            <div className="box">
              <div className="box-img">
                <img src={fs} alt="" />
              
              </div>
              <div className="box-detail">
                <h3>
                  6.{" "}
                  <a href="#" target="blank">
                    Big Data
                  </a>
                </h3>
                <p style={{ opacity: "0.5" }}>Technology</p>
                <div className="tecnology">
                  <p
                    style={{ cursor: "pointer" }}
                    title="Top Handoom Development Companies"
                  >
                    Handoom
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="Top Spark Development Companies"
                  >
                    Spark
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="Top MangoDB Development Companies"
                  >
                    MongoDB
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    title="Top Tableau Development Companies"
                  >
                    Tableau
                  </p>
                </div>

                <div className="services-line">
                  <h6 style={{ opacity: "0.5" }}>Location</h6>
                  <div className="location">
                    <div className="tecnology">
                      <p style={{ cursor: "pointer" }}>Noida</p>
                      <p style={{ cursor: "pointer" }}>Delhi</p>
                      <p style={{ cursor: "pointer" }}>Lucknow</p>
                      <p style={{ cursor: "pointer" }}>Kanpur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="explor-main">
        <h4 style={{ color: "#214695" }}>
          Top Trending Professional Courses in 2023
        </h4>
        <div className="explor-container">
          <div className="container-first">
            <div class="card" style={{ width: "300px" }}>
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body">
                <hr />
                <h5 class="card-text">
                  Top 10+ Institute in India for Data Science july 2023
                </h5>
              </div>
            </div>
          </div>
          <div className="container-second">
            <div class="card" style={{ width: "300px" }}>
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body">
                <hr />
                <h5 class="card-text">
                  Top 10+ Institute in India for Data Science july 2023
                </h5>
              </div>
            </div>
          </div>
          <div className="container-third">
            <div class="card" style={{ width: "300px" }}>
              <img src={img} class="card-img-top" alt="..." />
              <div class="card-body">
                <hr />
                <h5 class="card-text">
                  Top 10+ Institute in India for Data Science july 2023
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="does">
        <h4>How do we help</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima porro
          voluptates dignissimos nihil quis molestias adipisci odio neque ea
          corporis! Placeat minus itaque quibusdam, facere quis excepturi
          possimus eligendi esse sunt fugit adipisci deleniti ratione incidunt
          consequuntur consectetur odit tempora delectus dolor, provident,
          aperiam atque veritatis. Autem eveniet rem unde?
        </p>
      </div>
      <div className="does-card">
        <div className="does-card-first">
          <img src={cm} alt="" />
          <h5>Select a Category</h5>
          <p>Service category selection</p>
        </div>
        <div className="does-card-first">
          <img src={cm} alt="" />
          <h5>Search Options</h5>
          <p>Service category selection</p>
        </div>

        <div className="does-card-first">
          <img src={cm} alt="" />
          <h5>Write a Review</h5>
          <p>Service category selection</p>
        </div>

        <div className="does-card-first">
          <img src={cm} alt="" />
          <h5>Choose a Team</h5>
          <p>Service category selection</p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
