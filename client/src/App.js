import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import HowItsMade from './pages/HowItsMade';
import AboutUs from './pages/AboutUs';
import DiscoverEvents from './pages/DiscoverEvents';
import Donate from './pages/Donate';
import RegisterEvents from './pages/RegisterEvents';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/how-its-made" 
                element={<HowItsMade />}
              />
              <Route 
                path="/discover-events" 
                element={<DiscoverEvents />}
              />
               <Route 
                path="/donate" 
                element={<Donate />}
              />
              <Route 
                path="/about-us" 
                element={<AboutUs />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              />  
              <Route 
                path="/register-events" 
                element={<RegisterEvents />}
              />              
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
