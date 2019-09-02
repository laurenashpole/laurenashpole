import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BASIC, ADDITIONAL } from '../constants/glyphs';

class Glyphs extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activeGlyphs: 'basic'
    };
  }

  handleClick = (name) => {
    this.setState({
      activeGlyphs: name
    });
  }

  render () {
    return(
      <section className="font__glyphs">
        <h2 className="font__heading text--uppercase u--center-mobile">Glyphs</h2>

        {this.props.font.commercial_file.additional_chars.is_included &&
          <ul className="text--uppercase text--medium text--extra-bold list--unstyled u--center-mobile">
            <li className="font__heading-link">
              <a href="javascript:void(0);" onClick={this.handleClick.bind(this, 'basic')}>Basic Characters</a>
            </li>
            <li className="font__heading-link">
              <a href="javascript:void(0);" onClick={this.handleClick.bind(this, 'additional')}>Additional Characters</a>
            </li>
          </ul>
        }

        {this.state.activeGlyphs === 'basic' ? (
          <div className={`font__glyphs-grid font-${this.props.font.slug}`}>
            {BASIC.map((char, i) => {
              return(
                <div key={i} className={`font__glyphs-char is-${char.type}`}>
                  <span className="font__glyphs-key">{char.glyph}</span>{char.glyph}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={`font__glyphs-grid font-${this.props.font.slug}`}>
            {ADDITIONAL.map((glyph, i) => {
              return(
                <div key={i} className="font__glyphs-char is-additional">
                  <span className="font__glyphs-key">{glyph}</span>{glyph}
                </div>
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

Glyphs.propTypes = {
  font: PropTypes.object
};

export default Glyphs;