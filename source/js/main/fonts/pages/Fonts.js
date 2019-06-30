import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { sendEvent } from '../../../utilities/analytics';

class Fonts extends Component {
  constructor (props) {
    super(props);

    this.state = {
      filteredFonts: props.fonts || [],
      filter: ''
    };
  }

  handleChange = (e) => {
    const filter = e ? e.target.value : '';

    this.setState({
      filter: filter
    }, () => {
      this.handleFilter()
    });
  }

  handleReset = (e) => {
    e.preventDefault();
    this.handleChange();
  }

  handleFilter = () => {
    this.setState({
      filteredFonts: this.props.fonts.filter((font) => font.name.toUpperCase().indexOf(this.state.filter.toUpperCase()) > -1)
    });
  }

  render () {
    return(
      <main className="main main--bg-header">
        <Helmet>
          <title>Fonts - Lauren Ashpole</title>
        </Helmet>

        <section className="fonts__header container container--large">
          <h2 className="text--uppercase">Fonts</h2>
        </section>

        <section className="fonts__content">
          <div className="container container--x-large">
            <form className="fonts__filter">
              <input className="input fonts__filter-input" type="text" id="filter" name="filter" placeholder="Search fonts" value={this.state.filter} onChange={this.handleChange} />
              <button className="fonts__filter-reset" disabled={!this.state.filter} onClick={this.handleReset}>
                <span className="fonts__filter-x" aria-label="Reset search"></span>
              </button>
            </form>

            <div className="fonts__grid">
              {this.state.filteredFonts.length > 0 ? (
                <Fragment>
                  {this.state.filteredFonts.map((font) => {
                    return (
                      <div className="fonts__grid-item" key={font._id}>
                        <Link
                          className="well fonts__grid-link"
                          to={`/fonts/${font.slug}`}
                          onClick={sendEvent}
                          data-ga-category="Fonts"
                          data-ga-action="click"
                          data-ga-label={font.name}
                        >
                          <img className="fonts__grid-img" src={`/images/fonts/${font.image}`} alt={`${font.name} Sample Characters`} />
                          <h3>{font.name}</h3>
                        </Link>
                      </div>
                    );
                  })}
                </Fragment>
              ) : (
                <h2 className="fonts__grid-empty">
                  Sorry, there are no fonts with the name "{this.state.filter}".
                </h2>
              )}
            </div>
          </div>
        </section>

        <section className="container container--medium">
          <div className="fonts__next">
            <div>
              <h3 className="text--uppercase">Here's what's coming up</h3>
              <p>So be sure to check back periodically or sign up for my mailing list.</p>
            </div>

            <div className="fonts__next-img">
              <img className="img--responsive" src="/images/next-font.png" alt="A preview of my next font!" />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Fonts;