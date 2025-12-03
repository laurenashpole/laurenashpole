import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .list__section {
    margin-bottom: 3rem;

    h3 {
      margin-bottom: 1.5rem;
    }

    &:last-child {
      margin-bottom: 1.5rem;
    }
  }

  @media (min-width: $break-tablet) {
    .list {
      display: flex;
      flex-wrap: wrap;
    }

    .list__section {
      width: 50%;
      margin-bottom: 5rem;

      &:last-child {
        margin-bottom: 1.5rem;
      }
    }
  }
`;