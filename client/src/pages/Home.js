import React from 'react';
import ChildHoldingPlasticBottle from '../assets/images/homepage/childHoldingPlasticBottle.png'
import OceanPlastic from '../assets/images/homepage/oceanPlastics.png'
import Redwoods from '../assets/images/homepage/redwood.png'


const Home = () => {

  return (
    <main>
      <div className='row'>
        <div className='col-md-6'>
          <img src={ChildHoldingPlasticBottle} style={{ width: "100%" }} alt="misogi logo" />
        </div>
        <div className='col-md-6'>
          <h4>Fast fashion is the second biggest source of environmental pollution on Earth.
            According to a study, nearly 20 to 25% of waste is created by the fashion industry alone, combined with the plastic industry, this waste percentage reaches up to shocking levels.
            We all are well aware of the fact that plastic is a non-biodegradable material that we are seeing take over our oceans!</h4>
        </div>
      </div>
      <br />
      <br />
      <div className='row'>
        <div className='col-md-6'>
          <h3>You can do your part and RECYCLE</h3>
          <p>"Humans use about 1.2 million plastic bottles per minute. Only 56% are recycled"</p>
          <p>According to UNESCO, plastic waste accounts for the deaths of more than a million seabirds every year, along with over 100,000 marine mammals.</p>
          <p>The United Kingdom’s Environmental Investigations Agency (EIA) says that plastic will outweigh fish in the planet’s oceans by 2050.</p>
          <p>According to the National Ocean Service, the vast majority of ocean pollution — a whopping 80 percent — comes from the land. It’s often caused by something called nonpoint source pollution, which occurs when the rain or melting snow picks up garbage on the ground, carrying the runoff into waterways.</p>
        </div>
        <div className='col-md-6'>
          <img src={OceanPlastic} style={{ width: "100%" }} alt="plastic in ocean" />
        </div>
      </div>
      <br/>
      <br/>
      <div className='row'>        
        <div>
          <img src={Redwoods} style={{ width: "100%" }} alt="plastic in ocean" />
        </div>
        <div className='col-8'>
          <h3>Lets tackle the Global Warming Problem Together</h3>
          <h5>Using recycled instead of virgin polyester produces fewer carbon emissions. Giving plastic bottles a second life keeps them out of oceans and landfills.</h5>
        </div>
      </div>
    </main>
  );
};

export default Home;
