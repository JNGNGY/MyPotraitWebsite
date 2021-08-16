import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false)

    const toggleHome = () => {
        scroll.scrollToTop({duration: 500})
    }

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <Link onClick={toggleHome} className="navbar-logo">
                    Nguyen Jan
                </Link >
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='aboutme' className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            About me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='services' className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='experience' className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='skills' className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Skills
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default Navbar;