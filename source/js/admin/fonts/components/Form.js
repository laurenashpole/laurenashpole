import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Growl from '../../../components/Growl';
import { request } from '../../../utilities/request';

class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      error: '',
      fireRedirect: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(this.form);

    request(this.props.action, formData, (response) => {
      if (response.success) {
        this.setState({fireRedirect: true});
        this.props.onSuccess(response.font);
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
      <form method="post" onSubmit={this.handleSubmit} ref={(el) => { this.form = el; }} encType="multipart/form-data">
        {this.state.error && <Growl message={this.state.error} />}
        {this.state.fireRedirect && <Redirect to={"/admin"} />}

        <div className="well">
          <div className="form__row">
            <input type="text" id="name" name="name" className="input input--label-inset" defaultValue={this.props.font.name} />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form__row">
            <textarea id="description" name="description" rows="5" className="textarea" placeholder="Description" defaultValue={this.props.font.description}></textarea>
          </div>

          <div className="form__row">
            <input type="text" id="dateCreated" name="date_created" className="input input--label-inset" defaultValue={this.props.font.date_created} />
            <label htmlFor="dateCreated">Date Created</label>
          </div>

          <div className="form__row">
            <input type="text" id="dateModified" name="date_modified" className="input input--label-inset" defaultValue={this.props.font.date_modified} />
            <label htmlFor="dateModified">Date Modified</label>
          </div>

          <div className="form__row">
            <input type="text" id="price" name="price" className="input input--label-inset" defaultValue={this.props.font.price} />
            <label htmlFor="price">Price</label>
          </div>

          <div className="form__row">
            <input type="file" id="imageCollection" name="image_collection"  className="input input--file input--label-inset" multiple />
            <label htmlFor="imageCollection">Image Collection</label>
          </div>

          <div className="form__row">
            {this.props.font.image_collection && this.props.font.image_collection.map(function (image) {
              return (
                <img key={image} src={`/images/fonts/${image}`} width="150" height="auto" />
              )
            })}
          </div>

          <div className="form__row">
            <input type="file" id="imageMain" name="image_main" className="input input--file input--label-inset" />
            <label htmlFor="imageMain">Image Main {this.props.font.image_main && <span>({this.props.font.image_main})</span>}</label>
          </div>

          <div className="form__row">
            <input type="file" id="imageMainRetina" name="image_main_retina" className="input input--file input--label-inset" />
            <label htmlFor="imageMainRetina">Image Main Retina {this.props.font.image_main_retina && <span>({this.props.font.image_main_retina})</span>}</label>
          </div>

          <div className="form__row">
            <div className="input input--label-inset">
              <label className="input__checkbox-label">
                <input
                  type="checkbox"
                  name="personal_file[ttf][is_included]"
                  className="input__checkbox"
                  value="true"
                  defaultChecked={this.props.font.personal_file ? this.props.font.personal_file.ttf.is_included : false}
                />
                TrueType Font
              </label>
              <label className="input__checkbox-label">
                <input
                  type="checkbox"
                  name="personal_file[otf][is_included]"
                  className="input__checkbox"
                  value="true"
                  defaultChecked={this.props.font.personal_file ? this.props.font.personal_file.otf.is_included : false}
                />
                OpenType Font
              </label>
            </div>
            <label>Personal File Includes</label>
          </div>

          <div className="form__row">
            <div className="input input--label-inset">
              <label className="input__checkbox-label">
                <input
                  type="checkbox"
                  name="commercial_file[ttf][is_included]"
                  className="input__checkbox"
                  value="true"
                  defaultChecked={this.props.font.commercial_file ? this.props.font.commercial_file.ttf.is_included : false}
                />
                TrueType Font
              </label>
              <label className="input__checkbox-label">
                <input
                  type="checkbox"
                  name="commercial_file[otf][is_included]"
                  className="input__checkbox"
                  value="true"
                  defaultChecked={this.props.font.commercial_file ? this.props.font.commercial_file.otf.is_included : false}
                />
                OpenType Font
              </label>
              <label className="input__checkbox-label">
                <input
                  type="checkbox"
                  name="commercial_file[webfont][is_included]"
                  className="input__checkbox"
                  value="true"
                  defaultChecked={this.props.font.commercial_file ? this.props.font.commercial_file.webfont.is_included : false}
                />
                Web Font Kit
              </label>
              <label className="input__checkbox-label">
                <input
                  type="checkbox"
                  name="commercial_file[additional_chars][is_included]"
                  className="input__checkbox"
                  value="true"
                  defaultChecked={this.props.font.commercial_file ? this.props.font.commercial_file.additional_chars.is_included : false}
                />
                Additional Characters (Latin-1)
              </label>
            </div>
            <label>Commercial File Includes</label>
          </div>

          <div className="form__row">
            <input type="file" id="cssFile" name="css_file" className="input input--file input--label-inset" />
            <label htmlFor="cssFile">CSS File {this.props.font.css_file && <span>({this.props.font.css_file})</span>}</label>
          </div>

          <div className="form__row">
            <input type="text" id="alternateStyle" name="alternate_style" className="input input--label-inset" defaultValue={this.props.font.alternate_style} />
            <label htmlFor="alternateStyle">Alternate Style Class</label>
          </div>

          <div className="form__row">
            <input type="file" id="personalFontFile" name="personal_font_file" className="input input--file input--label-inset" />
            <label htmlFor="personalFontFile">Personal Font File {this.props.font.personal_font_file && <span>({this.props.font.personal_font_file})</span>}</label>
          </div>

          <div className="form__row">
            <input type="file" id="commercialFontFile" name="commercial_font_file" className="input input--file input--label-inset" />
            <label htmlFor="commercialFontFile">Commercial Font File {this.props.font.commercial_font_file && <span>({this.props.font.commercial_font_file})</span>}</label>
          </div>

          <div className="form__row">
            <button type="submit" className="button button--cta-primary">
              {this.props.buttonText}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;