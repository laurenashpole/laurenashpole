import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .recent {
    border-top: 1px solid $color-gray-light;
    border-bottom: 1px solid $color-gray-light;

    & > div {
      padding-left: 7rem;
      position: relative;
    }
  }

  @media (min-width: $break-tablet) {
    .recent > div {
      padding-left: 8.5rem;
    }
  }
`;