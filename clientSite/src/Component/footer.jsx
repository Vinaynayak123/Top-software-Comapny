import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-aboutus">
            <h6>ABOUT US</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit laborum.
              Consequuntur pariatur reprehenderit laborum inventore aliquam animi nulla delectus sunt?
              Molestias pariatur reprehenderit laborum inventore aliquam animi nulla delectus hic laboriosam iste.
              Expedita ipsam reprehenderit quo labore!</p>
          </div>
          <div className="footer-company">
            <h6>COMPANY</h6>
            <p>Blog</p>
            <p>FAQ's</p>
            <p>Badges</p>
            <p>Methodology</p>
            <p>Privacy Policy</p>
            <p>Press Releases</p>
            <p>Terms and conditions</p>
            <p>Listing Plans & Packages</p>
          </div>
          <div>
            <h6>CONTACT US</h6>
            {/* <p style={{ color:"#bab7b7"}}>contact@topcompany.in</p> */}
            <h6>WRITE FOR US</h6>
            <div className="footer-social">
              <h6>Social</h6>
              <img width="48" height="48" style={{ cursor: "pointer" }} src="https://img.icons8.com/color/48/facebook.png" alt="facebook" />
              <img width="48" height="48" style={{ cursor: "pointer" }} src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
              <img width="48" height="48" style={{ cursor: "pointer" }} src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1" />
            </div>
          </div>

        </div>
      </div>
      <p>
        <hr />
        © {new Date().getFullYear()} Your Website TopCompany. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    bottom: 0,
    width: "100%",
  },
};

export default Footer;
