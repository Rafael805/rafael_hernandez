import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/connect">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
