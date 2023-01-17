import React from 'react';
import ChildHoldingPlasticBottle from '../assets/images/childHoldingPlasticBottle.png'


const Home = () => {  

  return (
    <main>
      <div>
        <h4>Fast fashion is the second biggest source of environmental pollution on Earth. 
          According to a study, nearly 20 to 25% of waste is created by the fashion industry alone, combined with the plastic industry, this waste percentage reaches up to shocking levels. 
          We all are well aware of the fact that plastic is a non-biodegradable material that we are seeing take over our oceans, beaches - well the whole world!</h4>
      </div>
      <img src={ChildHoldingPlasticBottle} style={{ width: "100%" }} alt="misogi logo" />
    </main>
  );
};

export default Home;
