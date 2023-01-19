import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Nav/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import HowItsMade from './pages/HowItsMade';
import AboutUs from './pages/AboutUs';
import DiscoverEvents from './pages/DiscoverEvents';
import DiscoverStyles from './pages/DiscoverStyles';
import RegisterEvents from './pages/RegisterEvents';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <Header />
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
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
                path="/discover-styles" 
                element={<DiscoverStyles />}
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
