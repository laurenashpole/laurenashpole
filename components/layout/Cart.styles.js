import css from 'styled-jsx/css';

export default css.global`
  @import 'keyframes.scss';
  @import 'variables.scss';

  .cart {
    pointer-events: none;

    button {
      background: transparent;
      width: 7rem;
      height: 7rem;
      border-radius: 0;
      border: 0;
      border-left: 1px solid $color-gray-light;
      position: relative;
      color: $color-white;
      font-size: 1.5rem;
      letter-spacing: 0;
      pointer-events: auto;
      @include bg-animation($color-purple, $color-purple);

      &:hover,
      &:focus, {
        .cart__icon {
          &:before {
            transition: background 0.15s linear 0.3s;
            background: $color-white;
          }

          &:after {
            transition: border-color 0.15s linear 0.3s;
            border-color: $color-white;
          }
        }
      }
    }
  }

  .cart__icon {
    &:before {
      content: '';
      background: $color-purple;
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
      border: 2px solid $color-purple;
      border-radius: 50%;
      position: absolute;
      top: calc(50% - 2rem);
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }
  }

  .cart__count {
    padding-bottom: 1px;
    position: relative;
    z-index: 1;
  }

  @media (min-width: $break-tablet) {
    .cart {
      button {
        width: 8.5rem;
        height: 8.5rem;
      }
    }
  }
`;