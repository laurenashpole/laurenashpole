import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .details {
    // border-bottom: 1px solid $color-gray-light;
    // // padding: 2rem 0 4rem 0;
    // padding-bottom: 5.25rem;
  }

  .details__inline {
    display: flex;
    flex-wrap: wrap;
  }

  .details__inline:not(:last-child) {
    padding-bottom: 3rem;
  }

  .details__link + .details__link {
    padding-left: 3rem;
  }

  .details__desc {
    padding-top: 3rem;
  }

  .details__list {
    width: 100%;
    padding-top: 1rem;

    li + li {
      margin-top: 0.5rem
    }
  }

  .details__tag-heading {
    padding: 0.5rem 0.5rem 0 0;
  }

  @media (min-width: $break-tablet) {
    .details {
      // padding: 2rem 0 6rem 0;
      // padding-bottom: 8.5rem;
    }

    .details__inline {
      padding: 1rem 0 0 0;
    }

    .details__inline:not(:last-child) {
      padding-bottom: 4rem;
    }

    .details__link + .details__link {
      padding-left: 4rem;
    }

    .details__desc {
      padding-top: 4rem;
    }

    .details__list {
      width: 50%;
    }
  }
`;