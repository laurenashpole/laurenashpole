import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { sendEvent } from '../../../utilities/analytics';

const Fonts = ({ fonts }) => {
  const [filteredFonts, setFilteredFonts] = useState(fonts || []);
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    const updatedFilter = e.target.value;
    const updatedFonts = updatedFilter ? fonts.filter((font) => font.name.toUpperCase().indexOf(updatedFilter.toUpperCase()) > -1) : fonts;

    setFilter(updatedFilter);
    setFilteredFonts(updatedFonts);
  };

  const handleReset = () => {
    setFilter('');
    setFilteredFonts(fonts || []);
  };

  return(
    <main className="container container--x-large main main--bg-top">
      <Helmet>
        <title>Fonts - Lauren Ashpole</title>
      </Helmet>

      <section className="fonts__header">
        <h2 className="text--uppercase u--center">Fonts</h2>
      </section>

      <section className="well">
        <div className="fonts__filter">
          <form className="fonts__filter-form">
            <input className="input fonts__filter-input" type="text" id="filter" name="filter" placeholder="Search fonts" value={filter} onChange={handleChange} />
            <button className="fonts__filter-reset" disabled={!filter} onClick={handleReset}>
              <span className="fonts__filter-x" aria-label="Reset search"></span>
            </button>
          </form>
        </div>

        {filteredFonts.length > 0 ? (
          <ul className="well__row list--unstyled u--center fonts__grid">
            {filteredFonts.map((font) => {
              return (
                <li key={font._id} className="fonts__grid-item">
                  <Link className="fonts__grid-link" to={`/fonts/${font.slug}`} onClick={() => sendEvent('Fonts', 'click', font.name)}>
                    <img className="fonts__grid-img" src={`/uploads/images/${font.image}`} alt={`${font.name} Sample Characters`} />
                    <h3>{font.name}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="fonts__grid-empty well__row u--center">
            <h2>Sorry, there are no fonts with the name &quot;{filter}&quot;.</h2>
          </div>
        )}
      </section>
    </main>
  );
};

Fonts.propTypes = {
  fonts: PropTypes.array
};

export default Fonts;