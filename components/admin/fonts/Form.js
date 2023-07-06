import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { FONT_OPTIONS } from '../../../constants/fontOptions';
import { request } from '../../../shared/utils/request';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import Textarea from '../../../components/shared/Textarea';
import Select from '../../../components/shared/Select';
import Checkbox from '../../../components/shared/Checkbox';
import Loader from '../../../components/shared/Loader';
import Errors from '../../../components/shared/Errors';
import styles from './Form.styles.js';

const Form = ({ font, tags, endpoint }) => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await request({
        endpoint: endpoint,
        body: new FormData(e.target)
      });

      router.push(response.redirect);
    } catch (err) {
      setIsProcessing(false);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      {error && <Errors errors={[error]} />}
      {font._id && <input type="hidden" name="_id" value={font._id} />}

      <section className="form__section">
        <div className="form__options">
          <Checkbox label="For sale" attributes={{ name: 'active', defaultChecked: font.active ? font.active : false, value: true }} />
        </div>
        <Input label="Name" attributes={{ type: 'text', name: 'name', defaultValue: font.name }} />
        <Textarea label="Description" textareaProps={{ rows: '5', name: 'description', placeholder: 'Description', defaultValue: font.description }} />
        <div className="form__multi-select">
          <Select label="Tags" hideLabel={true} selectProps={{ multiple: true, name: 'tags', defaultValue: font.tags }}>
            {tags.map((tag) => <option key={tag._id} value={tag._id}>{tag.name}</option>)}
          </Select>
        </div>
        <Input label="Date Created" attributes={{ type: 'text', name: 'date_created', defaultValue: font.date_created }} />
        <Input label="Date Modified" attributes={{ type: 'text', name: 'date_modified', defaultValue: font.date_modified }} />
        <Input label="Price" attributes={{ type: 'text', name: 'price', defaultValue: font.price || '' }} />
      </section>

      <section className="form__section">
        <h5 className="form__subheading">Distributors</h5>
        {FONT_OPTIONS.distributors.map((option) => <Input key={option.key} label={`${option.label} URL`} attributes={{ type: 'text', name: `distributors[${option.key}][url]`, defaultValue: font.distributors ? font.distributors[option.key].url : '' }} />
        )}
      </section>

      <section className="form__section">
        <h5 className="form__subheading">Images</h5>
        <Input label={`Image ${font.image ? `<span>(${font.image})</span>` : ''}`} attributes={{ type: 'file', name: 'image' }} />
        <Input label={`Horizontal Image ${font.image_horizontal ? `<span>(${ font.image_horizontal})</span>` : ''}`} attributes={{ type: 'file', name: 'image_horizontal' }} />
        <Input label={`Mobile Horizontal Image ${font.image_horizontal_mobile ? `<span>(${font.image_horizontal_mobile})</span>` : ''}`} attributes={{ type: 'file', name: 'image_horizontal_mobile' }} />
        <Input label="Image Collection" attributes={{ type: 'file', name: 'image_collection', multiple: true }} />

        {(font.image_collection || []).length > 0 &&
          <div className="form__images">
            {font.image_collection.map((image) => <img key={image} alt="" className="form__image" src={`/uploads/images/${image}`} />)}
          </div>
        }

        <Input label={`Pinterest Image ${font.image_pinterest ? `<span>(${font.image_pinterest})</span>` : ''}`} attributes={{ type: 'file', name: 'image_pinterest' }} />
      </section>

      <section className="form__section">
        <h5 className="form__subheading">Previews</h5>
        <Input label={`Preview Files ${(font.preview_files || []).length ? `<span>(${font.preview_files.join(', ')})</span>` : ''}`}  attributes={{ type: 'file', name: 'preview_files', multiple: true }} />
        <Input label="Alternate Style Classes" attributes={{ type: 'text', name: 'alternate_style', defaultValue: font.alternate_style }} />
        <Textarea label="Preview CSS" textareaProps={{ rows: '5', name: 'preview_css', placeholder: 'Preview CSS', defaultValue: font.preview_css }} />
      </section>

      <section className="form__section">
        <h5 className="form__subheading">Downloads</h5>
        <Input label={`Personal Font File ${font.personal_font_file ? `<span>(${ font.personal_font_file})</span>` : ''}`} attributes={{ type: 'file', name: 'personal_font_file' }} />

        <div className="form__options">
          {FONT_OPTIONS.personal_file.map((option) => {
            return <Checkbox key={`personal${option.key}`} label={option.label} attributes={{ name: `personal_file[${option.key}][is_included]`, defaultChecked: font.personal_file ? font.personal_file[option.key].is_included : false, value: true }} />;
          })}
        </div>

        <Input label={`Commercial Font File ${font.commercial_font_file ? '<span>(' + font.commercial_font_file + ')</span>' : ''}`} attributes={{ type: 'file', name: 'commercial_font_file' }} />

        <div className="form__options">
          {FONT_OPTIONS.commercial_file.map((option) => <Checkbox key={`commercial${option.key}`} label={option.label} attributes={{ name: `commercial_file[${option.key}][is_included]`, defaultChecked: font.commercial_file ? font.commercial_file[option.key].is_included : false, value: true }} />)}
        </div>
      </section>

      <Button style="primary" attributes={{ type: 'submit', disabled: isProcessing }}>
        {isProcessing ? <Loader /> : 'Submit'}
      </Button>

      <style jsx global>
        {styles}
      </style>
    </form>
  );
};

Form.propTypes = {
  font: PropTypes.object,
  tags: PropTypes.array,
  endpoint: PropTypes.string
};

export default Form;