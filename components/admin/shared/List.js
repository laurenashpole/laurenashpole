import PropTypes from 'prop-types';
import Link from 'next/link';
import Delete from './Delete';
import Well from '../../../components/shared/Well';
import Button from '../../../components/shared/Button';
import styles from './list.styles.js';

const List = ({ name, items }) => {
  return (
    <>
      <div className="list__create">
        <Link href={`/admin/${name}s/create`}>
          <Button type="primary" attributes={{ type: 'button' }}>+ Create a New {name}</Button>
        </Link>
      </div>

      <Well>
        <h1 className="list__title">All {name}s</h1>

        <ul>
          {items.map((item) => {
            return (
              <li key={item._id} className="list__item">
                {item.url ? (
                  <Link href={item.url}>
                    {item.name}
                  </Link>
                ) : item.name}

                <div className="list__btns">
                  {item.slug &&
                    <Link href={`/${name}s/${item.slug}`}>
                      <Button type="secondary" attributes={{ type: 'button' }}>Preview</Button>
                    </Link>
                  }

                  {item.slug &&
                    <Link href={`/admin/${name}s/${item.slug}`}>
                      <Button type="secondary" attributes={{ type: 'button' }}>Edit</Button>
                    </Link>
                  }

                  <Delete id={item._id} name={name} />
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
  name: PropTypes.string,
  items: PropTypes.array
};

export default List;