import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .container {
    min-height: calc(7rem * 1.5);
  }

  @media (min-width: $break-container) {
    .container {
      width: 100%;
      max-width: calc(#{$width-desktop-wide} - 2px);
      min-height: calc(8.5rem * 1.5);
      margin: 0 auto;
    }
  }
`;
