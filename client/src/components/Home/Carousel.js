import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import childHoldingPlasticBottle from "../../assets/images/homepage/childHoldingPlasticBottle.png"
import redwood from "../../assets/images/homepage/redwood.png"
import oceanPlastics from "../../assets/images/homepage/oceanPlastics.png"


function Carousels() {
    return(
        <center>

        <Carousel>
        <div>
            <img src={childHoldingPlasticBottle} alt="Child" />
            <p className="Picture">plastic
            </p>
        </div>  
        <div>
            <img src={redwood} alt="Tree" />
            <p className="Picture">love trees</p>
        </div> 
        <div>
            <img src={oceanPlastics} alt="Plastics in Ocean" />
            <p className="Picture">love the ocean</p>
        </div> 

    </Carousel></center>
    )
}

export default Carousels