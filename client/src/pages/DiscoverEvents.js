import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverEvents = () => {
    return (
<div>

    hello world
<div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
<p>
       {' '}
                <Link to="/register-events">Click here to register.</Link>
              </p>
</button>




</div>
    );
};

export default DiscoverEvents;



