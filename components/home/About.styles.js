import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .about {
    border-bottom: 1px solid $color-gray-light;
    border-top: 1px solid $color-gray-light;
    text-align: center;
  }

  .about__desc {
    padding: 5.25rem 3.5rem;
  }

  .about__upcoming {
    background: $color-gray-lightest;
    border-top: 1px solid $color-gray-light;
    padding: 5.25rem 3.5rem;
  }

  .about__img {
    max-width: 27.5rem;
    margin: 0 auto;
  }

  @media (min-width: $break-tablet) {
    .about__content {
      width: 100%;
      display: flex;
      align-items: center;
    }

    .about__desc {
      padding: 4rem;
      flex-grow: 1;

      p {
        max-width: 70rem;
        margin: 0 auto;
      }
    }

    .about__upcoming {
      width: calc(15rem * 3 + 8.5rem + 3px);
      border: none;
      border-left: 1px solid $color-gray-light;
      padding: 6rem 4rem;

      p {
        margin-bottom: 2rem;
        font-size: 2rem;
      }
    }
  }
`;
