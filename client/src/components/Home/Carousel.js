

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Oceans from "../../assets/images/carousel/ocean.png"
import PlasticsDrift from "../../assets/images/carousel/plasticDrift.png"
import Forest from "../../assets/images/carousel/forest.png"
import Deforestation from "../../assets/images/carousel/deforestation.png"
import MarineLife from "../../assets/images/carousel/marineLife.png"








function Carousels() {
    return (
        <center>
            <Carousel>
                <div>
                    <img src={Oceans} alt="picture of the ocean" />
                    <p className="Picture">
                        THE OCEAN REGULATES CLIMATE
                    </p>
                </div>
                <div>
                    <img src={PlasticsDrift} alt="plastic drift in the ocean" />
                    <p className="Picture">
                        Every minute of every day a truckload of plastic is dumped into the ocean.
                    </p>
                </div>
                <div>
                    <img src={Forest} alt="picture of the Tongass National Forest" />
                    <p className="Picture">
                        Rainforests produce about 20% of our oxygen and store a huge amount of carbon dioxide, drastically reducing the impact of greenhouse gas emissions.
                        Massive amounts of solar radiation are absorbed, helping regulate temperatures around the globe
                    </p>
                </div>
                <div>
                    <img src={Deforestation} alt="picture of the forest degradation" />
                    <p className="Picture">
                        We Lose Around 10 Million Hectares of Forest Every Single Year
                    </p>
                </div>
                <div>
                    <img src={MarineLife} alt="picture of marine life" />
                    <p className="Picture">
                        
                    </p>
                </div>
            </Carousel>
        </center>
    )
}

export default Carousels