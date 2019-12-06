import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <section className="font__section font__glyphs">
        <div className="font__section-scroll" id="glyphs"></div>
        <h3 className="text--uppercase u--center-mobile">Glyphs</h3>

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
          <div className={`font__glyphs-grid u--center font-${this.props.font.slug}`}>
            {this.props.glyphs.basic.map((char, i) => {
              return(
                <div key={i} className={`font__glyphs-char is-${char.type}`}>
                  <span className="font__glyphs-key">{char.glyph}</span>{char.glyph}
                </div>
              );
            })}
          </div>
        ) : (
          <div className={`font__glyphs-grid u--center font-${this.props.font.slug}`}>
            {this.props.glyphs.additional.map((glyph, i) => {
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
  font: PropTypes.object,
  glyphs: PropTypes.object
};

export default Glyphs;