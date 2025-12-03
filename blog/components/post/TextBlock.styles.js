import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .text__more {
    margin-top: 2.5rem;
  }

  @media (min-width: $break-tablet) {
    .text__more {
      margin-top: 4rem;
    }
  }

  @media (min-width: $break-desktop) {
    .text__more {
      margin-top: 6rem;
    }
  }
`;
