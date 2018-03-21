import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
      fonts: []
    };
  }

  componentWillMount () {
    this.setState({
      fonts: window.APP.fonts
    });
  }

  render () {
    return(
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => {
            return <main className="main">Homepage</main>
          }}/>
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
      </Fragment>
    );
  }
}

export default Site;
