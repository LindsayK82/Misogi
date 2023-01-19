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

            // style={{ marginRight: '2%' }}
          />{'    '}
          <Navbar.Brand as={Link} to="/" className="navbrand">
           Misogi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav.Link as={Link} to="/discover-events" className="navbrand">
              Events
            </Nav.Link>{'    '}
            <Nav.Link as={Link} to="/discover-styles" className="navbrand">
              Styles
            </Nav.Link>{'    '}
            <Nav.Link as={Link} to="/about-us" className="navbrand">
              About Us
            </Nav.Link>{'    '}
            <Nav.Link>
              {Auth.loggedIn() ? (
                <Nav.Link onClick={Auth.logout} className="navbrand" to="/">
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => setShowModal(true)}
                  className="navbrand"
                  to="/login"
                >
                  Login
                </Nav.Link>
              )}{'   '}
              
            </Nav.Link>{'   '}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        <Tab.Container defaultActiveKey="login">
          <Modal.Header>
            <Modal.Title>
              <Nav className="pills">
                <Nav.Item>
                  <Nav.Link className="link" eventKey="login">
                    Login
                  </Nav.Link>{'   '}
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="link" eventKey="signup">
                    Sign Up
                  </Nav.Link>{'   '}
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>{'   '}
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>{'   '}
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>

           
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
