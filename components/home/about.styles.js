import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
  @import 'variables.scss';

  .about {
    text-align: center;

    h3 {
      margin: 1rem 0 2rem 0;
    }
  }

  .about__upcoming {
    margin-top: 3rem;
    border-top: 1px solid $color-gray-light;
    padding: 3rem 0 2rem 0;

    p {
      margin-bottom: 1rem;
    }
  }

  .about__img {
    max-width: 37.5rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (min-width: $break-tablet) {
    .about {
      display: flex;

      h3 {
        margin: 0 0 3rem 0;
      }

      p {
        max-width: 64rem;
        margin: 0 auto;
      }
    }

    .about__desc {
      width: 66.666%;
    }

    .about__upcoming {
      width: 33.333%;
      margin: 0 0 0 3rem;
      border: none;
      border-left: 1px solid $color-gray-light;
      padding: 0 0 0 3rem;

      p {
        margin-bottom: 1.5rem;
        font-size: 2rem;
      }

      &:before {
        bottom: -5rem;
        left: -2rem;
      }
    }

    .about__img {
      padding: 0;
    }
  }

  @media (min-width: $break-desktop) {
    .about__img {
      padding: 0 2rem;
    }

    .about__upcoming {
      margin-left: 4rem;
      padding-left: 4rem;
    }
  }
`;