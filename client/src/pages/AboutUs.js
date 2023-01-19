
import React from 'react';
import "../pagestyle/aboutus-stylesheet.css"

const AboutUs = () => {

    return (
        <main>        

            <div className='aboutus-container'>
                <div className='aboutus-card' data-tilt>
                    <h2>About Us</h2>
                    <p>
                        Misogi is dedicated to raising awareness around plastic pollution in our oceans.
                        Misogi has created a community and a space where artists, leaders, businesses and more can come together to raise awareness about pollution in our oceans, and help drive solutions to the pollution problem. Misogi is working to change consumer behavior and drive consumers toward more sustainable options that can help keep our oceans clean.
                        Avoiding single-use plastic is core to our mission and educating yourself on recycling and composting is key to intercepting plastic that might be headed for landfills and oceans. Redesigning plastic is about redesigning society to use alternatives to plastic, as well as thinking through ways that plastic can be designed sustainably.
                        Misogi through collaboration and driving awareness, we can change the world.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;
