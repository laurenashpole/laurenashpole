import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gallery extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  handleClick = (i) => {
    this.setState({
      activeIndex: i
    });
  }

  render () {
    const {
      name,
      image_collection,
      image_collection_thumbnails
    } = this.props.font;

    return(
      <section className="font__gallery">
        <h2 className="font__heading text--uppercase u--center-mobile">Additional Images</h2>

        <img src={`/uploads/images/${image_collection[this.state.activeIndex]}`} alt={name} />

        {image_collection_thumbnails.length > 1 &&
          <div className="font__gallery-thumbnails">
            {image_collection_thumbnails.map((image, i) => {
              return(
                <div className="font__gallery-thumbnail" key={image}>
                  <img src={`/uploads/images/${image}`} alt={`${name} Thumbnail`} onClick={this.handleClick.bind(this, i)} />
                </div>
              );
            })}
          </div>
        }
      </section>
    );
  }
}

Gallery.propTypes = {
  font: PropTypes.object
};

export default Gallery;