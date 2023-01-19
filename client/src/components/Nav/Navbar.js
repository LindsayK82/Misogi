import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/homepage/misogiLogo.png'

import Auth from '../../utils/auth';

const NavBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">       
        <div className ="row">
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-md btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-md btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <div>
          <Link className="text-light" to="/">
          <img
            alt="logo"
            src={logoImage}
            width="90"
            height="90"
            className="d-inline-block align-top"
           
          />
          </Link>          
        </div>
              <Link className="btn btn-md btn-light m-5" to="/discover-events">
                Events
              </Link>
              <Link className="btn btn-md btn-light m-5" to="/discover-styles">
                Styles
              </Link>
              <Link className="btn btn-md btn-light m-5" to="/how-its-made">
                How it's Made
              </Link>
              <Link className="btn btn-md btn-light m-5" to="/about-us">
                About Us
              </Link>
              <Link className="btn btn-md btn-info m-5" to="/login">
                Login
              </Link>
              <Link className="btn btn-md btn-light m-5" to="/signup">
                Signup
              </Link>              
            </>
          )}
        </div>
        
      </div>
    </header>
  );
};

export default NavBar;
