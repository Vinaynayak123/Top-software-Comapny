import React, { useState } from 'react'
import '../assets/css/viewcompany.css'
import trust from "../assets/img/trust.gif"
import varified from "../assets/img/verified.gif"
import { useLocation } from 'react-router-dom'
import EnquiryForm from "./EnquiryForm"
import Modal from "./Modal"

export default function ViewCompany() {
  const location = useLocation()
  const { data } = location.state || {};
  console.log("location state =", data)

  

  // enquiry form open 


  const [isEnquiryFormVisible, setIsEnquiryFormVisible] = useState(false);


  if (!data) {
    // Handle the case where data is undefined
    return <div>No data available</div>;
  }

  const handleEnquiryButtonClick = () => {
    setIsEnquiryFormVisible(true);
  };

  const handleCloseModal = () => {
    setIsEnquiryFormVisible(false);
  };


  // whats app Open in another tab 
  // Function to open WhatsApp in the browser 

  const openWhatsApp = (phoneNumber) => {
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappWebUrl, '_blank');
  };
  return (
    <>
      {isEnquiryFormVisible && <div className="blurred-background"></div>}

      {isEnquiryFormVisible && (
        <div className="modal-container">
          <Modal onClose={handleCloseModal}>
            <div className="modal-content">
              <EnquiryForm onClose={handleCloseModal} />
            </div>
          </Modal>
        </div>
      )}
      <div className="viewcompanynamecontainer">
        <div className='viewcompanymaintraininginstitude'>
          <div>

            <h3 style={{ width: "max-content" }}>{data.name}</h3>
          </div>
          <div className="viewcompanybuttontraing">
            <button className='viewcompanybuttontraingaccounting'>Accounting Training Institutes</button>
            <button className='viewcompanybuttontraingit'>I.T Training Institutes</button>
          </div>
        </div>
        <div>
          <div className="viewcompanylocation">
            <p style={{ padding: "0px 10px" }}>Rating : {data.Rating}</p>
            <img src={trust} alt="" srcset="" className='trust' />
            <img src={varified} alt="" srcset="" className='varified' />
          </div>
          {/* <p className='viewcompanylocation'><i class="fa-solid fa-location-dot"></i> Noida sector 15</p> */}

          <div className='viewcompanyfirstcontainer'>

            <p>
              <ul>
                <li><span className='opentimeviewcompany'>Open</span> : {data.time}</li>
              </ul>
            </p>
            <p>
              <ul>
                <li><span className='opentimeviewcompany'>Duration</span> : {data.duration}</li>
              </ul>
            </p>
            <p>
              <ul>
                <li><span className='opentimeviewcompany'>Placement</span> : {data.placement}</li>
              </ul>
            </p>
            <p>
              <ul>
                <li><span className='opentimeviewcompany'>E-mail</span> : {data.email}</li>
              </ul>
            </p>
          </div>
          <div className="viewcompanybutton">
            <button className='viewcomapnymobilebutton'><i class="fa-solid fa-phone fa-shake" style={{ color: "#fff" }}></i>  999999999</button>
            <button className='viewcompsnychatbutton' onClick={() => openWhatsApp(data.mobile)}><i class="fa-brands fa-whatsapp fa-xl fa-beat-fade" style={{ color: "#0ae623" }}></i> Chat</button>
            <div className="viewcompanymainenquirybutton">
              <button className='viewcompanyenquirynowbutton' onClick={() => handleEnquiryButtonClick()}>Enquiry Now</button>
            </div>
          </div>

        </div>


      </div>

      <div className='viewcompanysecondcontainer'>

        <div className="viewcompanysecondfirstchild">
          <div className="viewcompanyquickinfo">

            <div className='viewconpanyquickinformation'>
              <h5 style={{fontWeight:"900"}}>Quick Information</h5>
              <div style={{ color: "#555", marginTop: "10px" }}>Mode of Payment</div>
              <div style={{ fontSize: "15px", color: "black", marginTop: "10px" }}>
                <ul style={{display:"grid" ,gridTemplateColumns:"auto auto auto",listStyle:"none"}}>
                  <li><i class="fa-solid fa-circle-check  " style={{ color: "green", margin: "10px 10px 0px 0px" }}></i> Cash</li>
                  <li><i class="fa-solid fa-circle-check  " style={{ color: "green", margin: "10px 10px 0px 5px" }}></i> G-Pay</li>
                  <li> <i class="fa-solid fa-circle-check " style={{ color: "green", margin: "10px 10px 0px 5px" }}></i> NEFT</li>
                  <li><i class="fa-solid fa-circle-check  " style={{ color: "green", margin: "10px 10px 0px 0px" }}></i> IMPS</li>
                  <li><i class="fa-solid fa-circle-check  " style={{ color: "green", margin: "10px 10px 0px 5px" }}></i> UPI</li>
                  <li><i class="fa-solid fa-circle-check  " style={{ color: "green", margin: "10px 10px 0px 5px" }}></i> PhonePe</li>
                </ul>
              </div>
            </div>
            <div className='viewconpanyblank'>
              <h5 >...</h5>
              <div style={{ color: "#555", marginTop: "10px" }}> Year of Establishment</div>
              <div style={{ fontSize: "15px", color: "black", marginTop: "10px" }}>2020</div>
            </div>
            <div className='viewconpanytimeing'>
              <h5 style={{ fontWeight: "900" }}>Timings</h5>
              <div style={{ color: "#555", marginTop: "10px" }}>Mon - Sun</div>
              <div style={{ fontSize: "15px", color: "black", marginTop: "10px" }}>{data.time}</div>
            </div>
            

          </div>
          <hr />
          <div className="viewcompanyquickinfosecondcontainer">
            <div className='viewclasslanguageclass'>
              <h5 style={{ fontWeight: "900" }}>Language classes for</h5>
              <ul style={{listStyle:"none",fontSize:"16px",fontWeight:"500"}}>
                <li><i class="fa-solid fa-circle-check fa-lg" style={{color: "green",margin:"20px 10px 0px 0px"}}></i> English</li>
                <li><i class="fa-solid fa-circle-check fa-lg" style={{color: "green",margin:"20px 10px 0px 0px"}}></i> Hindi</li>
                

              </ul>
            </div>
            <div className='viewcompanysubjecttaught'>
              <h5 style={{ fontWeight: "900" }}>Subjects Taught</h5>
              <ul style={{ listStyle: "none", fontSize: "16px", fontWeight: "500" }}>
                <li><i class="fa-solid fa-circle-check fa-lg" style={{ color: "green", margin: "20px 10px 0px 0px" }}></i> I.T Service</li>

              </ul>
            </div>
            <div className='viewcompanymodeofinstruction'>
              <h5 style={{ fontWeight: "900" }}>Mode of Instruction</h5>
              <ul style={{ listStyle: "none", fontSize: "16px", fontWeight: "500" }}>
                <li><i class="fa-solid fa-circle-check fa-lg" style={{ color: "green", margin: "20px 10px 0px 0px" }}></i> Offline</li>
                <li><i class="fa-solid fa-circle-check fa-lg" style={{ color: "green", margin: "20px 10px 0px 0px" }}></i> Online</li>

              
              </ul>
            </div>
          </div>
        </div>
        <div className="viewcompanyaddress">

          <h5>Address</h5>
          <div> B 14-15, Udhyog Marg, Block B, Sector 1, Noida, Uttar Pradesh 201301</div>

          <hr />
          <button className='viewcompanysendenquirybyemail' onClick={() => handleEnquiryButtonClick()}><i class="fa-solid fa-envelope" style={{ marginRight: "5px" }}></i> Send Enquiry By Email</button>
          <hr />
          <button className='viewcompanysendenquirybyemail' onClick={() => handleEnquiryButtonClick()}><i class="fa-solid fa-comment-sms"></i> Get information by SMS/Email</button>
          <hr />
          <button className='viewcompanysendenquirybyemail' ><i class="fa-solid fa-magnifying-glass"></i> Visit to our web sites</button>
        </div>

      </div>
    </>
  )
}
