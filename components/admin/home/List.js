import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './list.styles.js';

const List = ({ items }) => {
  return (
    <div className="list">
      {items.map((item) => {
        return (
          <div key={item} className="list__section">
            <h3>{item}s</h3>

            <ul>
              <li>
                <Link href={`/admin/${item}s`}>
                  <a>See all {item}s</a>
                </Link>
              </li>

              <li>
                <Link href={`/admin/${item}s/create`}>
                  <a>Create {item}</a>
                </Link>
              </li>
            </ul>
          </div>
        );
      })}

      <style jsx global>
        {styles}
      </style>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array
};

export default List;