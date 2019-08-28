import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gallery extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activeImage: props.font.image_collection[0]
    };
  }

  handleClick = (e) => {
    let index = e.target.getAttribute('data-index');

    this.setState({
      activeImage: this.props.font.image_collection[index]
    });
  }

  render () {
    return(
      <section className="font__section">
        <div className="container container--large">
          <div className="column--static">
            <h2 className="font__heading text--uppercase u--center-mobile">Additional Images</h2>

            <div className="well gallery">
              <div className="gallery__main">
                <img src={`/images/fonts/${this.state.activeImage}`} alt={this.props.font.name} />
              </div>

              {this.props.font.image_collection_thumbnails.length > 1 &&
                <div className="gallery__thumbnails">
                  <div className="gallery__thumbnails-inner">
                    {this.props.font.image_collection_thumbnails.map((image, i) => {
                      return(
                        <div className="gallery__thumbnail" key={image}>
                          <img src={`/images/fonts/${image}`} alt={`${this.props.font.name} Thumbnail`} data-index={i} onClick={this.handleClick} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Gallery.propTypes = {
  font: PropTypes.object
};

export default Gallery;