import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .container {
    min-height: 10.5rem;
  }

  @media (min-width: $break-container) {
    .container {
      width: 100%;
      max-width: $width-desktop-wide;
      min-height: 12.75rem;
      margin: 0 auto;
      border-left: 1px solid $color-gray-light;
      border-right: 1px solid $color-gray-light;
    }
  }
`;
