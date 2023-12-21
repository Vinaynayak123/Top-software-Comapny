import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Resister() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })
    console.log(user)
    let name, value;
    const handleInputs = (e) => {
        console.log("handleinput ", e)
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })
    }

    // validation form handle 
    const [userfieldError, setUserfieldError] = useState({
        nameError :"",
        emailError: "",
        passwordError: "",
        cpasswordError:""
    })

    const formvalid = () => {
        let formisValid = true
        setUserfieldError({
            nameError: "",
            emailError: "",
            passwordError: "",
            cpasswordError: ""
        })

        if (user.name == "") {
            formisValid = false
            setUserfieldError(prevState => ({
                ...prevState, nameError: "Please enter name"
            }))
        }


        if (user.email == "") {
            formisValid = false
            setUserfieldError(prevState => ({
                ...prevState, emailError: "Please enter email"
            }))
        }

        if (user.password == "") {
            formisValid = false
            setUserfieldError(prevState => ({
                ...prevState, passwordError: "Please enter password"
            }))
        }

        if (user.cpassword == "") {
            formisValid = false
            setUserfieldError(prevState => ({
                ...prevState, cpasswordError: "Please enter conform password"
            }))
        }

        return formisValid

    }





    const PostData = async (e) => {

        if (formvalid()){

            e.preventDefault()
            if (user.password === user.cpassword) {
                const { name, email, password, cpassword } = user
                const data1 = await fetch("http://localhost:8000/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name, email, password, cpassword
                    })

                })
                // console.log(res)
                const data = await data1.json()
                console.log("data from server :",data)

                if (data.message === "Email already registered"){
                    toast.error(data.message)

                }
                else if (data.status === 422 || !data) {
                    // window.alert("invalid registration")
                    toast.error("invalid registration")
                    console.log("invalid registration");
                } else {
                    // window.alert("succefull registration")
                    toast.success("succefull registration")
                    console.log("succ registration");

                    
                    setTimeout(() => {
                        navigate("/LogIn")
                    }, 6000); 
                }

            }
            else {
                // window.alert("conform password is can't matched ")
                toast.error("conform password is can't matched ")
            }

        }else{
            toast.error("Please fill all input field form first")
        }



        
    }
    



    return (
        <>
            <div className='main'>
                <div className='main-container-login'>
                    <div className='img-side col-sm-6 px-0 d-none d-sm-block'>
                        <div className='register-left-img'></div>
                    </div>
                    <div className='register-button-side'>
                        <h2 style={{ color: "#214695" }}>Register with TopCompany</h2>

                        <div className="inputfield">
                            <p style={{ color: "#707070" }}>Get ready to boost your business with TopDevelopers!</p>
                            <form className='form' method='POST'>
                                <div className='username' >
                                    {/* <label class="" for="login_email">Full Name</label> */}
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder='Enter your Name'
                                        name='name'
                                        value={user.name}
                                        onChange={handleInputs}
                                    />
                                </div>
                                {
                                    userfieldError.nameError.length>0 && <span className='err' style={{ color: "red" }}>{userfieldError.nameError}</span>
                                }

                                <div className='username' >
                                    {/* <label class="" for="login_email">E-mail*</label> */}
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder='Enter your E-mail'
                                        name='email'
                                        value={user.email}
                                        onChange={handleInputs}

                                    />
                                    {
                                        userfieldError.emailError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.emailError}</span>
                                    }


                                </div>
                                <div className='password'>
                                    {/* <label class="" for="login_pwd">Password*</label> */}
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder='Enter your Password'
                                        name='password'
                                        value={user.password}
                                        onChange={handleInputs}
                                    />

                                    {
                                        userfieldError.passwordError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.passwordError}</span>
                                    }
                                </div>
                                <div className='password'>
                                    {/* <label class="" for="login_pwd">Confirm Password*</label> */}
                                    <input
                                        type="password"
                                        class="form-control"
                                        placeholder='Please Confirm your Password'
                                        name='cpassword'
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                    />

                                </div>
                                {
                                    userfieldError.cpasswordError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.cpasswordError}</span>
                                }
                                
                                <div className='login-submit-button'>
                                    <button class="btn" style={{ backgroundColor: "#214695", color: "#fff" }} type="button" onClick={PostData}>Register</button>
                                    <Link class="btn" to="/Login" style={{ backgroundColor: "#214695", color: "#fff" }} type="button">LogIn</Link>
                                </div>
                            </form>
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
    )
}
