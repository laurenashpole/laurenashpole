import React, { Component, Fragment } from 'react';
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
    return(
      <section>
        <h2 className="font__heading text--uppercase u--center-mobile">Preview</h2>

        <form>
          <div className="form__row--inline font-preview__inputs">
            <input className="input font-preview__input" type="text" name="previewText" id="previewText" defaultValue={this.state.previewText} onChange={this.handleChange} />

            <div className="select font-preview__select">
              <select className="select__input" name="previewSize" id="previewSize" defaultValue={this.state.previewSize} onChange={this.handleChange}>
                <option value="16">16px</option>
                <option value="24">24px</option>
                <option value="36">36px</option>
                <option value="48">48px</option>
                <option value="60">60px</option>
                <option value="72">72px</option>
                <option value="144">144px</option>
              </select>
              <span className="select__caret">
                <i className="fa fa-angle-down"></i>
              </span>
            </div>
          </div>

          <div className={`font-preview__text font-${this.props.font.slug}`} style={{fontSize: `${this.state.previewSize}px`}}>
            {this.state.previewText}
          </div>

          {this.props.font.alternate_style &&
            <Fragment>
              {this.props.font.alternate_style.split(', ').map((className) => {
                return(
                  <div className={`font-preview__text ${className}`} style={{fontSize: `${this.state.previewSize}px`}} key={className}>
                    {this.state.previewText}
                  </div>
                );
              })}
            </Fragment>
          }
        </form>
      </section>
    );
  }
}

Preview.propTypes = {
  font: PropTypes.object
};

export default Preview;