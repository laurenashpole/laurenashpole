import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
  @import 'variables.scss';

  .layout {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .layout__main {
    width: 100%;
    padding: 4rem 1.5rem 6rem 1.5rem;
    position: relative;
    flex-grow: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    &:after {
      content: " ";
      background-image: url(abstract-bg($color-green-encoded, $color-blue-encoded, $color-orange-encoded, $color-pink-encoded));
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% auto;
      background-position: center 7.5rem;
      width: 150%;
      max-width: 80rem;
      height: 100%;
      position: fixed;
      top: 0;
      left: 50%;
      z-index: -2;
      transform: translateX(-50%);
    }
  }

  @media (min-width: $break-mobile) {
    .layout__main {
      &:after {
        width: 125%;
        max-width: 90rem;
      }
    }
  }

  @media (min-width: $break-tablet) {
    .layout__main {
      max-width: $width-desktop;
      margin: 0 auto;
      padding: 8rem 3rem 10rem 3rem;
      overflow: unset;

      &:after {
        width: calc(100% - 2rem);
        max-width: none;
      }
    }
  }

  @media (min-width: $break-desktop) {
    .layout__main {
      padding: 12rem 3rem 14rem 3rem;

      &:after {
        max-width: $width-desktop-wide;
      }
    }
  }
`;