import React, { Component, Fragment } from 'react';

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
      <section className="font__section">
        <div className="container container--large">
          <div className="column--static">
            <h2 className="font__heading text--uppercase u--center-mobile">Preview</h2>

            <form className="well well--no-padding">
              <div className="well__row">
                <div className="well__column form__row--inline font-example__inputs">
                  <input className="input font-example__input" type="text" name="previewText" id="previewText" defaultValue={this.state.previewText} onChange={this.handleChange} />

                  <div className="select font-example__select">
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
              </div>

              <div className={`well__row font-example__text font-${this.props.font.slug}`} style={{fontSize: `${this.state.previewSize}px`}}>
                <div className="well__column">
                  {this.state.previewText}
                </div>
              </div>

              {this.props.font.alternate_styles &&
                <Fragment>
                  {this.props.font.alternate_styles.map((className) => {
                    <div className={`well__row font-example__text ${className}`} style={{fontSize: `${this.state.previewSize}px`}} key={className}>
                      <div className="well__column">
                        {this.state.previewText}
                      </div>
                    </div>
                  })}
                </Fragment>
              }
            </form>
          </div>
        </div>
      </section>
    );
  }
};

export default Preview;