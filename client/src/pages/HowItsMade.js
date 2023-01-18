
import React from 'react';
import PlasticProcess from "../assets/images/howitsmade/plasticProcessing.png"
import PlasticChips from "../assets/images/howitsmade/plasticChips.png"
import CollectPlastic from "../assets/images/howitsmade/collectPlastic.png"
import FabricFromPlastic from "../assets/images/howitsmade/fabricFromPlastic.png"
import PlasticYarn from "../assets/images/howitsmade/plasticYarn.png"


const HowItsMade = () => {

    return (
        <main>
            <div className='row'>
                <h1>How Do You Turn Plastic Into Yarn / Thread?</h1>
            </div>
            <br />
            <br />
            <div className='row'>
                <div className='col-md-6'>
                    <h3>Step #1 Collect Plastic: </h3>
                    <p>
                        The first step is collecting plastic from the landfills, oceans, or even cities.
                        It is massively important to ensure this doesn’t harm the natural habitat of animals and marine life.
                        From plastic bottles to containers, all plastic products are gathered up and sent to a plastic processing factory.
                    </p>
                </div>
                <div className='col-md-6'>
                    <img src={CollectPlastic} style={{ width: "100%" }} alt="collecting plastic of beach" />
                </div>
            </div>
            <br />
            <br />
            <div className='row'>
                <div className='col-md-6'>
                    <h3>Step #2 Break It Down: </h3>
                    <p>
                        Those plastic products are separated, and the recyclable plastic is passed through a chopping machine that breaks everything down into small chips, once all the paper labels are removed.
                        Those chunky plastic chips are further processed to turn them into the machine to make them finer.
                    </p>
                </div>
                <div className='col-md-6'>
                    <img src={PlasticProcess} style={{ width: "100%" }} alt="plastic in factory for processing" />
                </div>
            </div>
            <br />
            <br />
            <div className='row'>
                <div className='col-md-6'>
                    <h3>Step #3 Melt The Chips:</h3>
                    <p>
                        All the processed, fine plastic chips are thrown into a melting machine that treats the plastic at high heat.
                        The melted plastic is then filtered to remove any kind of impurity.
                        This step is essential to bring the plastic to phase-1 of the recycled fabric making process.
                    </p>
                </div>
                <div className='col-md-6'>
                    <img src={PlasticChips} style={{ width: "100%" }} alt="pile of plastic chips" />
                </div>
            </div>
            <br />
            <br />
            <div className='row'>
                <div className='col-md-6'>
                    <img src={PlasticYarn} style={{ width: "100%" }} alt="yarn spun from plastic" />
                </div>
                <div className='col-md-6'>
                    <h3>Step #4 Spin It Into Yarn:</h3>
                    <p>
                        Once all the plastic is melted and filtered, it goes through the spinning process.
                        The melted plastic is turned into polyester yarns and spun together with the yarn of choice to make the plastic fabric wearable.
                        The yarn is collected and passed on to the weaving department.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className='row'>
                <div className='col-md-6'>
                    <img src={FabricFromPlastic} style={{ width: "100%" }} alt="clothes made from plastic" />
                </div>
                <div className='col-md-6'>
                    <h3>Step #5 Weave The Fabric:</h3>
                    <p>
                        The last step is weaving the polyester into the fabric.
                        You can make anything, it is all up to your imagination!
                    </p>
                </div>
            </div>
            <br />
            <br />
        </main>
    );
};

export default HowItsMade;
