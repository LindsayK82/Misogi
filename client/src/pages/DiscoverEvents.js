import React from 'react';
import { Link } from 'react-router-dom';
import '../pagestyle/register-events.css';

const DiscoverEvents = ({
    events,
    title,
    description,
    showTitle = true,
    showDescription = true
}) => {
    return (
        <div style={{ width: '', display:'flex', flexDirection:'row' }}>

            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    {showTitle && <h5 className="card-title">{title}</h5>}
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <p>
                    {' '}
                    <Link to="/register-events">Click here to register.</Link>
                </p>
            </button>
            </div>
            

            <div className="card" style={{ width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <p>
                    {' '}
                    <Link to="/register-events">Click here to register.</Link>
                </p>
            </button>
            </div>

            <div className="card" style={{ width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <p>
                    {' '}
                    <Link to="/register-events">Click here to register.</Link>
                </p>
            </button>
            </div>

        </div>
    );
};

export default DiscoverEvents;



