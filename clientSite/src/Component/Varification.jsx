import React, { useState } from 'react'
import "../assets/css/getListedRegister.css"
import "../assets/css/varification.css"
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import OtpInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function Varification() {
    const [otp, setOtp] = useState("")
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false)
    const [showOtp, setShowOtp] = useState(false)
    const [user, setUser] = useState(null);
    function onCaptchVerify() {

        if (!window.recaptchaVerifier) {
            console.log("in the window.recaptchaVerifier");
            window.recaptchaVerifier = new RecaptchaVerifier(
              
                "recaptcha-container",
                {
                    
                    size: "invisible",
                    callback: (response) => {
                        onSignup();
                    },
                    "expired-callback": () => { },
                },
                // console.log("auth"),
                auth
            );
        }
    }

    function onSignup() {
        console.log("on SignUp")
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;
        console.log("app Varification ",appVerifier)

        const formatPh = "+" + ph;
        console.log("on SignUp after formatPh")

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOtp(true);
                toast.success("OTP sended successfully!");
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    function onOTPVerify() {
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res);
                setUser(res.user);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }
    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState({
        businessName: "",
        services: "",
        city: "",
        phoneNumber: ""
    })
    console.log("input listed data", userDetail)
    const inputHandle = (e) => {
        let name, value;

        name = e.target.name
        value = e.target.value

        setUserDetail({ ...userDetail, [name]: value })

    }
    const SubmitGetListedRegister = async (e) => {
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
            window.alert("invalid registration")
            console.log("invalid registration");
        } else {
            window.alert("succefull registration")
            // toast.success("OTP sended successfully!");
            console.log("succ registration");

            navigate("/getListedForm")
        }
    }
    return (
        <>
            <section>
                <div>
                    <Toaster toastOptions={{ duration: 4000 }} />
                    <div id="recaptcha-container"></div>

                    {user ? (
                        <h2 className="text-center text-dark font-medium text-2xl">
                            👍Login Success
                        </h2>
                    ) : (


                        showOtp ? (
                            <div className="enterotptopcontainer" >
                                <div className="enter-otp-section">
                                    <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                        <BsFillShieldLockFill size={30} />
                                    </div>
                                    <label htmlFor="otp"
                                        className="otptext text-xl text-dark text-center">Enter Your OTP</label>
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        OTPLength={6}
                                        otpType="number"
                                        disabled={false}
                                        autoFocus
                                        className="opt-container"

                                    ></OtpInput>
                                    <button
                                        onClick={onOTPVerify}
                                        className="varifybtn  gap-1 items-center justify-center py-2 my-1 text-white rounded"
                                    >
                                        {loading && (
                                            <CgSpinner size={20} className="mt-1 animate-spin" />
                                        )}
                                        <span>Verify OTP</span>
                                    </button>
                                </div>
                            </div >) :
                            (
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
                                                    {/* <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder='Enter Your Business Name'
                                                    name='businessName'
                                                    value={userDetail.businessName}
                                                    onChange={inputHandle}
                                                    required


                                                /> */}

                                                    {/* <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder='Add your Services'
                                                    name='services'
                                                    value={userDetail.services}
                                                    onChange={inputHandle}
                                                    required
                                                /> */}
                                                    {/* <input type="text"
                                                    class="form-control"
                                                    placeholder='Enter Your City'
                                                    name='city'
                                                    value={userDetail.city}
                                                    onChange={inputHandle}
                                                    required


                                                /> */}
                                                    <>
                                                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                                            <BsTelephoneFill size={30} />
                                                        </div>
                                                        <label
                                                            htmlFor=""
                                                            className="font-bold text-xl text-white text-center"
                                                        >
                                                            Verify your phone number
                                                        </label>
                                                        <PhoneInput country={"in"} value={ph} onChange={setPh} />
                                                        <button
                                                            onClick={onSignup}
                                                            className="bg-dark w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                                        >
                                                            {loading && (
                                                                <CgSpinner size={20} className="mt-1 animate-spin" />
                                                            )}
                                                            <span>Send code via SMS</span>
                                                        </button>
                                                    </>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )



                    )}


                </div>
            </section>
        </>
    )
}




