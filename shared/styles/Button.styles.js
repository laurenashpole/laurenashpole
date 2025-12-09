import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .btn {
    background: none;
    border: none;
    padding: 0;
    appearance: none;

    &[disabled] {
      pointer-events: none;
    }

    * {
      pointer-events: none;
    }

    &:not(:focus-visible) {
      outline: none;
    }
  }

  .btn--default {
    background: none;
    width: 100%;
    padding: 0 1.5rem;
    border: 2px solid transparent;
    border-radius: var(--border-radius);
    color: var(--color-white);
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
    transition:
      background 0.25s linear,
      color 0.25s linear,
      border-color 0.25s linear;

    &:focus:not(:focus-visible) {
      animation: scale 0.2s;
    }
  }

  .btn--primary {
    background: var(--color-primary);
    height: 7rem;
  }

  .btn--primary:hover,
  .btn--primary:focus {
    background: var(--color-primary-dark);
  }

  .btn--outline {
    border-color: var(--color-primary);
    height: 7rem;
    color: var(--color-primary);
  }

  .btn--outline:hover,
  .btn--outline:focus {
    border-color: var(--color-primary-dark);
    color: var(--color-primary-dark);
    text-decoration: none;
  }

  .btn--secondary {
    background: var(--color-secondary);
    height: 5.5rem;
  }

  .btn--secondary:hover,
  .btn--secondary:focus {
    background: transparent;
    border-color: var(--color-secondary);
    color: var(--color-secondary);
  }

  .btn--link {
    padding: 0;
    border: none;
    color: var(--color-secondary);
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
