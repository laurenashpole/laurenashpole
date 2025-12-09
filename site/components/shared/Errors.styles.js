import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .errors {
    margin-bottom: 2rem;
    color: var(--color-error);
    font-size: 2rem;
    text-align: center;
  }

  @media (min-width: $break-tablet) {
    .errors {
      margin-bottom: 3rem;
    }
  }
`;
