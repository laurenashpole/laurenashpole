import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NAV_LINKS } from './constants/navLinks';
import ScrollToTop from '../../components/ScrollToTop';
import Header from '../../components/Header';
import Index from './pages/Index';
import Edit from './pages/Edit';
import Create from './pages/Create';
import Logout from '../users/pages/Logout';

class Fonts extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fonts: window.APP.fonts
    };
  }

  handleCreate = (activeFont) => {
    this.setState((prevState) => ({
      fonts: [activeFont, ...prevState.fonts]
    }));
  }

  handleEdit = (activeFont) => {
    this.setState((prevState) => {
      const index = prevState.fonts.findIndex((font) => font._id === activeFont._id);
      prevState.fonts.splice(index, 1, activeFont);
      return { fonts: prevState.fonts };
    });
  }

  handleDelete = (activeFont) => {
    this.setState((prevState) => ({
      fonts: prevState.fonts.filter((font) => font._id !== activeFont._id)
    }));
  }

  render () {
    return (
      <ScrollToTop>
        <Header navLinks={NAV_LINKS} />

        <main className="main main--bg-fixed container container--medium">
          <Switch>
            <Route exact path="/admin" component={() =>
              <Index fonts={this.state.fonts} onDelete={this.handleDelete} />
            } />
            <Route path="/admin/fonts/create" component={() =>
              <Create onCreate={this.handleCreate} />
            } />
            <Route path="/admin/fonts/:id" component={(props) =>
              <Edit font={this.state.fonts.filter((font) => font._id === props.match.params.id)[0]} onEdit={this.handleEdit} />
            } />
            <Route path="/admin/logout" component={Logout}/>
            <Redirect to="/admin" />
          </Switch>
        </main>
      </ScrollToTop>
    );
  }
}

export default Fonts;