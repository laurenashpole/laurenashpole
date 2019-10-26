import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Growl from '../../../components/Growl';
import { fetchRequest } from '../../../utilities/fetchRequest';

const Form = ({ font, endpoint, buttonText, onSuccess }) => {
  const [error, setError] = useState('');
  const [fireRedirect, setFireRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let body = new FormData(e.target);
    body = parseTags(body);

    fetchRequest('post', body, endpoint, (response) => {
      if (response.font) {
        setFireRedirect(true);
        onSuccess(response.font);
      } else {
        if (response.err) {
          setError(response.err);
        }
      }
    });
  };

  const parseTags = (formData) => {
    const tagsString = formData.get('tagsString');

    if (tagsString) {
      tagsString.split(',').forEach((tag) => {
        formData.append('tags', tag.trim());
      });
    }

    return formData;
  };

  const {
    name,
    description,
    date_created,
    date_modified,
    price,
    image,
    image_collection,
    personal_file,
    commercial_file,
    css_file,
    alternate_style,
    personal_font_file,
    commercial_font_file,
    tags
  } = font;

  return(
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      {error && <Growl message={error} />}
      {fireRedirect && <Redirect to="/admin" />}

      <div className="well">
        <div className="form__row">
          <input type="text" id="name" name="name" className="input input--label-inset" defaultValue={name} />
          <label htmlFor="name">Name</label>
        </div>

        <div className="form__row">
          <textarea id="description" name="description" rows="5" className="textarea" placeholder="Description" defaultValue={description}></textarea>
        </div>

        <div className="form__row">
          <input type="text" id="tagsString" name="tagsString" className="input input--label-inset" defaultValue={tags ? tags.join(', ') : ''} />
          <label htmlFor="tagsString">Tags</label>
        </div>

        <div className="form__row">
          <input type="text" id="dateCreated" name="date_created" className="input input--label-inset" defaultValue={date_created} />
          <label htmlFor="dateCreated">Date Created</label>
        </div>

        <div className="form__row">
          <input type="text" id="dateModified" name="date_modified" className="input input--label-inset" defaultValue={date_modified} />
          <label htmlFor="dateModified">Date Modified</label>
        </div>

        <div className="form__row">
          <input type="text" id="price" name="price" className="input input--label-inset" defaultValue={price} />
          <label htmlFor="price">Price</label>
        </div>

        <div className="form__row">
          <input type="file" id="imageCollection" name="image_collection"  className="input input--file input--label-inset" multiple />
          <label htmlFor="imageCollection">Image Collection</label>
        </div>

        {image_collection && image_collection.length > 0 &&
          <div className="form__row form__images">
            {image_collection.map((image) => {
              return <img key={image} src={`/uploads/images/${image}`} />;
            })}
          </div>
        }

        <div className="form__row">
          <input type="file" id="image" name="image" className="input input--file input--label-inset" />
          <label htmlFor="image">Image {image && <span>({image})</span>}</label>
        </div>

        <div className="form__row">
          <div className="input input--label-inset input--checkbox">
            <label className="input__checkbox-label">
              <input type="checkbox" name="personal_file[ttf][is_included]" className="input__checkbox" value="true" defaultChecked={personal_file ? personal_file.ttf.is_included : false} />
              TrueType Font
            </label>

            <label className="input__checkbox-label">
              <input type="checkbox" name="personal_file[otf][is_included]" className="input__checkbox" value="true" defaultChecked={personal_file ? personal_file.otf.is_included : false} />
              OpenType Font
            </label>
          </div>
          <label>Personal File Includes</label>
        </div>

        <div className="form__row">
          <div className="input input--label-inset input--checkbox">
            <label className="input__checkbox-label">
              <input type="checkbox" name="commercial_file[ttf][is_included]" className="input__checkbox" value="true" defaultChecked={commercial_file ? commercial_file.ttf.is_included : false} />
              TrueType Font
            </label>

            <label className="input__checkbox-label">
              <input type="checkbox" name="commercial_file[otf][is_included]" className="input__checkbox" value="true" defaultChecked={commercial_file ? commercial_file.otf.is_included : false} />
              OpenType Font
            </label>

            <label className="input__checkbox-label">
              <input type="checkbox" name="commercial_file[webfont][is_included]" className="input__checkbox" value="true" defaultChecked={commercial_file ? commercial_file.webfont.is_included : false} />
              Web Font Kit
            </label>

            <label className="input__checkbox-label">
              <input type="checkbox" name="commercial_file[additional_chars][is_included]" className="input__checkbox" value="true" defaultChecked={commercial_file ? commercial_file.additional_chars.is_included : false} />
              Additional Characters (Latin-1)
            </label>
          </div>
          <label>Commercial File Includes</label>
        </div>

        <div className="form__row">
          <input type="file" id="cssFile" name="css_file" className="input input--file input--label-inset" />
          <label htmlFor="cssFile">CSS File {css_file && <span>({css_file})</span>}</label>
        </div>

        <div className="form__row">
          <input type="text" id="alternateStyle" name="alternate_style" className="input input--label-inset" defaultValue={alternate_style} />
          <label htmlFor="alternateStyle">Alternate Style Classes</label>
        </div>

        <div className="form__row">
          <input type="file" id="personalFontFile" name="personal_font_file" className="input input--file input--label-inset" />
          <label htmlFor="personalFontFile">Personal Font File {personal_font_file && <span>({personal_font_file})</span>}</label>
        </div>

        <div className="form__row">
          <input type="file" id="commercialFontFile" name="commercial_font_file" className="input input--file input--label-inset" />
          <label htmlFor="commercialFontFile">Commercial Font File {commercial_font_file && <span>({commercial_font_file})</span>}</label>
        </div>

        <div className="form__row">
          <button type="submit" className="button button--cta-primary">
            {buttonText}
          </button>
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  font: PropTypes.object,
  endpoint: PropTypes.string,
  buttonText: PropTypes.string,
  onSuccess: PropTypes.func
};

export default Form;