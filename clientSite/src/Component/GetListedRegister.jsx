import React, { useState } from 'react'
import "../assets/css/getListedRegister.css"
import {useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GetListedRegister() {
    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState({
        businessName:"",
        services: "",
        city: "",
        phoneNumber: ""
    })
    console.log("input listed data",userDetail)
    const inputHandle = (e) => {
        let name, value;
      
        name = e.target.name
        value = e.target.value

        setUserDetail({ ...userDetail, [name]: value })

    }

    // validation form field hande 

    const [userfieldError,setUserfieldError] = useState({
        businessNameError :"",
        servicesError :"",
        cityError:"",
        phoneNumberError:""
    })

    const formvalid = () =>{
        let formisValid = true
        setUserfieldError({
            businessNameError: "",
            servicesError: "",
            cityError: "",
            phoneNumberError: ""

        })

        if(userDetail.businessName == ""){
            formisValid=false
            setUserfieldError(prevState =>({
                ...prevState , businessNameError :"! Please enter business Name "
            }))
        }

        if(userDetail.services == ""){
            formisValid = false
            setUserfieldError(prevState =>({
                ...prevState , servicesError :"!Please enter service Name"
            }))
        }

        if(userDetail.city == ""){
            formisValid = false
            setUserfieldError(prevState =>({
                ...prevState , cityError :"! Please enter city"
            }))
        }

        if(userDetail.phoneNumber == ""){
            formisValid = false
            setUserfieldError(prevState =>({
                ...prevState , phoneNumberError :"! Please enter phone number"
            }))
        }
    }



    const SubmitGetListedRegister = async (e)=>{

        if (formvalid()){

            e.preventDefault()
            const { businessName, services, city, phoneNumber } = userDetail
            const userData = await fetch("http://localhost:8000/getListedLoginData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    businessName, services, city, phoneNumber
                })
            })
            const data = await userData.json()
            if (data.status === 422 || !data) {
                // window.alert("invalid registration")
                toast.error("invalid registration")
                console.log("invalid registration");
            } else {
                // window.alert("succefull registration")
                // toast.success("OTP sended successfully!");
                toast.success("OTP sended successfully!");
                console.log("succ registration");

                navigate("/getListedForm")
            }

        }else{
            toast.error("Please fill the form")
        }

        
    }
    return (
        <>
            <div className="getListedRgisterMainContainer">
               
                <div className="getListedRegisterSubContainer">
                    <div className="getListedBackgroundImage">
                        <h6>Last month thousands of customers requested Top Software Company
                            for help from professionals like you in your city.</h6>
                    </div>
                    <div className="getListedFormMain">
                        <div className="getListedForm">
                            
                            <div className="getListedInput">
                                <h5>Tell us your business details</h5>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder='Enter Your Business Name'
                                    name='businessName'
                                    value={userDetail.businessName}
                                    onChange={inputHandle}
                                    required
                                   

                                />
                                {
                                    userfieldError.businessNameError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.businessNameError}</span>
                                }
                                
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder='Add your Services'
                                    name='services'
                                    value={userDetail.services}
                                    onChange={inputHandle}
                                    required
                                    />
                                {
                                    userfieldError.servicesError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.servicesError}</span>
                                }




                                <input type="text"
                                    class="form-control"
                                    placeholder='Enter Your City'
                                    name='city'
                                    value={userDetail.city}
                                    onChange={inputHandle}
                                    required
                                 

                                />

                                {
                                    userfieldError.cityError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.cityError}</span>
                                }
                                <input
                                type='number'
                                    name="phoneNumber"
                                    class="form-control"
                                    value={userDetail.phoneNumber}
                                    onChange={inputHandle}
                                    placeholder='Enter Phone Your Number'
                                    required
                                   />
                                {
                                    userfieldError.phoneNumberError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.phoneNumberError}</span>
                                }
                                

                              

                                <div className="getListedFormButton">
                                    <button type="submit" onClick={SubmitGetListedRegister}>Submit</button>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}



