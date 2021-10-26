import PropTypes from 'prop-types';
import Button from '../../shared/components/Button';
import styles from './Summary.styles.js';

const Summary = ({ items, name, onAdd, onRemove, total }) => {
  return(
    <ul className={total ? '' : 'summary__list--border'}>
      {(items || []).map((item, i) => {
        return (
          <li key={i} className="summary__item">
            <div className="summary__row">
              <span>{item.name}</span>
              {item.downloadPath ? (
                <a href={item.downloadPath}>Download<span className="sr-only">{item.name}</span></a>
              ) : <span>${item.price * item.qty}</span>}
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
  items: PropTypes.array,
  name: PropTypes.string,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func
};

export default Summary;