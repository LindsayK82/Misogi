import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/homepage/misogiLogo.png'

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">       
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-md btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/discover-events">
                Discover Events
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/discover-styles">
                Discover Styles
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/how-its-made">
                How it's Made
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/about-us">
                About Us
              </Link>
              <button className="btn btn-md btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-md btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/signup">
                Signup
              </Link>              
              <Link className="btn btn-md btn-light m-2" to="/discover-events">
                Discover Events
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/discover-styles">
                Discover Styles
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/how-its-made">
                How it's Made
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/about-us">
                About Us
              </Link>
            </>
          )}
        </div>
        <div>
          <Link className="text-light" to="/">
            <img src={logoImage} style={{ width: "20%" }} alt="misogi logo" />
          </Link>          
        </div>
      </div>
    </header>
  );
};

export default Header;
