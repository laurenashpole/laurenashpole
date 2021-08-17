import PropTypes from 'prop-types';
import Link from 'next/link';
import Tags from '../../shared/components/Tags';
import styles from './Details.styles.js';

const Details = ({ font, tags }) => {
  const {
    date_created,
    date_modified,
    description,
    commercial_font_file,
    commercial_file,
    personal_font_file,
    personal_file
  } = font;

  return(
    <section className="details">
      <h3>Details</h3>

      <ul className="details__inline">
        <li className="details__link">
          <Link href="/fonts/licensing">
            <a>Licensing Info</a>
          </Link>
        </li>

        <li className="details__link">
          <Link href="/fonts/eula">
            <a>View EULA</a>
          </Link>
        </li>
      </ul>

      <div>
        Created: {date_created}
        {date_modified && <span> / Modified: {date_modified}</span>}
      </div>

      {description && <div className="details__desc" dangerouslySetInnerHTML={{__html: description}} />}

      <div className="details__inline">
        {personal_font_file &&
          <ul className="details__list">
            <li>
              <h4>Personal Use Details</h4>
            </li>

            {Object.keys(personal_file).map((detail) => {
              return personal_file[detail].is_included ? <li key={personal_file[detail].name}>{personal_file[detail].name}</li> : '';
            })}
          </ul>
        }

        {commercial_font_file &&
          <ul className="details__list">
            <li>
              <h4>Commercial Use Details</h4>
            </li>

            {Object.keys(commercial_file).map((detail) => {
              return commercial_file[detail].is_included ? <li key={commercial_file[detail].name}>{commercial_file[detail].name}</li> : '';
            })}
          </ul>
        }
      </div>

      {tags && tags.length > 0 &&
        <div className="details__inline">
          <span className="details__tag-heading">Tagged:</span>
          <Tags tags={tags} path="/fonts/tagged" source="font page" />
        </div>
      }

      <style jsx global>
        {styles}
      </style>
    </section>
  );
};

Details.propTypes = {
  font: PropTypes.object,
  tags: PropTypes.array
};

export default Details;