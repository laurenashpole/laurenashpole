import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './tags.styles.js';

const Tags = ({ tags, source }) => {
  return (
    <ul className="tags">
      {Object.keys(tags).map((tag) => {
        return (
          <li key={tag}>
            <Link href={`/fonts/tagged/${tag}`}>
              <a className="tags__tag" data-ga-click={!!source} data-ga-category={source}>{tags[tag]}</a>
            </Link>
          </li>
        );
      })}

      <style jsx global>
        {styles}
      </style>
    </ul>
  );
};

Tags.propTypes = {
  tags: PropTypes.object,
  source: PropTypes.string
};

export default Tags;