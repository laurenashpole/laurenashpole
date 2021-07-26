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
      content: '';
      background-image:
        url(abstract-squiggle-thin($color-pink-encoded)),
        url(abstract-lines($color-green-encoded)),
        url(abstract-dots($color-orange-encoded)),
        url(abstract-squiggle($color-blue-encoded)),
        url(node-circle()),
        url(node-square()),
        url(nodes());
      background-position:
        -5rem 12.5rem,
        -5rem 5rem,
        calc(100% - 3rem) calc(100% - 15.5rem),
        calc(100% + 3rem) calc(100% - 5rem);
      background-size: 25rem, 40rem, 12.5rem, 45rem, 0, 0, 0;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      min-height: 640px;
      position: fixed;
      top: 0;
      left: 50%;
      z-index: -2;
      transform: translateX(-50%) scaleX(-1);
    }
  }

  @media (min-width: 640px) {
    .layout__main:after {
      background-size: 32.5rem, 50rem, 15.5rem, 56rem, 0, 0, 0;
    }
  }

  @media (min-width: $break-tablet) {
    .layout__main {
      max-width: $width-desktop;
      margin: 0 auto;
      padding: 8rem 3rem 10rem 3rem;
      overflow: unset;

      &:after {
        min-height: $break-tablet;
        background-size: 32.5rem, 50rem, 15.5rem, 56rem, 0, 12.5rem, 12.5rem;
        background-position:
          1rem 25rem,
          5rem 7.5rem,
          calc(100% - 7.5rem) calc(100% - 25rem),
          calc(100% + 3rem) calc(100% - 12.5rem),
          0,
          calc(100% - 5rem) calc(100% - 40rem),
          62.5rem 12.5rem;
      }
    }
  }

  @media (min-width: $break-desktop) {
    .layout__main {
      padding: 12rem 3rem 14rem 3rem;

      &:after {
        max-width: $width-desktop-wide;
        background-size: 34.5rem, 55rem, 17rem, 62rem, 25rem, 12.5rem, 12.5rem;
        background-position:
          5rem 25rem,
          4rem 7.5rem,
          70% calc(100% - 25rem),
          calc(100% - 5rem) calc(100% - 12.5rem),
          calc(100% - 4rem) calc(100% - 32rem),
          calc(100% - 11rem) calc(100% - 40rem),
          67.5rem 12.5rem;
      }
    }
  }
`;