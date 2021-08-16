import React from 'react'
import './StartSecion.css'
import Video from '../../videos/video.mp4'
import Typed from 'react-typed'

function StartSection () {
    return (
        <div className="container">
            <div className="background">
                <video className="video" autoPlay loop muted src={Video} type='video/mp4'></video>
            </div>
            <div className="content">
                <div className="title">
                    Hey I'm Nguyen Jan
                </div>
                <div className="text">
                    <Typed className="typed-text" strings={["Teamwork", "Social", "Helpful", "Friendly", "Reliable"]} typeSpeed={70} backSpeed={90} loop/>
                </div>
            </div>
        </div>
    )
}

export default StartSection