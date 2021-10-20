import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .cart {
    margin: -1.5rem 0.75rem 1.5rem 0.75rem;
    position: sticky;
    bottom: 1.5rem;
    z-index: 2;
    pointer-events: none;

    button {
      width: 7rem;
      height: 7rem;
      margin-left: auto;
      border-radius: 50%;
      position: relative;
      color: $color-purple;
      letter-spacing: 0;
      pointer-events: auto;

      &:before {
        content: '';
        background: $color-white;
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
        border: 2px solid #fff;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 2rem);
      }
    }
  }

  .cart__count {
    font-size: 1.5rem;
    position: relative;
    z-index: 1;
  }

  .cart__item--total {
    padding-top: 2rem;
    font-weight: 600;
  }

  .cart__item + .cart__item {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid $color-gray-light;
  }

  .cart__item-row {
    display: flex;
    justify-content: space-between;
  }

  .cart__item-row--btns {
    font-size: 1.35rem;
    font-weight: 700;
    line-height: 2.25rem;
    letter-spacing: 0.075em;

    button {
      width: auto;
      line-height: 2.25rem;
      letter-spacing: 0.075em;
      display: block;
    }
  }

  .cart__qty {
    margin-right: -1rem;
    display: flex;

    button {
      padding: 0 1rem 0.25rem 1rem;
      font-size: 1.65rem;
      line-height: 2rem;
    }
  }

  @media (min-width: $break-tablet) {
    .cart {
      margin: -4rem 1.5rem 4rem 1.5rem;
      bottom: 4rem;
    }
  }

  @media (min-width: $break-desktop) {
    .cart {
      margin: -4rem 3rem 4rem 3rem;
    }
  }
`;