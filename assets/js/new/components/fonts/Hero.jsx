import React, { Component } from 'react';

class Hero extends Component {
  constructor (props) {
    super(props);

    this.state = {
      font: this.props.font
    };
  }

  render () {
    return(
      <div className="font__section">
        <div className="container container--large">
          <div className="column--static bg--abstract">
            <span className="img--hero img--default">
              <figure className="img--bg" style={{backgroundImage: `url(/images/fonts/${this.props.font.image_main})`}}></figure>
            </span>
            <span className="img--hero img--retina">
              <figure className="img--bg" style={{backgroundImage: `url(/images/fonts/${this.props.font.image_main_retina})`}}></figure>
            </span>
          </div>

          <section className="column--fixed well well--no-padding font-hero__well">
            <div className="well__row">
              <div className="well__column">
                <h3 className="text--uppercase">
                  {this.props.font.name}
                </h3>

                <form className="text--medium" method="post" action="/fonts/{this.props.font.slug}/payment">
                  {this.props.font.commercial_font_file &&
                    <button
                      type="submit"
                      title="Buy Now"
                      className="button button--cta-primary"
                      data-ga-category="{this.props.font.name} Page"
                      data-ga-action="click"
                      data-ga-label="Buy Now"
                    >
                      <div className="button__text">
                        Purchase
                        <div className="text--extra-small">${this.props.font.price} Commercial Use</div>
                      </div>
                    </button>
                  }

                  {this.props.font.personal_font_file &&
                    <a
                      href={`/downloads/fonts/${this.props.font.personal_font_file}`}
                      className="button button--outline"
                      data-ga-category={`${this.props.font.name} Page`}
                      data-ga-action="click"
                    >
                      <div className="button__text">
                        Download
                        <div className="text--extra-small">$0 Personal Use</div>
                      </div>
                    </a>
                  }
                </form>
              </div>
            </div>

            <ul className="list--unstyled well__row">
              <li className="well__column font-hero__files">
                <i className="fa fa-desktop font-hero__files-icon"></i>
                Desktop
              </li>

              {this.props.font.commercial_file.webfont.is_included &&
                <li className="well__column font-hero__files">
                  <i className="fa fa-code font-hero__files-icon"></i>
                  Web
                </li>
              }
            </ul>
          </section>
        </div>
      </div>
    );
  }
};

export default Hero;