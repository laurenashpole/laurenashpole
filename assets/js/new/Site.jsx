import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Fonts from './components/Fonts';
import Font from './components/Font';
import Licensing from './components/fonts/Licensing';
import Eula from './components/fonts/Eula';

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
          <Route path="/fonts/:slug" render={(props) =>
            <Font fonts={this.state.fonts} {...props} />
          }/>
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Site;
