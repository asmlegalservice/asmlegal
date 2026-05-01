import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
import logo from "../../assets/ASM_Main_Logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">

          {/* LEFT */}
          <div className="col-md-4">
            <h4 className="logo"><img src={logo} alt="ASM Legal Services" />Legal Services</h4>
            <p className="footer-text">
              ASM Legal Services is a professional legal services provider.
              Suitable for law firm, injury law, traffic ticket attorney, legacy and more.
            </p>

            <div className="social-icons">
              <span><FaFacebookF /></span>
              <span><FaTwitter /></span>
              <span><FaInstagram /></span>
              <span><FaDribbble /></span>
            </div>
           <div className="contact-section services-section">
            <p>adv.abduloffice@gmail.com</p>
            <p>+91 98234 56789</p>
           </div>
          </div>

          {/* COMPANY */}
          <div className="col-md-2 col-6 services-section">
            <h5>Services We Facilitate</h5>
            <ul>
              <li>About Us</li>
              <li>Our Advisors</li>
              <li>Testimonial</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-md-2 col-6 services-section">
            <h5>
              Quick Links
            </h5>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>


          {/* Office address */}
          <div className="col-md-4">
            <div className="newsletter-box">
              <h6>Office Address</h6>
              <p>
                103/3/3, Unit No. 409, 4th Floor, Krystal Square, <br /> E Ward, Nagala Park, Near Khanvilkar Pump, Kolhapur - 416 003
              </p>

              <div className="input-group">

                <button>Get Directions</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="container d-flex justify-content-between flex-wrap">
          <p>@ 2026 ASM Legal Services. All rights reserved.</p>
          <div className="links">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;