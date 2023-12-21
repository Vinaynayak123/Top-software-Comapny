import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDataContext } from './DataContext';
import "../assets/css/responsive.css"
import EnquiryForm from "./EnquiryForm"
import Modal from "./Modal"
import { useNavigate } from 'react-router-dom';
import BannerShowCompany from './BannerShowCompany'






export default function ShowCompany() {
    const navigate = useNavigate();

    const { data } = useDataContext();
    // console.log("useContext data", data);



    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("");
    const [selectedPlacement, setSelectedPlacement] = useState("");
    // console.log("user Selected Course :", selectedCourse)
    // console.log("user Selected Location :", selectedLocation)
    // console.log("user Selected Budget :  ", selectedBudget)
    // console.log("user selected Placement :", selectedPlacement)



    // if i am refresh the component then all data is store in the initialFilterData 

    const initialFilteredData = JSON.parse(localStorage.getItem('filteredData'));
    // console.log("after refrsh :", initialFilteredData)








    // All data recevied

    const allData = JSON.parse(localStorage.getItem('allData'))

    // to get the selected courses
    const selectedShowCourses = JSON.parse(localStorage.getItem('selectedCourse'))
    // console.log("selected course in the show company :", selectedShowCourses);


    // to get the data from search bar 
    // const searchCourses = JSON.parse(localStorage.getItem('searchTerm'))
    // console.log("search bar courses in the show company component:", searchCourses)







    // filter the data based on the requirement

    const [filteredData, setFilteredData] = useState(initialFilteredData);


    useEffect(() => {
        // Update filteredData whenever data changes (initial load or data change)

        setFilteredData(initialFilteredData);

    },[data]);

    const handleApplyFilter = () => {

        // Start with StoreData if available, or original data
        let filtered = allData
        // console.log("After click apply btn", filtered)

        // start Data filter 
        // if (selectedCourse) {
        //     filtered = filtered.filter(company => company.courses.toLowerCase() === selectedCourse.toLowerCase());
        //     console.log("After click apply btn 1 if", filtered);
        // }
        if (selectedCourse) {
            filtered = filtered.filter(company => {
                const companyCourses = company.courses;
                // Check if companyCourses is an array and includes the selectedCourse
                return Array.isArray(companyCourses) && companyCourses.includes(selectedCourse.toLowerCase());
            });
            // console.log("After click apply btn 1 if", filtered);
        }


        if (selectedLocation) {
            filtered = filtered.filter(company => company.location.toLowerCase() === selectedLocation.toLowerCase());
            // console.log("After click apply btn 1 if", filtered);
        }

        if (selectedBudget) {
            // Log the values for debugging
            // console.log("selectedBudget:", selectedBudget);
            // console.log("Data before budget filtering:", filtered);


            // Convert selectedBudget to the appropriate data type if necessary
            //const selectedBudgetValue = parseInt(selectedBudget); // Example: assuming selectedBudget should be an integer
            // filtered = filtered.filter(company => company.Budget === selectedBudgetValue);
            filtered = filtered.filter(company => company.Budget.toLowerCase() === selectedBudget.toLocaleLowerCase());
            // console.log("After click apply btn budget if", filtered);
        }



        if (selectedPlacement) {
            // console.log("selectedPlacement:", selectedPlacement);
            // console.log("Data before placement filtering:", filtered);

            filtered = filtered.filter(company => company.placement?.toLowerCase() === selectedPlacement.toLowerCase());

            // console.log("After click apply btn placement ", filtered);
        }


        // Update the filtered data when the "Apply" button is clicked
        setFilteredData(filtered);

        // Store the filtered data in localStorage
        localStorage.setItem('filteredData', JSON.stringify(filtered));


    };


    // enquiry form open 


    const [isEnquiryFormVisible, setIsEnquiryFormVisible] = useState(false);

    const handleEnquiryButtonClick = () => {
        setIsEnquiryFormVisible(true);
    };

    const handleCloseModal = () => {
        setIsEnquiryFormVisible(false);
    };


    // View Company logic Start 

    const moveToViewCompany = (element) => {
        console.log("view Company", element)
    
        // it navigate another Page 
        navigate('/ViewCompany', { state: { data: element } })
        
    }

    // whats app Open in another tab 
    // Function to open WhatsApp in the browser 

    const openWhatsApp = (phoneNumber) => {
        const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(whatsappWebUrl, '_blank');
    };

    return (
        <>
            <BannerShowCompany />
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




            {filteredData && filteredData.length > 0 && (
                <h1 style={{ color: "#707070", textAlign: "center", marginTop: "20px" }}>
                    Search Results For : {selectedCourse.length > 0 ? selectedCourse : selectedShowCourses}
                </h1>
            )}

            <div className='blog-main'>


                <div class="col-xl-12 col-lg-12">
                    <div class="filter-option" >
                        <div class="comp_main_box shadow-sm mb-2 bg-white card_box rounded" >
                            <div id="filter_opt">
                                <div id="filter_one" class="collapse show" data-parent="#filter_opt">
                                    <div class="pt-3">
                                        <div class="form_box">
                                            <div class="row">
                                                <div class="col set-blck">
                                                    <div class="form-group">
                                                        <label class="mb-0" for="country_id_serachs">Course</label>
                                                        <select
                                                            class="form-control country_id country_flt_val select-with-search pmd-select2"
                                                            name="country_id"
                                                            id="country_id_serachs"
                                                            style={{ width: "100% !important;" }}
                                                            onChange={(e) => {
                                                                setSelectedCourse(e.target.value);

                                                            }}
                                                        >
                                                            <option value="">Select Course</option>
                                                            <option value="python">Python</option>
                                                            <option value="data Science">Data Science</option>
                                                            <option value="digital marketing">Digital Marketing</option>
                                                            <option value="Full Stack">Full Stack</option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col set-blck">
                                                    <div class="form-group">
                                                        <label class="mb-0" for="country_id_serachs">Location</label>
                                                        <select
                                                            class="form-control country_id country_flt_val select-with-search pmd-select2"
                                                            name="country_id"
                                                            id="country_id_serachs"
                                                            style={{ width: "100% !important;" }}
                                                            onChange={(e) => {
                                                                setSelectedLocation(e.target.value);

                                                            }}
                                                        >
                                                            <option value="">Select Location</option>
                                                            <option value="Noida">Noida</option>
                                                            <option value="Delhi">Delhi</option>
                                                            <option value="Lucknow">Lucknow</option>
                                                            <option value="Ghaziabad">Ghaziabad</option>
                                                            <option value="Grater Noida">Greater Noida</option>
                                                            <option value="Kanpur">Kanpur</option>
                                                            <option value="Gorakhpur">Gorakhpur</option>
                                                            <option value="Pune">Pune</option>
                                                            <option value="Mumbai">Mumbai</option>
                                                            <option value="Patna">Patna</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col set-blck">
                                                    <div class="form-group">
                                                        <label class="mb-0" for="chk_price_range_id">Budget</label>
                                                        <select
                                                            class="form-control filter_costperhr price_flt_val select-with-search pmd-select2"
                                                            name="filter_costperhr"
                                                            id="chk_price_range_id"
                                                            style={{ width: "100% !important;" }}
                                                            onChange={(e) => {
                                                                setSelectedBudget(e.target.value);

                                                            }}
                                                        >
                                                            <option value="">Select Budget</option>
                                                            <option value="4k-5k" >4k-5k</option>
                                                            <option value="3k-6k">3k-6k</option>
                                                            <option value="3k-5k">3k-5k</option>
                                                            <option value="8k-10k">8k-10k</option>
                                                            <option value="10k-12k">10k-12k</option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col set-blck">
                                                    <div class="form-group">
                                                        <label class="mb-0" for="sort_by">Placement</label>
                                                        <select class="form-control filter_emp sort_by_flt_val select-with-search pmd-select2"
                                                            name="sort_by"
                                                            id="sort_by"
                                                            style={{ width: "100% !important;" }}
                                                            onChange={(e) => {
                                                                setSelectedPlacement(e.target.value);

                                                            }}
                                                        >
                                                            <option selected="selected">Assesment/Guarantee</option>
                                                            <option value="Assesment">Assesment</option>
                                                            <option value="Guarantee">Guarantee</option>
                                                            <option value="No Assesment">No Assesment</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col set-blck">
                                                    <button type="button"
                                                        class="btn-view-website text-capitalize w-100 mt-4"
                                                        onClick={handleApplyFilter}
                                                    >Filter
                                                    </button>
                                                </div>

                                            </div>




                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>









                <h4 style={{ padding: "0px 20px", color: "#4c4c4c;", fontWeight: "bold" }}>Companies</h4>
                <div className="blog-main-container-showCompany">


                    {
                        filteredData && filteredData.map((element) => {
                            return (

                                <>
                                    <div class=" single-card showCompany" >
                                        <div className='logo-btn'>
                                            <img src={element.img} alt="..." />
                                            <a className='visitbtn'  onClick={e => moveToViewCompany(element)}>visit</a>
                                            
                                              

                                        </div>


                                        <div className="boxDetail">
                                            <h2 className='company-name' onClick={e => moveToViewCompany(element)}>{element.ranking}. {element.name}</h2>
                                            <div className="boxDetaillayout">
                                                <p>Rating   :<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill StarColor" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                    {element.Rating}</p>
                                                <p>Fees     : {element.Budget}</p>
                                                <p>Duration : {element.duration}</p>
                                                <p>Location : {element.location}</p>
                                                {/* <p>Mobile   : {element.mobile}</p> */}
                                                <p>E-mail   : {element.email}</p>
                                                <p>Placement: {element.placement}</p>
                                                <p>Open Time: {element.time}</p>
                                                <p>Courses  : {element.courses[0]}, {element.courses[1]}, {element.courses[2]}</p>
                                            </div>
                                            <div className="showcompanyContactbtn">
                                                <button className='showcompanyContactbtnall' style={{ backgroundColor: "green", color: "white", fontWeight: "600", padding: "5px", border: "1px solid green" }}><i class="fa-solid fa-phone fa-shake" style={{ color: " #fcfcfc;" }}></i> {element.mobile}</button>
                                                <button className='showcompanyContactbtnall' style={{ backgroundColor: "#0076d7", color: "white", fontWeight: "600", padding: "5px", border: "1px solid #0076d7" }} title="Send Enquiry" onClick={() => handleEnquiryButtonClick()}>Send Enquiry</button>
                                                <button className='showcompanyContactbtnall' style={{ width: "30", height: "24", fontWeight: "600", padding: "5px" }} title="Whats app" onClick={() => openWhatsApp(element.mobile)}><i class="fa-brands fa-whatsapp fa-xl fa-beat-fade" style={{ color: "#0ae623" }}></i> Chat</button>
                                            </div>

                                        </div>
                                        {/* Render EnquiryForm if isEnquiryFormVisible is true */}

                                        {/* {isEnquiryFormVisible && (
                                            <Modal onClose={handleCloseModal}>
                                                <EnquiryForm onClose={handleCloseModal} />
                                            </Modal>
                                        )} */}
                                    </div>


                                </>
                            )
                        })
                    }









                </div>
            </div>
        </>
    )
}
