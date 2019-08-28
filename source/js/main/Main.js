import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NAV_LINKS } from './constants/navLinks';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Footer from './components/Footer';
import Error from './error/Error';
import Homepage from './homepage/Homepage';
import Contact from './contact/Contact';
import Fonts from './fonts/pages/Fonts';
import Font from './fonts/pages/Font';
import Licensing from './fonts/pages/Licensing';
import Eula from './fonts/pages/Eula';
import Confirmation from './fonts/pages/Confirmation';
import '../../sass/main.scss';

const Main = (props) => {
  const {
    fonts
  } = props;

  return(
    <BrowserRouter>
      <ScrollToTop enableAnalytics={true}>
        <Header navLinks={NAV_LINKS} enableAnalytics={true} />

        <Switch>
          <Route exact path="/" render={() =>
            <Homepage font={fonts.filter((font) => font.slug === 'thornback')[0]} />
          }/>
          <Route exact path="/fonts" render={(props) =>
            <Fonts fonts={fonts} {...props} />
          }/>
          <Route path="/fonts/licensing" component={Licensing} />
          <Route path="/fonts/eula" component={Eula} />
          <Route exact path="/fonts/:slug" render={(props) =>
            <Font fonts={fonts} {...props} />
          }/>
          <Route path="/fonts/:slug/confirm" render={(props) =>
            <Confirmation fonts={fonts} {...props} />
          }/>
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

Main.propTypes = {
  fonts: PropTypes.array
};

export default Main;