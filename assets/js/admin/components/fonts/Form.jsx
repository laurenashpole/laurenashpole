import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Growl from '../../../components/Growl';
import { request } from '../../../utilities/request';

class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      error: '',
      fireRedirect: '',
      name: '',
      description: '',
      date_created: '',
      date_modified: '',
      price: 0,
      image_collection: [],
      image: '',
      image_retina: '',
      image_main: '',
      image_thumbnail: '',
      image_thumbnail_retina: '',
      personal_file: {
        ttf: {
          is_included: false
        },
        otf: {
          is_included: false
        }
      },
      commercial_file: {
        ttf: {
          is_included: false
        },
        otf: {
          is_included: false
        },
        webfont: {
          is_included: false
        },
        additional_chars: {
          is_included: false
        }
      },
      css_file: '',
      alternate_style: '',
      personal_font_file: '',
      commercial_font_file: ''
    };

    if (this.props.font) {
      for (let prop in this.props.font) {
        if (prop === 'personal_file' || prop === 'commercial_file') {
          for (let fontFile in this.props.font[prop]) {
            if (this.props.font[prop][fontFile]) {
              this.state[prop][fontFile]['is_included'] = this.props.font[prop][fontFile]['is_included'] || false;
            }
          }
        } else {
          if (this.props.font[prop]) {
            this.state[prop] = this.props.font[prop];
          }
        }
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleCheckbox = (e) => {
    let nestedKeys = e.target.name.split('.');
    let nestedState = this.state;

    nestedState[nestedKeys[0]] = {
      ...nestedState[nestedKeys[0]], [nestedKeys[1]]: {
        ...nestedState[nestedKeys[0]][nestedKeys[1]], [nestedKeys[2]]: e.target.checked
      }
    };

    this.setState({
      nestedState
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    request(this.props.action, this.state, (response) => {
      if (response.success) {
        this.props.listener(response.data);
        this.setState({fireRedirect: true});
      } else {
        if (response.err) {
          this.handleError(response.err);
        }
      }
    });
  }

  handleError = (error) => {
    this.setState({error});
  }

  render () {
    return(
      <form method="post" action="{this.props.action}" onSubmit={this.handleSubmit}  encType="multipart/form-data">
        {this.state.error && <Growl message={this.state.error} />}
        {this.state.fireRedirect && <Redirect to={"/admin"} />}

        <div className="well">        
          <div className="form__row">
            <input type="text" id="name" name="name" className="input input--label-inset" onChange={this.handleChange} value={this.state.name} />
            <label htmlFor="name" className="text--uppercase text--extra-bold">Name</label>
          </div>

          <div className="form__row">
            <textarea id="description" name="description" rows="5" className="textarea" placeholder="Description" onChange={this.handleChange} value={this.state.description}></textarea>
          </div>

          <div className="form__row">
            <input type="text" id="dateCreated" name="date_created" className="input input--label-inset" onChange={this.handleChange} value={this.state.date_created} />
            <label htmlFor="dateCreated" className="text--uppercase text--extra-bold">Date Created</label>
          </div>

          <div className="form__row">
            <input type="text" id="dateModified" name="date_modified" className="input input--label-inset" onChange={this.handleChange} value={this.state.date_modified} />
            <label htmlFor="dateModified" className="text--uppercase text--extra-bold">Date Modified</label>
          </div>

          <div className="form__row">
            <input type="text" id="price" name="price" className="input input--label-inset" onChange={this.handleChange} value={this.state.price} />
            <label htmlFor="price" className="text--uppercase text--extra-bold">Price</label>
          </div>

          <div className="form__row">
            <input type="file" id="imageCollection" name="image_collection"  className="input input--file input--label-inset" onChange={this.handleChange} multiple />
            <label htmlFor="imageCollection" className="text--uppercase text--extra-bold">Image Collection</label>
          </div>

          <div className="form__row">
            {this.state.image_collection.length > 0 && this.state.image_collection.map(function (image) {
              return (
                <img key={image} src={`/images/fonts/${image}`} width="150" height="auto" />
              )
            })}
          </div>

          <div className="form__row">
            <input type="file" id="image" name="image" className="input input--file input--label-inset" onChange={this.handleChange} />
            <label htmlFor="image" className="text--uppercase text--extra-bold">Image {this.state.image && <span>({this.state.image})</span>}</label>
          </div>

          <div className="form__row">
            <input type="file" id="imageRetina" name="image_retina" className="input input--file input--label-inset" onChange={this.handleChange} />
            <label htmlFor="imageRetina" className="text--uppercase text--extra-bold">Image Retina {this.state.image_retina && <span>({this.state.image_retina})</span>}</label>
          </div>

          <div className="form__row">
            <input type="file" id="imageMain" name="image_main" className="input input--file input--label-inset" onChange={this.handleChange} />
            <label htmlFor="imageMain" className="text--uppercase text--extra-bold">Image Main {this.state.image_main && <span>({this.state.image_main})</span>}</label>
          </div>

          <div className="form__row">
            <input type="file" id="imageMainRetina" name="image_main_retina" className="input input--file  input--label-inset" onChange={this.handleChange} />
            <label htmlFor="imageMainRetina" className="text--uppercase text--extra-bold">Image Main Retina {this.state.image_main_retina && <span>({this.state.image_main_retina})</span>}</label>
          </div>

          <div className="form__row">
            <input type="file" id="imageThumbnail" name="image_thumbnail" className="input input--file input--label-inset" onChange={this.handleChange} />
            <label htmlFor="imageThumbnail" className="text--uppercase text--extra-bold">Image Thumbnail {this.state.image_thumbnail && <span>({this.state.image_thumbnail})</span>}</label>
          </div>

          <div className="form__row">
            <input type="file" id="imageThumbnailRetina" name="image_thumbnail_retina" className="input input--file input--label-inset" onChange={this.handleChange} />
            <label htmlFor="imageThumbnailRetina" className="text--uppercase text--extra-bold">Image Thumbnail Retina {this.state.image_thumbnail_retina && <span>({this.state.image_thumbnail_retina})</span>}</label>
          </div>

          <div className="form__row">
            <div className="input input--label-inset">
              <label className="input__checkbox-label">
                <input
                  type="checkbox"
                  name="personal_file.ttf.is_included"
                  className="input__checkbox"
                  defaultChecked={this.state.personal_file ? this.state.personal_file.ttf.is_included : false}
                  onChange={this.handleCheckbox}
                />
                TrueType Font
              </label>
              <label className="input__checkbox-label">
                <input
                  type="checkbox"
                  name="personal_file.otf.is_included"
                  className="input__checkbox"
                  defaultChecked={this.state.personal_file ? this.state.personal_file.otf.is_included : false}
                  onChange={this.handleCheckbox}
                />
                OpenType Font
              </label>
            </div>
            <label className="text--uppercase text--extra-bold">Personal File Includes</label>
          </div>

          <div className="form__row">
            <div className="input input--label-inset">
              <label className="input__checkbox-label">
                <input
                  type="checkbox"
                  name="commercial_file[ttf][is_included]"
                  className="input__checkbox"
                  defaultChecked={this.state.commercial_file ? this.state.commercial_file.ttf.is_included : false}
                  onChange={this.handleCheckbox}
                />
                TrueType Font
              </label>
              <label className="input__checkbox-label">            
                <input
                  type="checkbox"
                  name="commercial_file.otf.is_included"
                  className="input__checkbox"
                  defaultChecked={this.state.commercial_file ? this.state.commercial_file.otf.is_included : false}
                  onChange={this.handleCheckbox}
                />
                OpenType Font
              </label>
              <label className="input__checkbox-label">            
                <input
                  type="checkbox"
                  name="commercial_file.webfont.is_included."
                  className="input__checkbox"
                  defaultChecked={this.state.commercial_file ? this.state.commercial_file.webfont.is_included : false}
                  onChange={this.handleCheckbox}
                />
                Web Font Kit
              </label>
              <label className="input__checkbox-label">          
                <input
                  type="checkbox"
                  name="commercial_file.additional_chars.is_included"
                  className="input__checkbox"
                  defaultChecked={this.state.commercial_file ? this.state.commercial_file.additional_chars.is_included : false}
                  onChange={this.handleCheckbox}
                />
                Additional Characters (Latin-1)
              </label>
            </div>
            <label className="text--uppercase text--extra-bold">Commercial File Includes</label>
          </div>

          <div className="form__row">
            <input type="file" id="cssFile" name="css_file" className="input input--file input--label-inset" onChange={this.handleChange} />
            <label htmlFor="cssFile" className="text--uppercase text--extra-bold">CSS File {this.state.css_file && <span>({this.state.css_file})</span>}</label>
          </div>

          <div className="form__row">
            <input type="text" id="alternateStyle" name="alternate_style" className="input input--label-inset" onChange={this.handleChange} value={this.state.alternate_style} />
            <label htmlFor="alternateStyle" className="text--uppercase text--extra-bold">Alternate Style Class</label>
          </div>

          <div className="form__row">
            <input type="file" id="personalFontFile" name="personal_font_file" className="input input--file input--label-inset" onChange={this.handleChange} />
            <label htmlFor="personalFontFile" className="text--uppercase text--extra-bold">Personal Font File {this.state.personal_font_file && <span>({this.state.personal_font_file})</span>}</label>
          </div>

          <div className="form__row">
            <input type="file" id="commercialFontFile" name="commercial_font_file" className="input input--file input--label-inset" onChange={this.handleChange} />
            <label htmlFor="commercialFontFile" className="text--uppercase text--extra-bold">Commercial Font File {this.state.commercial_font_file && <span>({this.state.commercial_font_file})</span>}</label>
          </div>

          <div className="form__row">
            <button type="submit" className="button button--cta-primary button--hover-border text--uppercase text--extra-bold">
              {this.props.buttonText}
            </button>
          </div>
        </div>
      </form>
    )
  }
};

export default Form;