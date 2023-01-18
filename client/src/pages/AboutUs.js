
import React from 'react';
import TurtleAndOcean from "../assets/images/aboutus/turtleOcean.png"



const AboutUs = () => {

    return (
        <main>
            <div className='row'>
                <div className='col-md-6'>
                    <h2>About Us</h2>
                    <br/>
                    <p></p>
                </div>
                <div className='col-md-6'>
                    <img src={TurtleAndOcean} style={{ width: "100%" }} alt="turtle swimming in ocean with plastic bag" />
                </div>
            </div>
            <br />
            <br />
        </main>
    );
};

export default AboutUs;
