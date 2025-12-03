import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .pagination {
    // margin-top: 4rem;
    display: flex;
    text-transform: uppercase;
    letter-spacing: 0.075em;
  }

  .pagination__item--next {
    margin-left: auto;
  }

  @media (min-width: $break-tablet) {
    .pagination {
      // margin: 7rem 0 0 25%;
    }
  }

  @media (min-width: $break-desktop) {
    // .pagination {
    //   margin-top: 9rem;
    // }
  }
`;