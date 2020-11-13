import PropTypes from 'prop-types';
import Link from 'next/link';
import Delete from './Delete';
import Well from '../../../components/shared/Well';
import Button from '../../../components/shared/Button';
import styles from './list.styles.js';

const List = ({ fonts }) => {
  return (
    <>
      <div className="list__create">
        <Link href="/admin/fonts/create">
          <Button type="primary" attributes={{ type: 'button' }}>+ Create a New Font</Button>
        </Link>
      </div>

      <Well>
        <h1>All Fonts</h1>

        <ul>
          {fonts.map((font) => {
            return (
              <li key={font._id} className="list__item">
                {font.name}

                <div className="list__btns">
                  <Link href={`/fonts/${font.slug}`}>
                    <Button type="secondary" attributes={{ type: 'button' }}>Preview</Button>
                  </Link>

                  <Link href={`/admin/fonts/${font.slug}`}>
                    <Button type="secondary" attributes={{ type: 'button' }}>Edit</Button>
                  </Link>

                  <Delete id={font._id} />
                </div>
              </li>
            );
          })}
        </ul>
      </Well>

      <style jsx global>
        {styles}
      </style>
    </>
  );
};

List.propTypes = {
  fonts: PropTypes.array
};

export default List;