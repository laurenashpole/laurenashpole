import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../shared/components/Input';
import Select from '../../components/shared/Select';
import styles from './preview.styles.js';

const Preview = ({ font }) => {
  const [text, setText] = useState('Enter your preview text');
  const [size, setSize] = useState('48');

  return (
    <section className="preview">
      <h3>Preview</h3>

      <form className="preview__form">
        <div className="preview__input">
          <Input label="Preview text" hideLabel={true} attributes={{ type: 'text', placeholder: 'Enter your preview', value: text, onChange: (e) => setText(e.target.value) }} />
        </div>

        <div className="preview__select">
          <Select label="Preview font size" hideLabel={true} selectProps={{ value: size, onChange: (e) => setSize(e.target.value) }}>
            <option value="16">16px</option>
            <option value="24">24px</option>
            <option value="36">36px</option>
            <option value="48">48px</option>
            <option value="60">60px</option>
            <option value="72">72px</option>
            <option value="144">144px</option>
          </Select>
        </div>
      </form>

      <div className={`preview__preview font-${font.slug}`} style={{fontSize: `${size}px`}}>
        {text}
      </div>

      {font.alternate_style && font.alternate_style.split(', ').map((className) => {
        return(
          <div key={className} className={`preview__preview ${className}`} style={{fontSize: `${size}px`}}>
            {text}
          </div>
        );
      })}

      <style jsx global>
        {styles}
      </style>
    </section>
  );
};

Preview.propTypes = {
  font: PropTypes.object
};

export default Preview;