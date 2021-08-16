import React from 'react'
import './Services.css'
import AboutImg from '../../images/Profil.jpg'

function Aboutme () {
    return (
        <div className="container-aboutme" id='services'>
            <div className="wrapper-aboutme">
                <div className="info-row">
                    <div className="column1">
                        <div className="text-wrapper">
                            <div className="top-aboutme">let me introduce myself</div>
                            <div className="title-aboutme">About Me</div>
                            <div className="text-aboutme">My name is Jan Nguyen (20) and I am doing an apprenticeship as a Betriebsinformatiker EFZ (3nd year of apprenticeship). The IT world fascinates me again and again, because there are so many different subject areas and you can always learn something new in them. I enjoy working in a team and am a sociable, helpful and reliable person. In my free time I play football in a club and do many other sports such as skiing or basketball. In addition, I like to go on trips and go out with friends a lot.</div> 
                        </div>
                    </div>
                    <div className="column2">
                        <div className="img-wrapper">
                            <img src={AboutImg} alt="Foto of me"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme