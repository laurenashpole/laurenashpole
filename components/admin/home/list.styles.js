import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .list__section + .list__section {
    margin-top: 3rem;
  }

  @media (min-width: $break-tablet) {
    .list {
      display: flex;
    }

    .list__section {
      width: 50%;
    }

    .list__section + .list__section {
      margin-top: 0;
    }
  }
`;