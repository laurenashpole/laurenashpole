import PropTypes from 'prop-types';
import { MdOutlineFileDownload } from 'react-icons/md';

import Button from '../../../shared/components/Button';
import SrOnly from '../../../shared/components/SrOnly';
import styles from './Summary.module.css';

const Summary = ({ header, items, name, onAdd, onRemove, total }) => {
  return (
    <ul className={total ? '' : styles.card}>
      {header && (
        <li className={`${styles.header} ${styles.item}`}>{header}</li>
      )}

      {(items || []).map((item, i) => {
        return (
          <li key={i} className={styles.item}>
            <div className={styles.row}>
              <span>{item.name}</span>

              {item.downloadPath ? (
                <a
                  className={styles.download}
                  href={item.downloadPath}
                  aria-label={`Download ${item.name}`}
                  data-ga-click="true"
                  data-ga-category={name}
                >
                  <MdOutlineFileDownload />
                </a>
              ) : (
                <div>
                  {item.sale_price && (
                    <span className={styles.price}>
                      ${item.sale_price * item.qty}
                    </span>
                  )}

                  <span className={styles.price}>${item.price * item.qty}</span>
                </div>
              )}
            </div>

            {(onRemove || onAdd) && (
              <div className={`${styles.buttons} ${styles.row}`}>
                <Button
                  style="link"
                  onClick={() => onRemove(item, item.qty)}
                  attributes={{
                    type: 'button',
                    'data-ga-click': true,
                    'data-ga-category': name,
                  }}
                >
                  REMOVE
                  <SrOnly>
                    {' '}
                    {item.name} from {name}
                  </SrOnly>
                </Button>

                <div className={styles.qty}>
                  <Button
                    style="link"
                    onClick={() => onRemove(item, 1)}
                    attributes={{
                      type: 'button',
                      'data-ga-click': true,
                      'data-ga-category': name,
                    }}
                  >
                    <span aria-hidden="true">-</span>
                    <SrOnly>Decrease {item.name} quantity</SrOnly>
                  </Button>
                  {item.qty} LICENSE{item.qty !== 1 && 'S'}
                  <Button
                    style="link"
                    onClick={() => onAdd(item)}
                    attributes={{
                      type: 'button',
                      'data-ga-click': true,
                      'data-ga-category': name,
                    }}
                  >
                    <span aria-hidden="true">+</span>
                    <SrOnly>Increase {item.name} quantity</SrOnly>
                  </Button>
                </div>
              </div>
            )}
          </li>
        );
      })}

      {total && (
        <li className={`${styles.total} ${styles.item} ${styles.row}`}>
          <span>Total</span>
          <span>${total}</span>
        </li>
      )}
    </ul>
  );
};

Summary.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array,
  name: PropTypes.string,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Summary;
