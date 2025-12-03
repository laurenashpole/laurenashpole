import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .details__inline {
    display: flex;
    flex-wrap: wrap;
  }

  .details__link + .details__link {
    padding-left: 3rem;
  }

  .details__desc {
    padding-top: 3rem;
  }

  .details__lists {
    padding-bottom: 3rem;
  }

  .details__list {
    width: 100%;
    padding-top: 1rem;

    li + li {
      margin-top: 0.5rem;
    }
  }

  .details__tag-heading {
    padding: 0.5rem 0.5rem 0 0;
  }

  @media (min-width: $break-tablet) {
    .details__inline {
      padding: 1rem 0 0 0;
    }

    .details__link + .details__link {
      padding-left: 4rem;
    }

    .details__lists {
      padding-bottom: 4rem;
    }

    .details__desc {
      padding-top: 4rem;
    }

    .details__list {
      width: 50%;
    }
  }
`;
