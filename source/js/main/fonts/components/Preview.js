import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Preview extends Component {
  constructor (props) {
    super(props);

    this.state = {
      previewText: 'Enter your preview text',
      previewSize: '60'
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render () {
    const {
      slug,
      alternate_style
    } = this.props.font;

    return(
      <section className="font__section font__preview">
        <div className="font__section-scroll" id="preview"></div>
        <h3 className="text--uppercase u--center-mobile">Preview</h3>

        <form className="form__row--inline">
          <input className="input font__preview-input" type="text" name="previewText" id="previewText" defaultValue={this.state.previewText} onChange={this.handleChange} />

          <div className="select font__preview-select">
            <select className="select__input" name="previewSize" id="previewSize" defaultValue={this.state.previewSize} onChange={this.handleChange}>
              <option value="16">16px</option>
              <option value="24">24px</option>
              <option value="36">36px</option>
              <option value="48">48px</option>
              <option value="60">60px</option>
              <option value="72">72px</option>
              <option value="144">144px</option>
            </select>
            <span className="select__caret"></span>
          </div>
        </form>

        <div className={`font__preview-text font-${slug}`} style={{fontSize: `${this.state.previewSize}px`}}>
          {this.state.previewText}
        </div>

        {alternate_style && alternate_style.split(', ').map((className) => {
          return(
            <div className={`font__preview-text ${className}`} style={{fontSize: `${this.state.previewSize}px`}} key={className}>
              {this.state.previewText}
            </div>
          );
        })}
      </section>
    );
  }
}

Preview.propTypes = {
  font: PropTypes.object
};

export default Preview;