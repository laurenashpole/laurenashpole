import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NAV_LINKS } from './constants/navLinks';
import ScrollToTop from '../../components/ScrollToTop';
import Header from '../../components/Header';
import Index from './pages/Index';
import Edit from './pages/Edit';
import Create from './pages/Create';
import Logout from '../users/pages/Logout';

const Fonts = () => {
  const [fonts, setFonts] = useState(window.APP.fonts || []);

  const handleCreate = (activeFont) => {
    setFonts((prevFonts) => {
      return [activeFont, ...prevFonts]
    });
  };

  const handleEdit = (activeFont) => {
    setFonts((prevFonts) => {
      const updatedFonts = [...prevFonts];
      const index = updatedFonts.findIndex((font) => font._id === activeFont._id);
      updatedFonts.splice(index, 1, activeFont);
      return updatedFonts;
    });
  };

  const handleDelete = (activeFont) => {
    setFonts((prevFonts) => {
      return prevFonts.filter((font) => font._id !== activeFont._id)
    });
  };

  return (
    <ScrollToTop>
      <Header navLinks={NAV_LINKS} />

      <main className="main main--bg-fixed container container--medium">
        <Switch>
          <Route exact path="/admin" component={() =>
            <Index fonts={fonts} onDelete={handleDelete} />
          } />
          <Route path="/admin/fonts/create" component={() =>
            <Create onCreate={handleCreate} />
          } />
          <Route path="/admin/fonts/:id" component={(routeProps) =>
            <Edit font={fonts.filter((font) => font._id === routeProps.match.params.id)[0]} onEdit={handleEdit} />
          } />
          <Route path="/admin/logout" component={Logout}/>
          <Redirect to="/admin" />
        </Switch>
      </main>
    </ScrollToTop>
  );
};

export default Fonts;