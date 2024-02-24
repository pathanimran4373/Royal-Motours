import React from "react";
import {
  FaFacebookSquare,
  FaFacebookMessenger,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="box-container">
        {/* Box 1: Our Branches */}
        <div className="box">
          <h3>our branches</h3>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> india
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> japan
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> france
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> russia
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> USA
          </a>
        </div>

        {/* Box 2: Quick Links */}
        <div className="box">
          <h3>quick links</h3>
          <a href="#">
            <i className="fas fa-arrow-right"></i> home
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> vehicles
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> services
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> featured
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> reviews
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> contact
          </a>
        </div>

        {/* Box 3: Contact Info */}
        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            <i className="fas fa-phone"></i> +123-456-7890
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> +111-222-3333
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> shaikhanas@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> mumbai, india - 400104
          </a>
          {/* Social Media Icons */}
          <div className="boxIcon">
            <span>
              <FaFacebookSquare />
            </span>
            <span>
              <FaFacebookMessenger />
            </span>
            <span>
              <FaInstagramSquare />
            </span>
            <span>
              <FaTwitterSquare />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
