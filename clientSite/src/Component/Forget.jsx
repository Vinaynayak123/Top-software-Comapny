import React, { useState, useRef,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordForm from './PasswordForm';



export default function Forget() {

    const [email, setEmail] = useState('');
    const [floatingplaceholder, setfloatingplaceholder] = useState(false);
    const [forget, setForget] = useState(true)
    const [token, setToken] = useState()
    // console.log("token use State from the server site", token)

    const Token =localStorage.getItem('token'); 
    // console.log("Forget component  Token :", Token)

    // const TokenData = JSON.parse(localStorage.getItem('token'))
    // console.log("Token extract from the Token Data :",TokenData)
    const [userfieldemail, setUserfield] = useState({
        emailError:""
    })

    const validForm = ()=>{
        let formisValid = true
        setUserfield({
            emailError: ""
        })

        if(email.email == ""){
            formisValid = false
            setUserfield(prevState => ({
                ...prevState, emailError: "Please enter email"
            }))
        }

        return formisValid
    } 


    useEffect(() => {
        // When the component mounts, check if Token exists in localStorage
        if (Token) {
            const parsedToken = JSON.parse(Token);
            setToken(parsedToken.token); // Set the token from localStorage in the component state
            //setOTP(parsedToken.otp); // Set the OTP from localStorage in the component state
        }
    }, [Token]);



    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleOnClick = () => {
        setfloatingplaceholder(true)
        console.log("onClick")
    }

    const isEmailValid = email.includes('@');


    // function call send otp
    const emailRef = useRef();



    const sendOTP = async () => {

        if (validForm()){

            try {
                let url = 'http://localhost:8000/emailsend';
                let options = {
                    method: "POST",
                    url: url,
                    data: { email: emailRef.current.value }
                };
                let response = await axios(options);
                console.log("response from back end :", response)
                let responseData = response.data;
                console.log("respo", responseData)

                if (responseData.message === 'Success') {
                    console.log('record status test');
                    toast.success(responseData.message);
                    console.log("Token :", responseData.token)
                    // Store the token in local storage
                    // localStorage.setItem('token', JSON.stringify(responseData.token));  

                    // Store the token and OTP in localStorage
                    localStorage.setItem('token', JSON.stringify({ token: responseData.token }));
                    setToken(responseData.token); // Set the token in the component state

                    setTimeout(() => {
                        setForget(false);
                    }, 6000); // 1000 milliseconds = 1 second

                } else {
                    console.log("error wala");
                    toast.error(responseData.message);
                    console.log(responseData.message);
                }
            } catch (error) {
                // Handle errors here
                console.error(" send otp error", error);
                toast.error("An error occurred while sending OTP");
            }

        }else{
            toast.error("from is not valid")
        }


        
    };



    return (
   

            forget === true ?

            <>
                <div className="main-container-forget">
                    
                    <div className="sub-container-forget">
                        <div className="side-img">
                            <div className="left-img-forget"></div>
                        </div>

                        <div className="side-text">
                            {/* <ToastContainer /> */}
                            <h2 style={{ color: "#214695" }} >Reset Password</h2>


                            <p className='letus'>Let Us Help You</p>


                            <div className="input-form">
                                <p className='textcenter'>Enter your registered email address.</p>
                                <div className="logoutinput">
                                    <input
                                        type="email"
                                        placeholder='E-mail*'
                                        class="form-control"
                                        value={email}
                                        onChange={handleEmailChange}
                                        onClick={handleOnClick}
                                        ref={emailRef}
                                        autoComplete='off'


                                    />
                                    {
                                        userfieldemail.emailError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldemail.emailError}</span>
                                    }

                                </div>
                                <div className='submitbutton'>
                                    <button class="btn " style={{ backgroundColor: "#214695", color: "#fff" }} type="button" disabled={!isEmailValid} onClick={sendOTP}>Reset</button>
                                </div>
                                <div className='login'><Link to="/Login">Login?</Link></div>
                            </div>



                        </div>


                    </div>
                </div>

            </>

            : <PasswordForm email={email} />

      
    )
}
