

import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EnquiryForm = ({ onClose }) => {
    // const navigate = useNavigate();


    const [enquiryData, setEnquiryData] = useState({
        name: "",
        phoneNumber: "",
        email: ""
    })
    // console.log("user enquiry Data :", enquiryData)

    const [userfieldError, setUserfieldError] = useState({
        nameError: "",
        emailError: "",
        phoneNumberError: ""
    })

    const formvalid = () => {
        let formisValid = true
        setUserfieldError({
            nameError: "",
            emailError: "",
            phoneNumberError: ""
        })

        if (enquiryData.name == "") {
            formisValid = false
            setUserfieldError(prevState => ({
                ...prevState, nameError: "Please enter name"
            }))
        }


        if (enquiryData.email == "") {
            formisValid = false
            setUserfieldError(prevState => ({
                ...prevState, emailError: "Please enter email"
            }))
        }

        if (enquiryData.phoneNumber == "") {
            formisValid = false
            setUserfieldError(prevState => ({
                ...prevState, phoneNumberError: "Please enter phone Number"
            }))
        }

        

        return formisValid

    }








    const inputHandle = (e) => {
        let name, value

        name = e.target.name
        value = e.target.value

        setEnquiryData({ ...enquiryData, [name]: value })
    }







    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic, e.g., send the enquiry to the server
        // console.log('Enquiry submitted:', { name, phoneNumber,gmail });
        // Close the form
        onClose();
    };

    const handleQuiryData = async (e) => {

        if (formvalid()){
            
            const { name, phoneNumber, email } = enquiryData

            const enquiryDataSend = await fetch("http://localhost:8000/enqiryData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, phoneNumber, email
                })
            })
            const data = await enquiryDataSend.json()
            if (data.status === 422 || !data) {
                window.alert("Enquiry is not Save")
                // toast.error("invalid registration")
                console.log("invalid registration");
            } else {
                // window.alert("Enquiry Data is Saved")
                toast.success("Enquiry Data is Saved");
                console.log("succ registration");


            }



        }else{
            toast.error("Please fill all input field form first")
        }



       
    }

    return (
        <>
            <div className="mainEnquiryForm">
                <div className="enquiry-form">
                    <h4>Get the list of best Deal</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            
                            <input
                                type="text"
                                className="input"
                                name='name'
                                id="name"
                                value={enquiryData.name}
                                onChange={inputHandle}
                                required

                            />
                            <label class="user-label">Enter Your Name</label>
                            {
                                userfieldError.nameError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.nameError}</span>
                            }
                        </div>
                        <div className="form-group">
                           
                            <input
                                type="number"
                                className="input"
                                id="phoneNumber"
                                value={enquiryData.phoneNumber}
                                onChange={inputHandle}
                                name='phoneNumber'
                                required
                                
                            />
                            <label class="user-label">Enter Phone Number</label>
                            {
                                userfieldError.phoneNumberError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.phoneNumberError}</span>
                            }
                        </div>
                        <div className="form-group">
                           
                            <input
                                type="text"
                                className="input"
                                name='email'
                                id="gmail"
                                value={enquiryData.email}
                                onChange={inputHandle}
                                required
                                
                            />
                            <label class="user-label">Enter Your Gmail</label>

                            {
                                userfieldError.emailError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.emailError}</span>
                            }
                        </div>
                        <button type="submit" className='submitEnquiry' onClick={handleQuiryData}>Submit Enquiry   <i class="fa-solid fa-angles-right fa-beat-fade" style={{ color: "#ffffff;" }}></i></button>
                        <div className='afterenquiryformcontent'>
                            <ul>
                                <li>We are Connected as soon as</li>
                                <li>Contact info sent to you by SMS/Email</li>
                                <li>You choose whichever suits you best</li>
                            </ul>
                        </div>


                    </form>
                    <button className='enquiryformclosebutton' onClick={onClose}>&times;</button>
                </div>
            </div>


        </>

    );
};

export default EnquiryForm;
