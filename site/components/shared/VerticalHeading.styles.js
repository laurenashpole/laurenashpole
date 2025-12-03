import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .vertical-heading {
    background: $color-gray-lightest;
    width: calc(7rem - 1px);
    margin: 0;
    border-right: 1px solid $color-gray-light;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
  }

  .vertical-heading__text {
    padding: 0 3rem;
    position: absolute;
    top: 0;
    left: 0;
    line-height: calc(7rem - 1px);
    white-space: nowrap;
    transform: translate3d(-100%, 0 , 0) rotate(-90deg);
    transform-origin: top right;
  }

  @media (min-width: $break-tablet) {
    .vertical-heading  {
      width: calc(8.5rem - 1px);
    }

    .vertical-heading__text {
      padding: 0 4rem;
      line-height: calc(8.5rem - 1px);
    }
  }
`;