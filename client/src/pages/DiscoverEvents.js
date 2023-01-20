import React from 'react';
import { useQuery } from '@apollo/client';
import '../pagestyle/register-events.css';

import EventList from '../components/EventList';

import { QUERY_EVENTS } from '../utils/queries';


const DiscoverEvents = () => {
    const { loading, data } = useQuery(QUERY_EVENTS);
    const events = data?.events || [];
console.log(events)
    return (
        <div>

             <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EventList
              events={events}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>

        </div>
    );
};

export default DiscoverEvents;



