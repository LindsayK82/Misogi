import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import childHoldingPlasticBottle from "../../assets/images/homepage/childHoldingPlasticBottle.png"

function Carousels() {
    return(
        <center>

        <Carousel>
        <div>
            <img src={childHoldingPlasticBottle} alt="image1" />
            <p className="legend-1">Let us make your day!
            </p>
        </div>  
        {/* <div>
            <img src="../../ass=" alt="image1" />
            <p className="legend-1">Vegan-friendly.</p>
        </div> 
        <div>
            <img src="https://res.cloudinary.com/simpleview/image/upload/v1648149199/clients/sanmateoca/Plate_of_food_at_a_restaurant_during_brunch_hours_26a1bed1-cc7d-487a-9f9b-5e3ae09035e5.jpg" alt="image1" />
            <p className="legend-1">A 100% plant-based cafe with non-dairy options available.</p>
        </div>

        <div>
            <img src="https://images.squarespace-cdn.com/content/v1/5418a5bae4b0877352524377/1457311229099-7630L329V1EVI1ISHEMT/image-asset.jpeg?format=1000w" alt="image1" />
            <p className="legend-1">Connected. Organic. Alive. Natural.
            </p>
        </div>  
        <div>
            <img src="https://www.lovemydress.net/wp-content/uploads/2021/04/Elmore-Court-Lavender-Wedding-990x660.jpg" alt="image1" />
            <p className="legend-1">Memories and joy!
            </p>
        </div>  
        <div>
            <img src="https://www.aimeeprovence.com.au/wp-content/uploads/2021/06/what-to-waer-to-high-tea.jpg" alt="image1" />
            <p className="legend-1">It's the coffee that makes the neighborhood.</p>
        </div> */}
    </Carousel></center>
    )
}

export default Carousels