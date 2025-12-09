import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .posts__heading {
    text-align: center;
  }

  .posts__heading-text {
    margin: 0;
    padding: 5.25rem 3.5rem;
    color: var(--color-accent-orange);

    h1 {
      margin: 0;
      color: var(--color-black);
    }

    svg {
      margin-top: 2.625rem;
      width: 4rem;
      height: 2rem;
    }
  }

  @media (min-width: $break-tablet) {
    .posts__heading-text {
      padding: 6rem;

      svg {
        width: 4.75rem;
        height: 2.25rem;
        margin-top: 3rem;
      }
    }
  }

  @media (min-width: $break-desktop) {
    .posts__heading-text {
      padding: 8.5rem;

      svg {
        margin-top: 4.25rem;
        width: 5.5rem;
        height: 2.5rem;
      }
    }
  }
`;
