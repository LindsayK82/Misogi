import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({
  events,
  title,
  description,
  showTitle = true,
}) => {
  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  return (
    <div style={{ width: '', display:'flex', flexDirection:'row' }}>
      {showTitle && <h3>{title}</h3>}
      {events &&
        events.map((event) => (
          <div key={event._id} className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    {showTitle && <h5 className="card-title">{event.title}</h5>}
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">{event.description}</p>
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <p>
                    {' '}
                    <Link to="/register-events">Click here to register.</Link>
                </p>
            </button>
            </div>
        ))}
      
    </div>
  );
};

export default EventList;
