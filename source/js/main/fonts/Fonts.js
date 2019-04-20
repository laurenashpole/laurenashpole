import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { sendEvent } from '../../utilities/analytics';

class Fonts extends Component {
  constructor (props) {
    super(props);

    this.state = {
      filteredFonts: props.fonts || [],
      filter: ''
    };
  }

  handleChange = (e) => {
    let filter = e ? e.target.value : '';
    this.setState({ filter }, () => this.handleFilter());
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

  handleClick = (e) => {
    sendEvent(e);
  }

  render () {
    return(
      <main className="main container container--large">
        <Helmet>
          <title>Fonts - Lauren Ashpole</title>
        </Helmet>

        <h2 className="text--uppercase">Fonts</h2>

        <form className="font-grid__filter">
          <input className="input font-grid__filter-input" type="text" id="filter" name="filter" placeholder="Search fonts" value={this.state.filter} onChange={this.handleChange} />
          <div className={"font-grid__reset" + (this.state.filter ? ' font-grid__reset--active' : '')} aria-label="Reset search" onClick={this.handleReset}>
            <i className="fa fa-times"></i>
          </div>
        </form>

        <div className="font-grid">
          {this.state.filteredFonts.map((font) => {
            return (
              <Link
                className="well font-grid__item"
                to={`/fonts/${font.slug}`}
                key={font._id}
                onClick={this.handleClick}
                data-ga-category="Fonts"
                data-ga-action="click"
                data-ga-label={font.name}
              >
                <div className="font-grid__image">
                  <img className="font-grid__img" src={`/images/fonts/${font.image}`} alt={`${font.name} Sample Characters`} />

                  <svg className="font-grid__bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.8 381.5"><path d="M452.9 294.8c-26 17.8-62.1-2.7-86.6 10.7-27.9 15.2-23.3 76-39.3 76-80.8 0-75.1-77.1-141.3-115.5-59-34.3-102.8-39-131.7-57.9-25.4-16.6-51.8-33.3-54-82.2-.6-12.3 7.7-31.1 26.1-31.1 17.8 0 36.7 11 52.3 11 10 0 13.3-7.1 12.2-21-1.2-15-16.8-42.2-17.9-60C71.7 8.3 85-4.5 123.3 1.5c38.5 6 87.2 54.5 115.1 53.3 27.7-1.1 12.2-37.8 43.3-37.8 32.2 0 127 103.4 168.9 190 19.4 40 30 68.9 2.3 87.8z" fill="currentColor"/></svg>
                  <svg className="font-grid__bg" viewBox="0 0 552 419">
                    <path fill="currentColor" stroke="none" d="M183.6,414.2c-32.8-5.4-20.7-42.9-36.6-62c-19.5-23.3-63.6-23.1-91.4-27.4c-54.9-8.4-80.7-22.7-20.2-47.8 c72-29.9,138.8-54.5,199.4-106.3c33.7-28.7,61.3-62.4,89.3-96.6c16.8-20.6,43-63.5,70.6-71c83.2-22.5,45.2,107.2,81.3,136 c17.5,14,51,2.1,67,18.9c18.3,19.3,3,61.1-5.3,83.3C487.5,375.9,316,435.9,183.6,414.2z"/>
                  </svg>
                </div>
                <h3>{font.name}</h3>
              </Link>
            );
          })}
        </div>
      </main>
    );
  }
}

export default Fonts;