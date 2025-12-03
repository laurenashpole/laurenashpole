import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .welcome {
    text-align: center;

    .tags {
      max-width: 50rem;
      margin: 0 auto;

      li:last-child {
        display: none;
      }
    }
  }

  .welcome__container {
    background: $color-gray-lightest;
    padding: 5.25rem 3.5rem;
  }

  .welcome__heading {
    padding: 0 2rem;
  }

  p.welcome__text {
    max-width: 64rem;
    margin: 0 auto 3rem auto;
    font-size: 2.15rem;
  }

  @media (min-width: $break-tablet) {
    .welcome {
      .tags {
        max-width: 75rem;

        li:last-child {
          display: block;
        }
      }
    }

    .welcome__container {
      padding: 8.5rem;
    }

    .welcome__heading {
      padding: 0 0 2rem 0;
    }

    p.welcome__text {
      font-size: 2.25rem;
    }
  }
`;