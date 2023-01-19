

import React from 'react';
import "../pagestyle/discoverstyle.css"
import BlackShirt from "../assets/images/discoverstyles/blackshirt.png"

const DiscoverStyles = () => {

    return (
        <main>
            <div className='discoverstyles-container'>
                <div className='discoverstyles-card'>
                    <img src={BlackShirt} /> 
                    <h2>Donate</h2>
                    <p>
                        If you would like to support us Donate
                        $50 and receive a T-Shirt made from ocean plastic!
                    </p>
                </div>
            </div>
        </main>
    );
};

export default DiscoverStyles;
