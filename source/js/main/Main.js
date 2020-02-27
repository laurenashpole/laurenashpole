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
    fonts,
    glyphs,
    tags
  } = props;

  return(
    <BrowserRouter>
      <ScrollToTop enableAnalytics={true}>
        <Header navLinks={NAV_LINKS} enableAnalytics={true} />

        <Switch>
          <Route exact path="/" render={() =>
            <Homepage font={fonts.filter((font) => font.slug === 'thornback')[0]} />
          }/>
          <Route exact path="/fonts" render={() =>
            <Fonts fonts={fonts} tags={tags} />
          }/>
          <Route path="/fonts/licensing" component={Licensing} />
          <Route path="/fonts/eula" component={Eula} />
          <Route exact path="/fonts/tagged/:tag" render={(routeProps) =>
            <Fonts fonts={tags[routeProps.match.params.tag] ? tags[routeProps.match.params.tag].fonts : []} tagName={tags[routeProps.match.params.tag] ? tags[routeProps.match.params.tag].name : routeProps.match.params.tag} {...routeProps} />
          }/>
          <Route exact path="/fonts/:slug" render={(routeProps) =>
            <Font font={fonts.filter((font) => font.slug === routeProps.match.params.slug)[0]} glyphs={glyphs} {...routeProps} />
          }/>
          <Route path="/fonts/:slug/confirm" render={(routeProps) =>
            <Confirmation font={fonts.filter((font) => font.slug === routeProps.match.params.slug)[0]} {...routeProps} />
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
  fonts: PropTypes.array,
  glyphs: PropTypes.object,
  tags: PropTypes.object
};

export default Main;