import css from 'styled-jsx/css';

export default css.global`
  @import 'keyframes.scss';
  @import 'variables.scss';

  .btn {
    background: none;
    width: 100%;
    padding: 0 1.5rem;
    border: 2px solid transparent;
    border-radius: $border-radius;
    color: $color-white;
    font-family: inherit;
    font-size: inherit;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.125em;
    line-height: 1.25em;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    transition: background 0.25s linear, color 0.25s linear, border-color 0.25s linear;

    &:focus:not(:focus-visible) {
      animation: scale 0.2s;
    }

    &:not(:focus-visible) {
      outline: none;
    }

    &[disabled] {
      pointer-events: none;
    }

    * {
      pointer-events: none;
    }
  }

  .btn--primary {
    background: $color-red;
    height: 7rem;
  }

  .btn--primary:hover,
  .btn--primary:focus {
    background: $color-red-hover;
  }

  .btn--outline {
    border-color: $color-red;
    height: 7rem;
    color: $color-red;
  }

  .btn--outline:hover,
  .btn--outline:focus {
    border-color: $color-red-hover;
    color: $color-red-hover;
    text-decoration: none;
  }

  .btn--secondary {
    background: $color-purple;
    height: 5.5rem;
  }

  .btn--secondary:hover,
  .btn--secondary:focus {
    background: transparent;
    border-color: $color-purple;
    color: $color-purple;
  }

  .btn--warning {
    background: $color-gray-darkest;
  }

  .btn--link {
    padding: 0;
    border: none;
    color: $color-purple;
    text-transform: none;
    letter-spacing: 0;
    line-height: inherit;
    display: inline;

    &:hover,
    &:focus {
      text-decoration: underline;
      animation: none;
    }
  }

  @media (min-width: $break-tablet) {
    .btn--primary {
      height: 8rem;
    }

    .btn--outline {
      height: 8rem;
    }

    .btn--secondary {
      height: 6rem;
    }
  }
`;
