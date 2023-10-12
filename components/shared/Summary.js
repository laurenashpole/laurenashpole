import PropTypes from 'prop-types';
import Button from '../../shared/components/Button';
import styles from './Summary.styles.js';

const Summary = ({ header, items, name, onAdd, onRemove, total }) => {
  return(
    <ul className={`summary ${total ? '' : 'summary--card'}`}>
      {header && <li className="summary__item summary__item--header">{header}</li>}

      {(items || []).map((item, i) => {
        return (
          <li key={i} className="summary__item">
            <div className="summary__row">
              <span>{item.name}</span>

              {item.downloadPath ? (
                <a href={item.downloadPath} aria-label={`Download ${item.name}`} data-ga-click="true" data-ga-category={name}>
                  <svg className="summary__download" aria-hidden="true" viewBox="0 0 34 25.2"><path fill="currentColor" d="M16.1 19.5c.5.5 1.4.5 1.9 0l6.3-5.2c.5-.5.5-1.4 0-1.9s-1.4-.5-1.9 0l-4 3v-14C18.3.6 17.7 0 17 0s-1.3.6-1.3 1.3v14l-4-3c-.5-.5-1.4-.5-1.9 0s-.5 1.4 0 1.9l6.3 5.3z"/><path fill="currentColor" d="M32.7 11.9c-.7 0-1.3.6-1.3 1.3v9.3H2.7v-9.3c0-.7-.6-1.3-1.3-1.3S0 12.5 0 13.3v10.6c0 .7.6 1.3 1.3 1.3h31.3c.7 0 1.3-.6 1.3-1.3V13.3c.1-.8-.5-1.4-1.2-1.4z"/></svg>
                </a>
              ) : (
                <div>
                  {item.sale_price && <span className="summary__item-price">${item.sale_price * item.qty}</span>}
                  <span className="summary__item-price">${item.price * item.qty}</span>
                </div>
              )}
            </div>

            {(onRemove || onAdd) &&
              <div className="summary__row summary__row--btns">
                <Button style="link" onClick={() => onRemove(item, item.qty)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': name }}>REMOVE<span className="sr-only"> {item.name} from {name}</span></Button>

                <div className="summary__qty">
                  <Button style="link" onClick={() => onRemove(item, 1)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': name }}><span aria-hidden="true">-</span><span className="sr-only">Decrease {item.name} quantity</span></Button>
                  {item.qty} LICENSE{item.qty !== 1 && 'S'}
                  <Button style="link" onClick={() => onAdd(item)} attributes={{ type: 'button', 'data-ga-click': true, 'data-ga-category': name }}><span aria-hidden="true">+</span><span className="sr-only">Increase {item.name} quantity</span></Button>
                </div>
              </div>
            }
          </li>
        );
      })}

      {total &&
        <li className="summary__item summary__item--total summary__row">
          <span>Total</span>
          <span>${total}</span>
        </li>
      }

      <style jsx global>
        {styles}
      </style>
    </ul>
  );
};

Summary.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array,
  name: PropTypes.string,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func
};

export default Summary;