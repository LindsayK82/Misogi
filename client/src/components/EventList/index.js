import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({
  events,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {events &&
        events.map((Event) => (
          <div key={Event._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${Event.user}`}
                >
                  {Event.description} <br />
                  
                </Link>
              ) : (
                <>
                 
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{Event.title}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/Events/${Event._id}`}
            >
              Join the discussion on this Event.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default EventList;
