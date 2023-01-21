import React from 'react';
import { useQuery } from '@apollo/client';
import '../pagestyle/discover-events.css';

import EventList from '../components/EventList';

import { QUERY_EVENTS } from '../utils/queries';


const DiscoverEvents = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.events || [];
  console.log(events)
  return (
    <div className='discoverevents-container'>
      <div className='discoverevents-card'>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EventList
              events={events}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverEvents;



