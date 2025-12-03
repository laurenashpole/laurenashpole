import PropTypes from 'prop-types';

import Input from '../../../../shared/components/Input';
import Checkbox from '../../../components/shared/Checkbox';
import Select from '../../../components/shared/Select';
import Textarea from '../../../components/shared/Textarea';
import styles from './Form.styles.js';

const FormBasics = ({ font, tags }) => {
  return (
    <>
      <section className="form__section">
        <div className="form__options">
          <Checkbox
            label="For sale"
            attributes={{
              name: 'active',
              defaultChecked: font.active ? font.active : false,
              value: true,
            }}
          />
        </div>

        <Input
          label="Name"
          attributes={{ type: 'text', name: 'name', defaultValue: font.name }}
        />
        <Textarea
          label="Description"
          textareaProps={{
            rows: '5',
            name: 'description',
            placeholder: 'Description',
            defaultValue: font.description,
          }}
        />

        <div className="form__multi-select">
          <Select
            label="Tags"
            hideLabel={true}
            selectProps={{
              multiple: true,
              name: 'tags',
              defaultValue: font.tags,
            }}
          >
            {tags.map((tag) => (
              <option key={tag._id} value={tag._id}>
                {tag.name}
              </option>
            ))}
          </Select>
        </div>

        <Input
          label="Date Created"
          attributes={{
            type: 'text',
            name: 'date_created',
            defaultValue: font.date_created,
          }}
        />
        <Input
          label="Date Modified"
          attributes={{
            type: 'text',
            name: 'date_modified',
            defaultValue: font.date_modified,
          }}
        />
        <Input
          label="Price"
          attributes={{
            type: 'text',
            name: 'price',
            defaultValue: font.price || '',
          }}
        />
        <Input
          label="Sale Price"
          attributes={{
            type: 'text',
            name: 'sale_price',
            defaultValue: font.sale_price || '',
          }}
        />
      </section>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

FormBasics.propTypes = {
  font: PropTypes.object,
  tags: PropTypes.array,
};

export default FormBasics;
