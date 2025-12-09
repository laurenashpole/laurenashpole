import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .header {
    background: var(--color-white);
    width: 100%;
    border-bottom: 1px solid var(--color-gray-light);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;
  }

  .header__content {
    min-height: 7rem;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }

  .header__logo {
    background: var(--color-primary);
    width: 7rem;
    height: 7rem;
    border-right: 1px solid var(--color-gray-light);
    overflow: hidden;
    transition:
      background 0.15s linear,
      color 0.15s linear;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 65%;
      transform: rotate(-12.5deg) translateY(-0.25rem);
    }

    &:hover,
    &:focus {
      background: var(--color-white);
      color: var(--color-primary);
    }
  }

  .header__nav {
    display: flex;
  }

  .header__list {
    padding-right: 0.75rem;
    display: flex;
    font-size: 1.55rem;
    font-weight: 600;
    letter-spacing: 0.125em;
    text-transform: uppercase;
  }

  .header__link {
    height: 100%;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    color: var(--color-black);
    position: relative;

    &:hover,
    &:focus {
      color: var(--color-black);
      text-decoration: none;
    }
  }

  .header__link:before {
    content: none;
    border-top: 3px solid var(--color-secondary);
    border-radius: 0 0 1px 1px;
    position: absolute;
    left: 1.5rem;
    right: 1.5rem;
    bottom: 0;
    display: block;
  }

  .header__link:hover:before,
  .header__link:focus:before,
  .header__link[aria-current]:before {
    content: ' ';
  }

  @media (min-width: $break-tablet) {
    .header > div {
      min-height: 8.5rem;
    }

    .header__logo {
      width: 8.5rem;
      height: 8.5rem;
    }

    .header__list {
      padding-right: 0;
      font-size: 1.75rem;
    }

    .header__item {
      border-left: 1px solid var(--color-gray-light);
    }

    .header__link {
      min-width: 15rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .header a:not(.header__logo),
    .header button {
      &:not([aria-current]):hover,
      &:not([aria-current]):focus {
        background: var(--color-secondary);
        transition:
          background 0.15s linear 0.3s,
          color 0.15s linear 0.3s;
        color: var(--color-white);
      }

      &:before,
      &:after {
        content: ' ';
        width: 0;
        height: 0;
        border: 2px solid transparent;
        position: absolute;
      }

      &:before {
        top: 0;
        left: 0;
        right: auto;
      }

      &:after {
        bottom: 0;
        right: 0;
      }

      &:not([aria-current]):hover:before,
      &:not([aria-current]):hover:after {
        width: 100%;
        height: 100%;
        transition:
          width 0.15s ease-out,
          height 0.15s ease-out 0.15s;
      }

      &:not([aria-current]):hover:before {
        border-top-color: var(--color-secondary);
        border-right-color: var(--color-secondary);
      }

      &:not([aria-current]):hover:after {
        border-bottom-color: var(--color-secondary);
        border-left-color: var(--color-secondary);
      }
    }

    .header__link[aria-current] {
      background: var(--color-gray-lightest);
    }

    .header__link[aria-current]:before {
      content: none;
    }
  }

  @media (min-width: $break-container) {
    .header__content {
      width: var(--width-max);
      margin: 0 auto;
      border-left: 1px solid var(--color-gray-light);
      border-right: 1px solid var(--color-gray-light);
    }
  }
`;
