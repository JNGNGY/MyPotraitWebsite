import React from 'react'
import {FaInstagram, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import './Footer.css'

function Footer() {

    const toggleHome = () => {
        scroll.scrollToTop({duration: 500})
    }

    return (
        <div>
            <div className="container-footer">
                <div className="wrapper-footer">
                    <div className="link-footer">
                        <div className="link-wrapper-footer">
                            <div className="item-footer">
                                <div className="title-footer">Portfolie</div>
                                <div className="text-footer">Aboutme</div>
                                <div className="text-footer">Service</div>
                                <div className="text-footer">Experience</div>
                                <div className="text-footer">Skills</div>
                            </div>
                            <div className="item-footer">
                                <div className="title-footer">Social Media</div>
                                <div className="text-footer">Aboutme</div>
                                <div className="text-footer">Service</div>
                                <div className="text-footer">Experience</div>
                                <div className="text-footer">Skills</div>
                            </div>
                        </div>
                        <div className="link-wrapper-footer">
                            <div className="item-footer">
                                <div className="title-footer">Address</div>
                                <div className="text-footer">Aboutme</div>
                                <div className="text-footer">Service</div>
                                <div className="text-footer">Experience</div>
                                <div className="text-footer">Skills</div>
                            </div>
                            <div className="item-footer">
                                <div className="title-footer">Address</div>
                                <div className="text-footer">Aboutme</div>
                                <div className="text-footer">Service</div>
                                <div className="text-footer">Experience</div>
                                <div className="text-footer">Skills</div>
                            </div>
                        </div>
                    </div>
                    <div className="socialmedia-footer">
                        <div className="socialwrapper-footer">
                            <div className="logo-footer" onClick={toggleHome}>Nguyen Jan</div>
                            <div className="websiteright-footer">Jan Nguyen © {new Date().getFullYear()} All rights reserved.</div>
                            <div className="socialicon-footer">
                                <div className="icon-footer">
                                    <FaInstagram />
                                </div>
                                <div className="icon-footer">
                                    <FaLinkedin />
                                </div>
                                <div className="icon-footer">
                                    <FaFacebook />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
