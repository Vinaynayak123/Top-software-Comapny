import React, { useState } from "react";
import sp1 from '../assets/img/sp1.svg'
import sp2 from '../assets/img/sp2.svg'
import { useNavigate } from 'react-router-dom';

export default function SubmitProject() {
  const navigate = useNavigate();

  const [projectSubmited, setprojectSubmited] = useState({
    name: "",
    email: "",
    country: "",
    pnumber: "",
    message: "",
    budget: "",
    file: "null",
    // servicesInterested: ""

  })
  console.log("user input", projectSubmited);

  let name, value;
  const handleInputs = (e) => {
    // console.log(e)
    name = e.target.name
    value = e.target.value

    setprojectSubmited({ ...projectSubmited, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault()
    const { name, email, country, pnumber, message, budget, file, } = { ...projectSubmited };

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('pnumber', pnumber);
    formData.append('message', message);
    formData.append('budget', budget);
    // formData.append('servicesInterested', servicesInterested);
    




    const res = await fetch("http://localhost:8000/submitedproject", {
      method: "POST",
      // body: JSON.stringify(projectSubmited),
      body: formData


    });
    const data = await res.json();
    setprojectSubmited(data.savedUser)
    console.log(data.savedUser);



    if (data.status === 422 || !data) {
      console.log("error data");
      window.alert("Error adding data");
    } else if (data.status === 200) {
      console.log("successful registration", data.savedUser);
      window.alert("Data added successfully");
      navigate("/Listed");
    }



  }



  const importantStyle = {
    height: "55px",
    alignItems: "flex-start",
  };

  const inlineStyle = {
    ...importantStyle,

    height: "140px",
    alignItems: "flex-start",
  };
  return (
    <>
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-10 col-md-11 col-sm-12 col-12">
          <div class="main_heads_cnt">
            <div class="row justify-content-center">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <p style={{ color: "#707070", fontSize: "18px", margin: "80px 20px 20px 20px" }}>What are you looking for</p>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <a href="" id="div_first">
                  <div class="media active HireAgency">
                    <img
                      class="align-self-center"
                      src={sp1}
                      style={{ width: "70px", height: "70px" }}
                    />
                    <div class="media-body">
                      <h4 id="HireAgency">Hire Agency </h4>
                      <p></p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <a href="javascript://" id="second_div">
                  <div class="media">
                    <img
                      class="align-self-center"
                      src={sp2}
                      style={{ width: "70px", height: "70px" }}
                    />
                    <div class="media-body">
                      <h4 id="HireDeveloper">Hire Developer</h4>
                      <p></p>
                    </div>
                  </div>
                </a>
              </div>
              <input type="hidden" name="type" id="type" value="2" />
            </div>
            <div class="hire_agency_tab">
              <div class="row justify-content-center ">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div class="main_titles_form_head">
                    <h4>1. Tell us about your self</h4>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Enter Your Full Name"
                      onChange={e=>handleInputs(e)}
                      required=""
                    />

                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                    
                      placeholder="Enter Your Email Address"
                      onChange={e => handleInputs(e)}
                      id="email"
                      required=""
                    />

                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      class="form-control"
                      name="country"
                      placeholder="Enter Your Country"
                      // value={projectSubmited.country}
                      onChange={e => handleInputs(e)}

                    />

                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Contact Number</label>
                    <div class="phone-check">
                      <div class="form__field phone-number-prefix">+91</div>
                      <input
                        type="number"
                        class="form-control phone-number"
                        // value={projectSubmited.pnumber}
                        onChange={e => handleInputs(e)}
                        name="pnumber"
                        autocomplete="off"
                        style={{
                          borderLeft: 0,
                          borderRadius: 0,
                          borderTopRightRadius: "5px",
                          borderBottomRightRadius: "5px",
                        }}
                        placeholder="Enter Your Phone Number"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div
                  class="hire_agency_tab"
                  id="agency_tab"
                  style={{ display: "block" }}
                >
                  <div class="row justify-content-center">
                    <div class="col-xl-12 col-lg-112 col-md-12 col-sm-12">
                      <div class="main_titles_form_head">
                        <h4>2. What are you looking to work on?</h4>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <textarea
                          class="form-control form-control-height"
                          name="message"
                          onChange={e => handleInputs(e)}
                          // value={projectSubmited.message}
                          placeholder="Describe your project briefly *"
                          style={inlineStyle}
                        ></textarea>

                      </div>
                    </div>
                    {/* What's your budget? start  */}

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label>What's your budget?</label> <br />
                        {/* <div class="row">
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check">
                              <input
                                id="opt1"
                                type="radio"
                                class="form-check-input d-none"
                                onChange={handleInputs}
                                // value={projectSubmited.budget}

                                name="budget"
                                value="$5K-$10K"
                              />
                              <label class="form-check-label" for="opt1">
                                $5K-$10K
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check">
                              <input
                                id="opt2"
                                type="radio"
                                class="form-check-input d-none"
                                onChange={handleInputs}
                                name="budget"
                                value="$10K-$25K"
                              />
                              <label class="form-check-label" for="opt2">
                                $10K-$25K
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check">
                              <input
                                id="opt3"
                                type="radio"
                                class="form-check-input d-none"
                                // value={projectSubmited.budget}
                                onChange={handleInputs}
                                name="budget"
                                value="$25K-$50K"
                              />
                              <label class="form-check-label" for="opt3">
                                $25K-$50K
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check">
                              <input
                                id="opt4"
                                type="radio"
                                class="form-check-input d-none"
                                onChange={handleInputs}
                                name="budget"
                                // value={projectSubmited.budget}
                                value="More than $50K"
                                required=""
                              />
                              <label class="form-check-label" for="opt4">
                                More than $50K
                              </label>
                            </div>
                          </div>
                          
                        </div> */}
                        <div class="budget-section">
                          <div className="budget-section-container">
                            <input
                              type="radio"
                              id="html"
                              name="budget"
                              onChange={handleInputs}
                              value="$5k-10k"
                            />

                            <label for="html">$5k-10k</label> <br />

                          </div>
                          <div className="budget-section-container">
                            <input
                              type="radio"
                              id="css"
                              name="budget"
                              onChange={handleInputs}
                              value="$15k-30k"
                            />

                            <label for="css">$15k-30k</label> <br />

                          </div>
                          <div className="budget-section-container">
                            <input
                              type="radio"
                              id="js"
                              name="budget"
                              onChange={handleInputs}
                              value="$35k-50k"
                            />

                            <label for="js">$35k-50k</label> <br />

                          </div>
                          <div className="budget-section-container">
                            <input
                              type="radio"
                              id="morethan"
                              name="budget"
                              onChange={handleInputs}
                              value="$morethan50k"
                            />

                            <label for="morethan">$morethan50k</label> <br />

                          </div>
                        </div>





                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">

                      <div class="form-group files color">
                        <label>Project Brief</label>
                        <input
                            type="file"
                            name="file"
                            onChange={e => handleInputs(e)}

                          />
                        
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />

                  {/* services are you interested start */}
                  <div class="row justify-content-center">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="main_titles_form_head">
                        <h4>3. What services are you interested in?</h4>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label></label>
                        <div class="row">
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt5"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="Hire Dedicated Team"
                              />
                              <label class="form-check-label" for="opt5">
                                Hire Dedicated Team
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt6"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="Mobile App Services"
                              />
                              <label class="form-check-label" for="opt6">
                                Mobile App Services
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt7"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="IOT"
                              />
                              <label class="form-check-label" for="opt7">
                                IOT
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt8"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="Clone"
                              />
                              <label class="form-check-label" for="opt8">
                                Clone
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt9"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="Cloud"
                              />
                              <label class="form-check-label" for="opt9">
                                Cloud
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt10"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="Firmware"
                              />
                              <label class="form-check-label" for="opt10">
                                Firmware
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt12"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="Big Data"
                              />
                              <label class="form-check-label" for="opt12">
                                Big Data
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt13"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="SAP Services"
                              />
                              <label class="form-check-label" for="opt13">
                                SAP Services
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt14"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="Blockchain"
                              />
                              <label class="form-check-label" for="opt14">
                                Blockchain
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt15"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="Software Development"
                              />
                              <label class="form-check-label" for="opt15">
                                Software Development
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt16"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="eCommerce Development"
                              />
                              <label class="form-check-label" for="opt16">
                                eCommerce Development
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt17"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="Web Development"
                              />
                              <label class="form-check-label" for="opt17">
                                Web Development
                              </label>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div class="form-check ">
                              <input
                                id="opt18"
                                type="checkbox"
                                class="form-check-input d-none"
                                name="proj_select_category[]"
                                value="Not Listed Above"
                              />
                              <label class="form-check-label" for="opt18">
                                Not Listed Above
                              </label>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
          <div class="sub_btn">
            <div class="row justify-content-center">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">

                <button id="submit" class="submit_btn" onClick={PostData}>
                  Submit
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
