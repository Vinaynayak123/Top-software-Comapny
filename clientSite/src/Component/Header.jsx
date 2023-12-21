import React, { useState } from "react";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "./DataContext";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Header() {
  const [showGetListedForm, setShowGetListedForm] = useState(false);

  const [clickData, setClickData] = useState("")

  const username = localStorage.getItem("username");
  // console.log("in the header username =", username)


  const handleGetListedClick = () => {
    setShowGetListedForm(true);
  };

  const { setData } = useDataContext();

  const navigate = useNavigate();

  const handleSearch = async (selectedCourse) => {


    // Update clickData with the selected course

    setClickData(selectedCourse);
    // console.log("click Data is in selected course :", selectedCourse)
    localStorage.setItem('selectedCourse', JSON.stringify(selectedCourse))



    let res = await fetch(`http://localhost:8000/courses?q=${selectedCourse}`, {
      method: "GET",  // to get the value from the database 
      headers: {
        "Content-Type": "application/json",
      },
    });

    res = await res.json()  // receive the data response 
    // console.log("response data from backend in the header component:", res);

    if (res.filterStoreData && res.filterStoreData.length > 0) {


      localStorage.setItem('filteredData', JSON.stringify(res.filterStoreData))
      localStorage.setItem('allData', JSON.stringify(res.storedata))

      setData(res);  // Update data in the DataContext

      console.log("Fetched Data:", res); // this console to show the res data 

      // alert("suceesfully full redirected") // alert to know this function work properly

      toast.success("suceesfully full redirected")


      navigate("/showCompany")   // redirect to next page
    } else {
      // If no matching courses are found, show a notification message
      toast.warning("No matching courses found for " + selectedCourse);
    }
  
    
  };

  const handleLogout = () => {
    // Clear the username from localStorage or your authentication state
    localStorage.removeItem("username");
    // Optionally, you can redirect the user to the login page
    navigate("/Login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top nav-color ">
        <div className="container-fluid">
          <a className="navbar-brand " style={{ color: "white", fontSize: "inherit" }} href="/">
            TopSoftwareCourse
          </a>
          <button
            className="hamburg"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{margin:"9px 11px" , backgroundColor:"azure"}}
          >
            {/* <span className="navbar-toggler-icon icon-color"></span> */}
            <span className="navbar-toggler-icon" style={{ color: "white" }}></span>


          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ cursor: "pointer" }}>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  style={{ color: "white" }}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Course
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" onClick={() => handleSearch("Data Science")}>
                      Data Science
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" onClick={() => handleSearch("python")}>
                      Python
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" onClick={() => handleSearch("Machine Learning")}>
                      Machine Learning
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" onClick={() => handleSearch("AI")}>
                      AI
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" onClick={() => handleSearch("Full Stack")}>
                      Full Stack
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" onClick={() => handleSearch("Digital Marketing")}>
                      Digital Markrting
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  style={{ color: "white" }}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resource
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="dropdown-item" href="#">
                      Badges
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="dropdown-item" to="/Tool">
                      Tools
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link "
                  style={{ color: "white" }}
                  to="/"
                >
                  About
                </Link>

              </li>
            </ul>





            <li className="nav-item dropdown d-flex">
              {username ? (

                <ul

                  style={{ cursor: "pointer" }}
                >
                  <a
                    className="nav-link"
                    style={{ color: "white" }}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {username}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={handleLogout}
                        style={{ cursor: "pointer" }}
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </ul>

              ) : (
                <Link className="nav-link" to="/Login" style={{ color: "white" }}>
                  Log In
                </Link>
              )}



            </li>

            

            <Link className=" button-bg" style={{ textDecoration: "none" }} to="/GetListedRegister" onClick={handleGetListedClick} >Get Listed</Link>
            








          </div>
        </div>
      </nav>
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
