import React from 'react'
import StartSection from '../components/StartSection';
import Aboutme from '../components/Aboutme';
import Services from '../components/Services'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

export const Home = () => {
    
    return (
        <>
            <Navbar />
            <StartSection /> 
            <Aboutme />
            <Services />
            <Footer />
        </>
    )
}

export default Home
