import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import remove from "../assets/img/remove-icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';




const GetListedForm = () => {
    const courseOptions = ["Select Course", "Python", "Java", "Data Science", "Full Stack"];
    const removeCourse = (index) => {
        const updatedCourses = inpval.courses.slice(); // Create a copy of the courses array
        updatedCourses.splice(index, 1); // Remove the course at the specified index
        setINP({ ...inpval, courses: updatedCourses });
    };



    const navigate = useNavigate();
    const [inpval, setINP] = useState({
        companyName: "",
        file: "null",
        courses: [],
        companyFees: "",
        companyDuration: "",
        companyLocation: "",
        companyEmail: "",
        companyPhone: "",
        companyAbout: "",
        companyReview: "",
        companyTime: "",
        companyPlacement: "",
    });

    console.log(inpval)

    const handleFileChange = (e) => {
        setINP({ ...inpval, file: e.target.files[0] });
    };
    // const handleCourseChange = (e) => {
    //     const storeOption = inpval.courses
    //     storeOption.push(e.target.value)
    //     setINP({ ...inpval, courses: storeOption });
    // };

    const handleCourseChange = (e) => {
        const selectedCourse = e.target.value;
        const updatedCourses = inpval.courses.slice(); // Create a copy of the courses array

        if (updatedCourses.includes(selectedCourse)) {
            // If the course is already selected, remove it
            updatedCourses.splice(updatedCourses.indexOf(selectedCourse), 1);
        } else {
            // If the course is not selected, add it
            updatedCourses.push(selectedCourse);
        }

        setINP({ ...inpval, courses: updatedCourses });
    };



    const PostData = async (e) => {
        e.preventDefault()
        console.log("inpval :", inpval)
        const { companyName, courses, companyFees, companyDuration, companyLocation, companyEmail, companyPhone, companyAbout, companyReview, companyTime, companyPlacement, file, } = { ...inpval };

        const formData = new FormData();
        formData.append('file', file);
        formData.append('companyName', companyName);
        // formData.append('courses', courses);
        // Append the courses array as separate values
        courses.forEach((course) => {
            formData.append('courses', course);
        });
        formData.append('companyFees', companyFees);
        formData.append('companyDuration', companyDuration);
        formData.append('companyLocation', companyLocation);
        formData.append('companyEmail', companyEmail);
        formData.append('companyPhone', companyPhone);
        formData.append('companyAbout', companyAbout);
        formData.append('companyReview', companyReview);
        formData.append('companyTime', companyTime);
        formData.append('companyPlacement', companyPlacement);




        const res = await fetch("http://localhost:8000/getlisted", {
            method: "POST",
            body: formData,


        });
        const data = await res.json();
        console.log(data.savedUser);



        if (data.status === 422 || !data) {
            console.log("error data");
            window.alert("Error adding data");
        } else if (data.status === 200) {
            console.log("successful registration", data.savedUser);
            window.alert("Data added successfully");
            navigate("/");
        }



    }

    // -------------------------to get the input data throught useState-------------------------------------------


    return (
        <>
            <h2 style={{ textAlign: "center", margin: "20px 0px" }}>Get Listed Form</h2>
            <form className="" class="get-listed-form">
                <div >
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                        type="text"
                        placeholder="enter your company name"
                        class="form-control"
                        id="companyName"
                        name="companyName"
                        value={inpval.companyName}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    // onChange={handleSubmit} 
                    />
                </div>
                <div>
                    <label htmlFor="contactPerson">Company Logo:</label>
                    <input
                        type="file"
                        id="companyLogo"
                        name="file"
                        onChange={handleFileChange}
                    />
                </div>
                {/* <div>
                    <label htmlFor="companyName">Company Course:</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="enter your Course"
                        id="companyCourse"
                        name="companyCourse"
                        value={inpval.companyCourse}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    />
                </div> */}

                <div className="mainselectedcourse">
                    <label htmlFor="companyCourse">Select Courses :</label>
                    <select

                        className="courseselected"
                        id="courses"
                        name="courses"
                        value={inpval.courses}
                        onChange={handleCourseChange}
                    >
                        {courseOptions.map((course) => (

                            <option key={course} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>
                    {/* <div >

                        <ul className="showOption">
                            {inpval.courses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div> */}
                    <div>

                        <ul className="showOption">
                            {inpval.courses.map((course, index) => (
                                <button>
                                    <li key={index} >
                                        {course}
                                        <a
                                            // className="remove-button"
                                            onClick={() => removeCourse(index)}
                                        >

                                            <FontAwesomeIcon icon={faXmark} style={{ marginLeft: "2px" }} />

                                        </a>

                                    </li>
                                </button>
                            ))}
                        </ul>
                    </div>



                </div>






                <div>
                    <label htmlFor="companyName">Company fees:</label>
                    <input
                        type="text"
                        placeholder="enter Fess in Range e.g. 12k-13k"
                        class="form-control"
                        id="companyFees"
                        name="companyFees"
                        value={inpval.companyFees}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="companyName">Open Time:</label>
                    <input
                        type="text"
                        placeholder="Open Time our Company"
                        class="form-control"
                        id="companyTime"
                        name="companyTime"
                        value={inpval.companyTime}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="companyName">Placement :</label>
                    <input
                        type="text"
                        placeholder="Placement Assesment"
                        class="form-control"
                        id="companyPlacement"
                        name="companyPlacement"
                        value={inpval.companyPlacement}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="companyName">Company Duration:</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Duration which you want"
                        id="companyDuration"
                        name="companyDuration"
                        value={inpval.companyDuration}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="companyName">Company Location:</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="enter your location "
                        id="companyLocation"
                        name="companyLocation"
                        value={inpval.companyLocation}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="email">Company Email:</label>
                    <input
                        type="email"
                        placeholder="enter your email id"
                        class="form-control"
                        id="companyEmail"
                        name="companyEmail"
                        value={inpval.companyEmail}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Company Phone:</label>
                    <input
                        type="text"
                        class="form-control"
                        id="companyPhone"
                        placeholder="enter your phone Number "
                        name="companyPhone"
                        value={inpval.companyPhone}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="message">Company about:</label>
                    <textarea
                        id="companyAbout"
                        style={{ resize: "none" }}
                        class="form-control"
                        placeholder="enter your conpany detail "
                        name="companyAbout"
                        value={inpval.companyAbout}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="companyName">Company Rating:</label>
                    <input
                        type="text"
                        placeholder="enter review which you want"
                        class="form-control"
                        id="companyReview"
                        name="companyReview"
                        value={inpval.companyReview}
                        onChange={e => setINP({ ...inpval, [e.target.name]: e.target.value })}
                    />
                </div>
                <button type="submit" onClick={PostData} className="submit-button">Submit</button>
            </form>
        </>
    );
};

export default GetListedForm;




