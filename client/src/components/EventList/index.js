import React from 'react';
import { Link } from 'react-router-dom';
import '../../pagestyle/register-events.css';
import "./index.css"
import { Card } from "antd"

const EventList = ({
  events,
  title,
  description,
  showTitle = true,
}) => {
  if (!events) {
    return <h4>No Events Registered Yet</h4>;
  }

  
  return (
    <div className='eventmap'>
      {events &&
        events.map((event) => (
          <Card key={event._id} className="card col-3">
            <div className="card-body">
              {showTitle && <h5 className="card-title">{event.title}</h5>}
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">{event.description}</p>
            </div>
            <button type="button" className="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <p>
                {' '}
                <Link to="/register-events">Click here to register.</Link>
              </p>
            </button>
          </Card>
        ))}

    </div>
  );
};

export default EventList;
