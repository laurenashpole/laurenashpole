import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './tags.styles.js';

const Tags = ({ tags, source }) => {
  return (
    <ul className="tags">
      {tags.map((tag) => {
        return (
          <li key={tag._id}>
            <Link href={`/fonts/tagged/${tag.slug}`}>
              <a className="tags__tag" data-ga-click={!!source} data-ga-category={source}>{tag.name}</a>
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
  tags: PropTypes.array,
  source: PropTypes.string
};

export default Tags;