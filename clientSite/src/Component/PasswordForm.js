import React, { useState, useRef ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import jwt_decode from 'jwt-decode'; // Import jwt-decode library


export default function PasswordForm({email}) {
    let navigate = useNavigate();
    console.log("from forget :",email)

    const [inputField, setInputField] = useState('');
    const [otp, setOtp] = useState(''); // To store the OTP extracted from the token
    console.log("convert token to otp ",otp);

    const Token = localStorage.getItem('token');
    console.log("PasswordForm component  Token :", Token)

    const TokenData = JSON.parse(localStorage.getItem('token'))
    console.log("Token extract from the Token Data :", TokenData)

    const handleEmailChange = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value });
    };
    console.log("input field ", inputField)
    console.log("password", inputField.password)
    console.log("cpassword", inputField.cpassword)
    

    useEffect(() => {
        // Extract OTP from the token when the component mounts
        const Token = localStorage.getItem('token');
        console.log("Use Effect Token :", Token)
        if (Token) {
            const decodedToken = jwt_decode(Token);
            if (decodedToken.otp) {
                setOtp(decodedToken.otp);
            }
        }
    }, []);


    

    

    







    // function call send otp
    const emailRef = useRef();




    const SavePass = async () => {

 
            if (inputField.password !== inputField.cpassword) {
                console.log("Password and Conform Password is not Match")
                toast.error("Password and Conform Password is not Match")

            }
            else {
                if (otp !== inputField.otpCode) {
                    console.log("Please enter valid OTP")
                    toast.error("Please enter valid OTP")
                } else {

                    try {
                        // Construct the email data
                        const emailData = {
                            email: email,
                            otpCode: inputField.otpCode,
                            password: inputField.password,
                            cPassword: inputField.cPassword,
                        };
                        let url = 'http://localhost:8000/changepassword';

                        let options = {
                            method: "POST",
                            url: url,
                            data: emailData,

                        };
                        console.log("option", options)
                        let response = await axios(options);
                        console.log("response", response)
                        let responseData = response.data;
                        console.log("respo", responseData)

                        if (responseData.status === 'Success') {
                            console.log('record status test');
                            toast.success(responseData.message);
                            setTimeout(() => {
                                navigate('/Login');
                            }, 6000);

                            console.log("backend msg=", responseData.message);
                        } else {
                            toast.error(responseData.message);
                            console.log("error from client site :", responseData.message);
                            // console.log(responseData.message);
                        }
                    } catch (error) {
                        // Handle errors here
                        console.error(error);
                        toast.error("An error occurred while sending OTP");
                    }

                }


            };

        
    }
















    return (
        <>
            <section className="passwordformContainer">
                <div className="passwordformmain">
                    <div className="passwordformleftimg"></div>
                </div>
                <div className="passwordformrighttext">
                    <div className="passwordside-text">
                        
                        <h2 style={{ color: "#214695" }} >Enter OTP </h2>


                        <p className='letus'>Let Us Help You</p>


                        <div className="passwordforminput-form">
                            <p className='textcenter'>Enter your registered email address.</p>
                            <div className="passwordinput">
                                <input
                                   
                                    type="number"
                                    class="form-control"
                                    name='otpCode'
                                    maxLength="4"
                                    placeholder='enter Otp'
                                    value={inputField.otpCode}
                                    onChange={handleEmailChange}
                                    ref={emailRef}
                                    autoComplete='off'
                                />
                                
                                <input
                                    type="password"
                                    name='password'
                                    class="form-control"
                                    placeholder='New Password'
                                    value={inputField.password}
                                    onChange={handleEmailChange}
                                    ref={emailRef}
                                    autoComplete='off'
                                />
                               
                                <input

                                    type="password"
                                    class="form-control"
                                    name='cpassword'
                                    placeholder='Conform Password'
                                    value={inputField.cPassword}
                                    onChange={handleEmailChange}

                                    ref={emailRef}
                                    autoComplete='off'
                                />
                                

                            </div>
                            <div className='passwordsubmitbutton'>
                                <button class="btn " style={{ backgroundColor: "#214695", color: "#fff" }} type="button" onClick={SavePass}>Reset My Password</button>
                            </div>

                        </div>



                    </div>

                </div>
                {/* <ToastContainer />  */}
            </section>

        </>
    )
}



