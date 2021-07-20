import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { FONT_OPTIONS } from '../../../constants/fontOptions';
import { request } from '../../../shared/utils/request';
import Input from '../../../components/shared/Input';
import Textarea from '../../../components/shared/Textarea';
import Select from '../../../components/shared/Select';
import Checkbox from '../../../components/shared/Checkbox';
import Button from '../../../components/shared/Button';
import Loader from '../../../components/shared/Loader';
import Errors from '../../../components/shared/Errors';
import styles from './form.styles.js';

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
      <Input label="Name" inputProps={{ type: 'text', name: 'name', defaultValue: font.name }} />
      <Textarea label="Description" textareaProps={{ rows: '5', name: 'description', placeholder: 'Description', defaultValue: font.description }} />
      <div className="form__multi-select">
        <Select label="Tags" hideLabel={true} selectProps={{ multiple: true, name: 'tags', defaultValue: font.tags }}>
          {tags.map((tag) => {
            return <option key={tag._id} value={tag._id}>{tag.name}</option>;
          })}
        </Select>
      </div>
      <Input label="Date Created" inputProps={{ type: 'text', name: 'date_created', defaultValue: font.date_created }} />
      <Input label="Date Modified" inputProps={{ type: 'text', name: 'date_modified', defaultValue: font.date_modified }} />
      <Input label="Price" inputProps={{ type: 'text', name: 'price', defaultValue: font.price || '' }} />
      <Input label={`Image ${font.image ? '<span>(' + font.image + ')</span>' : ''}`} inputProps={{ type: 'file', name: 'image' }} />
      <Input label={`Horizontal Image ${font.image_horizontal ? '<span>(' + font.image_horizontal + ')</span>' : ''}`} inputProps={{ type: 'file', name: 'image_horizontal' }} />
      <Input label={`Mobile Horizontal Image ${font.image_horizontal_mobile ? '<span>(' + font.image_horizontal_mobile + ')</span>' : ''}`} inputProps={{ type: 'file', name: 'image_horizontal_mobile' }} />
      <Input label="Image Collection" inputProps={{ type: 'file', name: 'image_collection', multiple: true }} />

      {font.image_collection && font.image_collection.length > 0 &&
        <div className="form__images">
          {font.image_collection.map((image) => {
            return <img key={image} className="form__image" src={`/uploads/images/${image}`} />;
          })}
        </div>
      }

      <Textarea label="Preview CSS" textareaProps={{ rows: '5', name: 'preview_css', placeholder: 'Preview CSS', defaultValue: font.preview_css }} />
      <Input label={`Preview Files ${font.preview_files ? '<span>(' + font.preview_files.join(', ') + ')</span>' : ''}`}  inputProps={{ type: 'file', name: 'preview_files', multiple: true }} />
      <Input label="Alternate Style Classes" inputProps={{ type: 'text', name: 'alternate_style', defaultValue: font.alternate_style }} />
      <Input label={`Personal Font File ${font.personal_font_file ? '<span>(' + font.personal_font_file + ')</span>' : ''}`} inputProps={{ type: 'file', name: 'personal_font_file' }} />

      <div className="form__options">
        {FONT_OPTIONS.personal_file.map((option) => {
          return <Checkbox key={`personal${option.key}`} label={option.label} inputProps={{ name: `personal_file[${option.key}][is_included]`, defaultChecked: font.personal_file ? font.personal_file[option.key].is_included : false, value: true }} />;
        })}
      </div>

      <Input label={`Commercial Font File ${font.commercial_font_file ? '<span>(' + font.commercial_font_file + ')</span>' : ''}`} inputProps={{ type: 'file', name: 'commercial_font_file' }} />

      <div className="form__options">
        {FONT_OPTIONS.commercial_file.map((option) => {
          return <Checkbox key={`commercial${option.key}`} label={option.label} inputProps={{ name: `commercial_file[${option.key}][is_included]`, defaultChecked: font.commercial_file ? font.commercial_file[option.key].is_included : false, value: true }} />;
        })}
      </div>

      <Button type="primary" attributes={{ type: 'submit', disabled: isProcessing }}>
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