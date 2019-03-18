import React, { Fragment, Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NAV_LINKS } from './constants/navLinks';
import Header from '../../components/Header';
import List from './List';
import Edit from './Edit';
import Create from './Create';
import Logout from '../users/Logout';

class Fonts extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fonts: window.APP.fonts
    };
  }

  handleCreate = (activeFont) => {
    this.setState((prevState) => ({
      fonts: [...prevState.fonts, activeFont]
    }));
  }

  handleEdit = (activeFont) => {
    this.setState((prevState) => {
      let index = prevState.fonts.findIndex((font) => font._id === activeFont._id);
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
      <Fragment>
        <Header navLinks={NAV_LINKS} />
        <main className="main main--bg-fixed container container--medium">
          <Switch>
            <Route exact path="/admin" render={(props) =>
              <List fonts={this.state.fonts} onDelete={this.handleDelete} {...props} />
            }/>
            <Route path="/admin/fonts/create" render={(props) =>
              <Create fonts={this.state.fonts} onCreate={this.handleCreate} {...props} />
            }/>
            <Route path="/admin/fonts/:id" render={(props) =>
              <Edit fonts={this.state.fonts} onEdit={this.handleEdit} {...props} />
            }/>
            <Route path="/admin/logout" render={(props) =>
              <Logout />
            }/>
            <Redirect to="/admin" />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default Fonts;