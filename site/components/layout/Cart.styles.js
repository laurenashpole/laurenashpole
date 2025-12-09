import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .cart {
    pointer-events: none;

    button {
      background: transparent;
      width: 7rem;
      height: 7rem;
      border-radius: 0;
      border: 0;
      border-left: 1px solid var(--color-gray-light);
      position: relative;
      color: var(--color-white);
      font-size: 1.5rem;
      letter-spacing: 0;
      pointer-events: auto;

      &:hover,
      &:focus {
        background: var(--color-gray-lightest);
      }
    }
  }

  .cart__icon {
    &:before {
      content: '';
      background: var(--color-secondary);
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }

    &:after {
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      border: 2px solid var(--color-secondary);
      border-radius: 50%;
      position: absolute;
      top: calc(50% - 2rem);
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }
  }

  .cart__count {
    position: relative;
    z-index: 1;
  }

  @media (min-width: $break-tablet) {
    .cart {
      button {
        width: 8.5rem;
        height: 8.5rem;

        &:hover,
        &:focus {
          .cart__icon {
            &:before {
              transition: background 0.15s linear 0.3s;
              background: var(--color-white);
            }

            &:after {
              transition: border-color 0.15s linear 0.3s;
              border-color: var(--color-white);
            }
          }

          .cart__count {
            color: var(--color-secondary);
            transition: color 0.15s linear 0.3s;
          }
        }
      }
    }

    .cart__count {
      transition: none;
    }
  }
`;
