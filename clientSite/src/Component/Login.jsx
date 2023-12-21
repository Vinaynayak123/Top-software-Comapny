import React, { useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import "../assets/css/responsive.css"



export default function LogIn() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    console.log(user)

    // Validation field Handle 
    const [userfieldError, setUserfieldError] = useState({
        emailError: "",
        passwordError: ""
    })

    const formvalid = () =>{
        let formisValid = true
        setUserfieldError({
            emailError: "",
            passwordError: ""
        })

        if (user.email == ""){
            formisValid = false
            setUserfieldError(prevState =>({
                ...prevState , emailError :"Please enter email"
            }))
        }

        if(user.password == ""){
            formisValid = false
            setUserfieldError(prevState =>({
                ...prevState , passwordError:"Please enter password"
            }))
        }

        return formisValid

    }




const postData = async (e) => {


    if (formvalid()){

        e.preventDefault();
        const payload = { email: user.email, password: user.password };
        console.log('Request Payload:', payload);
        try {
            const response = await fetch("http://localhost:8000/LogIn", {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: user.email, password: user.password })


            });




            const json = await response.json();
            console.log('json=', json);
            if (json.success) {
                console.log('username =', json.user.name)

                // alert("welcome " + json.user.name)
                toast.success("Welcome " + json.user.name)

                // Store the name  in localStorage
                localStorage.setItem('username',  json.user.name );


                // onClose:navigate('/');
                setTimeout(() => {
                    navigate('/');
                }, 6000);



            }
            else {
                // alert(json.error)
                // toast.error(json.error)
                Swal.fire({
                    title: json.error,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })

            }
        }
        catch (error) {
            console.error('Error:', error);
            console.log("sorry some error occured")
        }

    }else{
        toast.error("Please fill the data first")
        
    }


   

}


return (
    <>
        <div className='main'>
            <div className='main-container-login'>
                <div className='img-side col-sm-6 px-0 d-none d-sm-block'>
                    <div className='left-img'></div>
                </div>
                <div className='button-side'>
                    <h2 style={{ color: "#214695" }}>Log in with E-mail*</h2>

                    <div className="inputfield">
                        <p style={{ color: "#707070" }}>Enter your registered email id and password to access your account. </p>
                        <form className='form'>
                            <div className='username' >
                                <label class="" for="login_email">E-mail*</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email" required
                                    onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
                                    placeholder='Enter your E-mail'

                                />
                                {
                                    userfieldError.emailError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.emailError}</span>
                                }

                            </div>
                            <div className='password'>
                                <label class="" for="login_pwd">Password*</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    placeholder='Enter your Password'
                                    name="password"
                                    required
                                    onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}

                                />
                                {
                                    userfieldError.passwordError.length > 0 && <span className='err' style={{ color: "red" }}>{userfieldError.passwordError}</span>
                                }

                            </div>
                            <div className="forgetpassword">
                                <Link to="/forget">Forgot Password?</Link>
                            </div>
                            <div className='login-submit-button'>
                                <button class="btn" onClick={postData} style={{ backgroundColor: "#214695", color: "#fff" }} type="submit">Submit</button>
                                <Link class="btn" to="/Register" style={{ backgroundColor: "#214695", color: "#fff" }} type="button">Register</Link>
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
