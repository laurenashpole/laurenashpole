import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { sendEvent } from '../../../utilities/analytics';

const Fonts = ({ fonts, tagName, tags }) => {
  const [filteredFonts, setFilteredFonts] = useState(fonts || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setFilteredFonts(fonts);
  }, [fonts]);

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

  if (tagName && !fonts.length) {
    return(
      <main className="container main">
        <Helmet>
          <title>{`${tagName} Fonts - Lauren Ashpole`}</title>
        </Helmet>

        <div className="well">
          <div className="well__row well__row--px-lg well__row--py-lg">
            <h2>Oh no! There&apos;s nothing here.</h2>
            <p>Sorry, there are no fonts tagged &quot;{tagName}&quot;.</p>
          </div>
        </div>
      </main>
    );
  }

  return(
    <main className="container container--x-large main main--bg-top fonts">
      <Helmet>
        <title>{`${tagName ? tagName + ' ' : ''}Fonts - Lauren Ashpole`}</title>
      </Helmet>

      <section className="fonts__header">
        <h2 className="u--center fonts__heading">{`${tagName ? tagName + ' ' : ''}Fonts`}</h2>

        {!tagName &&
          <ul className="list--unstyled text--uppercase text--small text--extra-bold fonts__tags">
            {Object.keys(tags).map((tag) => {
              return(
                <li key={tag}>
                  <Link className="tag" to={`/fonts/tagged/${tag}`}>{tags[tag].name}</Link>
                </li>
              );
            })}
          </ul>
        }
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
  fonts: PropTypes.array,
  tagName: PropTypes.string,
  tags: PropTypes.object
};

export default Fonts;