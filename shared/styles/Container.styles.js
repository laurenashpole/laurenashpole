import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .container {
    min-height: 10.5rem;
  }

  @media (min-width: $break-container) {
    .container {
      width: 100%;
      max-width: calc(#{$width-desktop-wide} - 2px);
      min-height: 12.75rem;
      margin: 0 auto;
    }
  }
`;
