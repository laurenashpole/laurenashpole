import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .box {
    background-size: 7rem 7rem;
    background-image: 
      linear-gradient($color-gray-light 1px, transparent 1px);
    margin-top: -1px;
    border-bottom: 1px solid $color-gray-light;
  }

  @media (min-width: $break-tablet) {
    .box {
      background-size: 8.5rem 8.5rem;
    }
  }
`;