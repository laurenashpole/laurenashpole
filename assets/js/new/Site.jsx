import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Fonts from './components/Fonts';

const Site = () => (
  <Fragment>
    <Header />
    <Route exact path="/" render={(props) => {
      return <main className="main">Homepage</main>
    }}/>
    <Route path="/fonts"  component={Fonts} />
    <Route path="/contact"  component={Contact} />
    <Footer />
  </Fragment>
);

export default Site;