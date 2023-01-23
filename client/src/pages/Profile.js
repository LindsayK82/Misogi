

import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm'
import "../pagestyle/user-profile.css"


import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';


const Profile = () => {
  const { username: userParam } = useParams();
  const [user, setUser] = useState({})
  
  
  const { loading, data } = useQuery(userParam ? QUERY_USER :QUERY_ME, {
    variables: { username: userParam }
  })
  
  
  useEffect(() => {    
    const user = data?.me || data?.user || {};
    console.log(user)
  }, [data])

  
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }


  return (
    <div>
      <div className="flex-row justify-center mb-3" >
        <div className="col-12 col-md-10 text-light p-3 mb-5">
          <div className='userprofile-container'>
            <div className='userprofile-card'>
              <h2>
                Viewing {userParam ? `${user.username}'s` : 'your'} profile.
              </h2>

              <div >
               <h4>
                Updates Coming Soon
               </h4>
              </div>
              {!userParam && (
                <div>
                  
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
