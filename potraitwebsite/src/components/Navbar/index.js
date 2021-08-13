import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/index';
import './Navbar.css';


const Navbar = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    return (
        <>
           <div className="Nav">
               <div className="NavbarContainer">
                   <div className="NavLogo" >
                       Nguyen Jan
                   </div>
                   <div className="MobileIcon" onClick={handleClick}>
                        <FaBars />
                   </div>
                   <div className="NavMenu">
                       <div className="NavITem">
                           <Link className="NavLinks">
                                About Me
                           </Link>
                       </div>
                       <div className="NavITem">
                           <div className="NavLinks" to='about'>
                                Experience
                           </div>
                       </div>
                       <div className="NavITem">
                           <div className="NavLinks" to='about'>
                                Skills
                           </div>
                       </div>
                       <div className="NavITem">
                           <div className="NavLinks" to='about'>
                                FreeTime
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    );
};

export default Navbar;