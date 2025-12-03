import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .order__summary {
    margin-top: 2.5rem;
  }

  @media (min-width: $break-tablet) {
    .order {
      display: flex;
      align-items: flex-start;
    }

    .order__summary {
      width: 40%;
      margin-top: 0;
      padding-left: 4.5rem;
      flex-shrink: 0;
    }
  }
`;
