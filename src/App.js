import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NewsletterPage from './pages/NewsletterPage'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={['/', '/rafael_hernandez']}>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/connect">
            <ContactPage />
          </Route>
          <Route path="/sign-up">
            <NewsletterPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
