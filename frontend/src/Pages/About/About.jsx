import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Logo from '../Images/back.jpg';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const quick_links = [
  
  { path: '/aboutus', display: 'About' },
  { path: '/getAtt', display: 'Get Attendance' }
];

const quick_links2 = [
  { path: '/logsin', display: 'Login' },
  { path: '/signup', display: 'Register' }
];

const About = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Logo & description */}
          <div className="col">
            <div className="logo">
              {/* <img src={Logo} alt="about" /> */}
              <p className='p'>
               Smart Attend is a web-based attendance system that uses OTP verification for secure and real-time attendance marking. Upon successful entry, students receive an instant WhatsApp confirmation.
              </p>
              <div className="social_links">
                <span><Link to="https://www.instagram.com/?hl=en"><FaInstagram /></Link></span>
                <span><Link to="https://github.com/devmuhib/MernStack-Tour-Management"><FaGithub /></Link></span>
                <span><Link to="https://www.facebook.com/"><PiFacebookLogoLight /></Link></span>
                <span><Link to="https://x.com/"><PiTwitterLogo /></Link></span>
              </div>
            </div>
          </div>

          {/* Discover Links */}
          <div className="col">
            <h5 className="footer_link-title">Discover</h5>
            <ul className="footer_quick-links">
              {quick_links.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col">
            <h5 className="footer_link-title">Quick Links</h5>
            <ul className="footer_quick-links">
              {quick_links2.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col">
            <h5 className="footer_link-title">Contact</h5>
            <ul className="footer_quick-links">
              <li>
                <h6>
                <HiOutlineLocationMarker />Address:
                </h6>
                <p>Hamirpur, India</p>
              </li>
              <li>
                <h6>
                <MdOutlineMailOutline />Email:
                </h6>
                <p>smartattend@gmail.com</p>
              </li>
              <li>
                <h6>
                <FaPhone />Phone:
                </h6>
                <p>+91 1234568079</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default About;
