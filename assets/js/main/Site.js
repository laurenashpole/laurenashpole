import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
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
    if (window.APP.settings.hideEmailModal) {
      window.localStorage.setItem('hideEmailModal', true);
    }
  }

  render () {
    return(
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route exact path="/" render={(props) =>
              <Homepage fonts={this.state.fonts} {...props} />
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
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default Site;
