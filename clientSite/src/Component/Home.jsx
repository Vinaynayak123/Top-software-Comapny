import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "./DataContext";
import "../assets/css/home.css";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import iconPython from "../assets/img/pythonIcon.png"
import fsIcon from "../assets/img/fsIcon.png"
import javaicon from "../assets/img/javaIcon.png"
import sticon from "../assets/img/software-testing-icon.png"
import mlicon from "../assets/img/machine-learning-icon.png"
import dsicon from "../assets/img/data-science-icon.png"
import dmicon from "../assets/img/digital-marketing-icon.png"
import python from "../assets/img/python.png"
import sql from "../assets/img/sql.jpeg"
import powerbi from "../assets/img/powerbi.png"
import tableau from "../assets/img/tableau.webp"
import aws from "../assets/img/aws.jpeg"
import mern from "../assets/img/mern.png"
import mean from "../assets/img/mean.jpeg"
import java from "../assets/img/javaf.jpeg"
import pythonf from "../assets/img/pythonf (1).jpeg"
import php from "../assets/img/php.jpeg"
import panda from "../assets/img/pandas.jpg"
import numpy from "../assets/img/Numpy.png"
import matplotlib from "../assets/img/matplotlib.jpg"
import seaborn from "../assets/img/seaborn.jpg"
import html from "../assets/img/html.jpg"
import css from "../assets/img/css.jpeg"
import js from "../assets/img/js.png"
import bootstrap from "../assets/img/bootstrap.jpg"
import react from "../assets/img/react.jpg"
import st from "../assets/img/software-testing.jpeg"
import dm from "../assets/img/digital marketing.jpeg"
import angular from "../assets/img/Angular.jpeg"
import da from "../assets/img/data-analytic.jpeg"
import ai from "../assets/img/AI.jpeg"









export default function Home() {

    const [searchTerm, setSearchTerm] = useState();

    const { setData } = useDataContext();
    const navigate = useNavigate();
    // new search start
    const [clickData, setClickData] = useState("")

    const clickSearch = async (selectedCourse) => {
        //  in this function to get selected Courses
        console.log("search course in home component :", selectedCourse)
        localStorage.setItem('selectedCourse', JSON.stringify(selectedCourse))




        // Update clickData with the selected course
        setClickData(selectedCourse);

        let res = await fetch(`http://localhost:8000/courses?q=${selectedCourse}`, {
            method: "GET",  // to get the value from the database 
            headers: {
                "Content-Type": "application/json",
            },
        });

        res = await res.json()  // receive the data response 
        localStorage.setItem('filteredData', JSON.stringify(res.filterStoreData))
        localStorage.setItem('allData', JSON.stringify(res.storedata))




        setData(res);  // Update data in the DataContext

        console.log("Fetched Data:", res); // this console to show the res data 

        // alert("suceesfully full redirected") // alert to know this function work properly

        toast.success("suceesfully full redirected")



        navigate("/showCompany"); // redirect to next page 

    };


    // new search end


    const handleSearch = async () => {


        console.log('search term =', searchTerm)  // we are search from frontEnd 
        // localStorage.setItem('searchTerm', JSON.stringify(searchTerm))
        localStorage.setItem('selectedCourse', JSON.stringify(searchTerm))

        if (!searchTerm || searchTerm.trim() === "") {
            // alert("please enter the valid course")
            toast.error("please enter the course name")

        }
        else {

            let res = await fetch(`http://localhost:8000/courses?q=${searchTerm}`, {
                method: "GET",  // to get the value from the database 
                headers: {
                    "Content-Type": "application/json",
                },
            });

            res = await res.json()  // receive the data response 
            if (res.filterStoreData && res.filterStoreData.length > 0) {
                localStorage.setItem('filteredData', JSON.stringify(res.filterStoreData))
                localStorage.setItem('allData', JSON.stringify(res.storedata))

                setData(res);  // Update data in the DataContext

                console.log("Fetched Data:", res); // this console to show the res data 

                toast.success("successfully full redirected");

                // toast.success("suceesfully full redirected")
                //alert("suceesfully full redirected") // alert to know this function work properly
                //navigate("/showCompany")   // redirect to next page 

                // setTimeout(() => {
                //     navigate("/showCompany");
                // }, 6000);
                navigate("/showCompany");
                

            }
            else {
                // If no matching courses are found, show a notification message
                toast.warning("No matching courses found for " + searchTerm);
            }
        }





    };



    return (
        <>
            <section className="hero">
                <div className="content max-width">
                    <h2>Transform your Business with Top IT Software Company </h2>
                    <div className="search-field">
                        <input
                            type="text"
                            placeholder="Search for any service..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="material-symbols-outlined search-btn" style={{ backgroundColor: "#214695" }} onClick={handleSearch}>search</span>
                    </div>
                    <div className="mychange ">
                        <div>
                            <h6>Popular :</h6>
                        </div>
                        <div className="gap">
                            <a >
                                <button className="bannerbtn" onClick={() => clickSearch("python")}> Python </button>
                            </a>

                            <a >

                                <button className="bannerbtn" onClick={() => clickSearch("Data Science")}> Data Science </button>
                            </a>

                            <a >

                                <button className="bannerbtn" onClick={() => clickSearch("Digital Marketing")}> Digital Marketing  </button>
                            </a>

                            <a>

                                <button className="bannerbtn" onClick={() => clickSearch("Software Testing ")}> Software Testing  </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid  py-5 ">
                <section className="center-sec">
                    <div className="photo-name " onClick={() => clickSearch("Full Stack")}>
                        <div>
                            <img
                                src={fsIcon}
                                alt=""
                            />
                        </div>
                        <div className="para">

                            <a className="pn-p">Full Stack</a>
                            {/* <span className="material-symbols-outlined icon-down">
                                expand_more
                            </span> */}
                        </div>
                    </div>
                    <div className="photo-name" onClick={() => clickSearch("python")}>
                        <div>
                            <img
                                src={iconPython}
                                alt=""
                            />
                        </div>
                        <div className="para">

                            <a className="pn-p"> Python</a>
                            {/* <span className="material-symbols-outlined icon-down">
                                expand_more
                            </span> */}
                        </div>
                    </div>

                    <div className="photo-name" onClick={() => clickSearch("java")}>
                        <div>
                            <img
                                src={javaicon}
                                alt=""
                            />
                        </div>
                        <div className="para">
                            {" "}
                            <a className="pn-p">Java</a>{" "}
                            {/* <span className="material-symbols-outlined icon-down">
                                expand_more
                            </span> */}
                        </div>
                    </div>{" "}

                    <div className="photo-name" onClick={() => clickSearch("Software Testing")}>
                        <div>
                            <img
                                src={sticon}
                                alt=""
                            />
                        </div>
                        <div className="para">
                            {" "}
                            <a className="pn-p">Software Testing</a>{" "}
                            {/* <span className="material-symbols-outlined icon-down">
                                expand_more
                            </span> */}
                        </div>
                    </div>{" "}

                    <div className="photo-name" onClick={() => clickSearch("machine learning")}>
                        <div>
                            <img
                                src={mlicon}
                                alt=""
                            />
                        </div>
                        <div className="para">
                            {" "}
                            <a className="pn-p">Machine Learning</a>{" "}
                            {/* <span className="material-symbols-outlined icon-down">
                                expand_more
                            </span> */}
                        </div>
                    </div>{" "}

                    <div className="photo-name" onClick={() => clickSearch("data science")}>
                        <div>
                            <img
                                src={dsicon}
                                alt=""
                            />
                        </div>
                        <div className="para">
                            {" "}
                            <a className="pn-p">Data Science</a>{" "}
                            {/* <span className="material-symbols-outlined icon-down">
                                expand_more
                            </span> */}
                        </div>
                    </div>{" "}

                    <div className="photo-name" onClick={() => clickSearch("digital marketing")}>
                        <div>
                            <img
                                src={dmicon}
                                alt=""
                            />
                        </div>
                        <div className="para">
                            {" "}
                            <a className="pn-p">Digital Marketing</a>{" "}
                            {/* <span className="material-symbols-outlined icon-down">
                                expand_more
                            </span> */}
                        </div>
                    </div>{" "}


                </section>
            </div>




            <div className="bb  ">
                <div className="homeCard">
                    <div className="slider-part ">
                        <div><h1 className="h1-sp">Data science</h1></div>

                        <div className="slider">

                            <div className="card card-width shadow-md" >
                                <div className="home-card-img">

                                    <img className="card-img-top" src={python} alt="Card image cap" />
                                </div>
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Python</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={sql} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">SQL</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={tableau} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Tableau</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={powerbi} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel"> Power BI</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={aws} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">AWS</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


                <div className="homeCard mt-1">
                    <div className="slider-part ">
                        <div><h1 className="h1-sp">Full Stack Development</h1></div>

                        <div className="slider">

                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={mern} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">MERN Full Stack</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={mean} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">MEAN Full Stack</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={java} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Java Full Stack</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={pythonf} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">PYTHON Full Stack</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={php} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">PHP Full Stack</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>



                <div className="homeCard mt-1">
                    <div className="slider-part ">
                        <div><h1 className="h1-sp">Machine Learning</h1></div>

                        <div className="slider">

                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={python} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Python</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={panda} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Panda</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={matplotlib} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Matplotlib</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={numpy} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Numpy</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={seaborn} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Seaborn</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


                <div className="homeCard mt-1">
                    <div className="slider-part ">
                        <div><h1 className="h1-sp">Front End Development</h1></div>

                        <div className="slider">

                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={html} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">HTML</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={css} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">CSS</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={bootstrap} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">BootStrap</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={js} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Java Script</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={react} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">React.js</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>



                <div className="homeCard mt-1">
                    <div className="slider-part ">
                        <div><h1 className="h1-sp">All Course </h1></div>

                        <div className="slider">

                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={st} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Software Testing </h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={dm} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Digital marketing </h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={angular} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Angular</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={da} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">Data analytic</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                            <div className="card card-width shadow-md" >
                                <img className="card-img-top" src={ai} alt="Card image cap" />
                                <div className="card-body-home">
                                    <h5 className="card-title titel">AI</h5>

                                    <div className="footer-section">
                                        <small>501 Expert</small>
                                        <a href="#" className="btn  mera-btn">View Course</a>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

        </>
    );
}
