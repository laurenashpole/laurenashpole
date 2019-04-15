import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { NAV_LINKS } from './constants/navLinks';
import { sendPageview } from '../utilities/analytics';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Homepage from './homepage/Homepage';
import Contact from './contact/Contact';
import Fonts from './fonts/Fonts';
import Font from './fonts/Font';
import Licensing from './fonts/Licensing';
import Eula from './fonts/Eula';
import Confirmation from './fonts/Confirmation';

class Site extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fonts: window.APP.fonts,
    };
  }

  componentDidMount () {
    sendPageview();

    if (window.APP.settings.hideEmailModal) {
      window.localStorage.setItem('hideEmailModal', true);
    }
  }

  render () {
    return(
      <BrowserRouter>
        <ScrollToTop>
          <Header navLinks={NAV_LINKS} enableAnalytics={true} />
          <Switch>
            <Route exact path="/" render={(props) =>
              <Homepage font={this.state.fonts.filter((font) => font.slug === 'hellmuth')[0]} />
            }/>
            <Route exact path="/fonts" render={(props) =>
              <Fonts fonts={this.state.fonts} {...props} />
            }/>
            <Route path="/fonts/licensing" component={Licensing} />
            <Route path="/fonts/eula" component={Eula} />
            <Route exact path="/fonts/:slug" render={(props) =>
              <Font fonts={this.state.fonts} {...props} />
            }/>
            <Route path="/fonts/:slug/confirm" render={(props) =>
              <Confirmation fonts={this.state.fonts} {...props} />
            }/>
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default Site;
