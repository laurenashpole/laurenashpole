import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .pagination {
    padding: 4.375rem 2.625rem;
    display: flex;
    text-transform: uppercase;
    letter-spacing: 0.075em;
  }

  .pagination__item--next {
    margin-left: auto;
  }

  @media (min-width: $break-tablet) {
    .pagination {
      padding: 5.25rem 3.75rem;
    }
  }

  @media (min-width: $break-desktop) {
    .pagination {
      padding: 6.375rem 8.5rem;
    }
  }
`;
