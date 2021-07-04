import css from 'styled-jsx/css';

export default css.global`
  @import 'keyframes.scss';
  @import 'svgs.scss';
  @import 'variables.scss';

  .header {
    width: 100%;
    border-bottom: 1px solid $color-gray-light;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;
  }

  .header__content {
    background: transparent;
    width: 100%;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.25s;
  }

  .header__content--bg {
    background: $color-gray-lightest;
  }

  .header__logo {
    width: 20%;
    max-width: 9.5rem;
    padding-left: 1.5rem;

    &:before {
      content: " ";
      background: url(logo($color-red-encoded));
      background-size: 100%;
      padding-bottom: 46.25%;
      display: block;
      color: $color-red;
      transition: transform 0.1s ease-out;
      transform: scale(0.95) rotate(0deg);
      transform-origin: center;
      backface-visibility: hidden;
    }

    &:hover:before,
    &:focus:before {
      transform: scale(1) rotate(-7.5deg);
    }

    span {
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
    }
  }

  .header__list {
    font-size: 1.55rem;
    font-weight: 600;
    letter-spacing: 0.125em;
    text-transform: uppercase;
    display: flex;
  }

  .header__item {
    position: relative;

    & + .header__item {
      border-left: 1px solid $color-gray-light;
    }
  }

  .header__link {
    padding: 0 1.5rem;
    color: $color-black;
    line-height: 3.25rem;
    display: block;

    &:hover,
    &:focus {
      color: $color-black;
      text-decoration: none;
    }
  }

  .header__link:before {
    content: none;
    border-top: 3px solid $color-purple;
    border-radius: 0 0 1px 1px;
    position: absolute;
    left: 1.5rem;
    right: 1.5rem;
    top: calc(-1.5rem - 1.5px);
    display: block;
  }

  .header__link:hover:before,
  .header__link:focus:before,
  .header__link[aria-current]:before {
    content: " ";
  }

  @media (min-width: $break-tablet) {
    .header {
      position: static;
    }

    .header__content {
      background: none;
      max-width: $width-desktop;
      margin: 0 auto;
      padding: 2rem 3rem 2rem 1.5rem;
    }

    .header__logo {
      max-width: 10.5rem;
    }

    .header__list {
      font-size: 1.75rem;
    }

    .header__item + .header__item {
      margin-left: 6rem;
      border-left: none;
    }

    .header__link {
      padding: 0.95rem 1.75rem 0.75rem 1.95rem;
      border-radius: 3px;
      position: relative;
      transition: background 0.15s linear 0.1s;
    }

    .header__link[aria-current] {
      background: $color-white;
    }

    .header__link[aria-current]:before {
      content: none;
    }

    .header__link:not([aria-current]):hover,
    .header__link:not([aria-current]):focus {
      background: $color-purple;
      transition: background 0.15s linear 0.3s, color 0.15s linear 0.3s;
      color: #fff;
    }

    .header__link:before,
    .header__link:after {
      content: " ";
      width: 0;
      height: 0;
      border: 2px solid transparent;
      border-radius: 3px;
      position: absolute;
    }

    .header__link:before {
      top: 0;
      left: 0;
      right: auto;
    }

    .header__link:after {
      bottom: 0;
      right: 0;
    }

    .header__link:not([aria-current]):hover:before,
    .header__link:not([aria-current]):hover:after {
      width: 100%;
      height: 100%;
      transition: width 0.15s ease-out, height 0.15s ease-out 0.15s;
    }

    .header__link:not([aria-current]):hover:before {
      border-top-color: $color-purple;
      border-right-color: $color-purple;
    }

    .header__link:not([aria-current]):hover:after {
      border-bottom-color: $color-purple;
      border-left-color: $color-purple;
    }

    .header__link:focus {
      animation: scale 0.2s;
    }
  }

  @media (min-width: $break-desktop) {
    .header__item + .header__item {
      margin-left: 8rem;
    }
  }
`;