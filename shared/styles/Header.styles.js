import css from 'styled-jsx/css';

export default css.global`
  @import 'keyframes.scss';
  @import 'svgs.scss';
  @import 'variables.scss';

  .header {
    background: $color-white;
    width: 100%;
    border-bottom: 1px solid $color-gray-light;
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
    background: $color-red;
    width: 7rem;
    height: 7rem;
    border-right: 1px solid $color-gray-light;
    overflow: hidden;
    transition: background 0.15s linear;

    &:before {
      content: " ";
      background: url(logo($color-white-encoded)) no-repeat;
      background-size: 65%;
      background-position: center;
      width: 100%;
      height: 100%;
      display: block;
      transform: rotate(-12.5deg) translateY(-0.25rem);
      backface-visibility: hidden;
      transition: background-image 0.15s linear;
    }

    &:hover,
    &:focus {
      background: $color-white;

      &:before {
        background-image: url(logo($color-red-encoded));
      }
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
    color: $color-black;
    position: relative;

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
    bottom: 0;
    display: block;
  }

  .header__link:hover:before,
  .header__link:focus:before,
  .header__link[aria-current]:before {
    content: " ";
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
      border-left: 1px solid $color-gray-light;
    }

    .header__link {
      min-width: 15rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: background 0.15s linear 0.1s;
      @include bg-animation($color-purple, $color-white);
    }

    .header__link[aria-current] {
      background: $color-gray-lightest;
    }

    .header__link[aria-current]:before {
      content: none;
    }
  }

  @media (min-width: $break-container) {
    .header__content {
      width: $width-desktop-wide;
      margin: 0 auto;
      border-left: 1px solid $color-gray-light;
      border-right: 1px solid $color-gray-light;
    }
  }
`;
