import React, { useState } from 'react'
import logo from '../Images/profile.png';
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import LogoutButton from '../logout/LogoutButton';
 
const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  const handleButtonToggle = () =>{
    setShowMenu(!showMenu);
  }
  return (
    <>
    <div className='Navbar'>
         <img src={logo} className="Nav-logo" alt="logo" /> 
         <ul className='ul'>
          <li className='li1'><Link className="items" to="#" target="">Smart Attend</Link></li> 
         </ul>
        <div className={showMenu? "menu-mob" : "menu-web"}>
        <ul className='ul'>  
          <li className='li3'><Link className="items" to="/getAtt" target="">Get-Attendence</Link></li>
          <li className='li4'><Link className="items" to="/aboutus" target="">About Us</Link></li>
          <li className='li4'><Link className="items" to="/logsin" target="">Login</Link></li>
          <li className='li4'><Link to="/signup" className="items" href="#" target="">Signup</Link></li>
          
          
          </ul>
          
        </div>
    </div> 
    </>
    
  )
}

export default Navbar
