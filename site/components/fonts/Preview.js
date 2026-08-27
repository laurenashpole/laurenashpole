import { useState } from 'react';

import Input from '../../../shared/components/Input';
import Select from '../../components/shared/Select';
import styles from './Preview.module.css';

const Preview = ({ font }) => {
  const [text, setText] = useState('Enter your preview text');
  const [size, setSize] = useState('48');

  return (
    <section>
      <h3>Preview</h3>

      <form className={styles.form}>
        <div className={styles.input}>
          <Input
            label="Preview text"
            hideLabel={true}
            attributes={{
              type: 'text',
              placeholder: 'Enter your preview',
              value: text,
              onChange: (e) => setText(e.target.value),
            }}
          />
        </div>

        <div className={styles.select}>
          <Select
            label="Preview font size"
            hideLabel={true}
            selectProps={{
              value: size,
              onChange: (e) => setSize(e.target.value),
            }}
          >
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

      <div
        className={`${styles.preview} font-${font.slug}`}
        style={{ fontSize: `${size}px` }}
      >
        {text}
      </div>

      {font.previews.alternate_style &&
        font.previews.alternate_style.split(', ').map((className) => {
          return (
            <div
              key={className}
              className={`${styles.preview} ${className}`}
              style={{ fontSize: `${size}px` }}
            >
              {text}
            </div>
          );
        })}
    </section>
  );
};

export default Preview;
