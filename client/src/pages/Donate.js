

import React from 'react';
import "../pagestyle/donate.css"
import BlackShirt from "../assets/images/discoverstyles/blackshirt.png"

const Donate = () => {

    return (
        <main>
            <div className='discoverstyles-container'>
                <div className='discoverstyles-card'>
                    <img src={BlackShirt} /> 
                    <div>
                        <h5>
                            If you would like to support us Donate $50 and receive a T-Shirt made from ocean plastic!
                            All profits go towards organizations who are fighting climate change!
                        </h5>
                    </div>
                    <form action="/create-checkout-session" method="POST">
                        <button type="submit">
                            Donate
                        </button>
                    </form>                   
                </div>
            </div>
        </main>
    );
};

export default Donate;
