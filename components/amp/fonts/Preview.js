import PropTypes from 'prop-types';
import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import Select from '../../shared/Select';
import styles from '../../fonts/Preview.styles.js';

const Preview = ({ font }) => {
  return (
    <section className="preview">
      <h3>Preview</h3>

      <form className="preview__form" method="post" action-xhr="/api/amp/fonts/preview" target="_top" on={`submit-success: AMP.setState({ text: event.response.text, classNames: 'preview__preview preview__preview--' + event.response.size + ' font-${font.slug}'})`}>
        <div className="preview__input">
          <Input label="Preview text" hideLabel={true} attributes={{ type: 'text', name: 'text', defaultValue: 'Enter your preview text', placeholder: 'Enter your preview' }} />
        </div>

        <div className="preview__select">
          <Select label="Preview font size" hideLabel={true} selectProps={{ name: 'size' }}>
            <option value="16">16px</option>
            <option value="24">24px</option>
            <option value="36">36px</option>
            <option value="48" selected>48px</option>
            <option value="60">60px</option>
            <option value="72">72px</option>
            <option value="144">144px</option>
          </Select>
        </div>

        <div className="preview__btn">
          <Button style="secondary" attributes={{ type: 'submit' }}>
            Try It!
          </Button>
        </div>

        <div className={`preview__preview preview__preview--48 font-${font.slug}`} data-amp-bind-text="text" data-amp-bind-class="classNames">
          Enter your preview text
        </div>

        {font.alternate_style && font.alternate_style.split(', ').map((className) => {
          return(
            <div key={className} className={`preview__preview preview__preview--48 ${className}`} data-amp-bind-text="text" data-amp-bind-class="classNames">
              Enter your preview text
            </div>
          );
        })}
      </form>

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