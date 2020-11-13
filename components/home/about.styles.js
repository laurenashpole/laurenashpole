import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
  @import 'variables.scss';

  .about {
    text-align: center;
  }

  .about__upcoming {
    margin-bottom: 3rem;
    border-bottom: 1px solid $color-gray-light;
    padding-bottom: 2rem;
    position: relative;

    > * {
      position: relative;
      z-index: 1;
    }

    p {
      margin-bottom: 1rem;
    }

    &:before {
      content: " ";
      background-image: url(abstract-blob($color-green-encoded));
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 95%;
      height: 95%;
      position: absolute;
      bottom: -3rem;
      left: 0;
      transform: scaleX(-1);
    }
  }

  .about__img {
    max-width: 37.5rem;
    margin: 0 auto;
  }

  @media (min-width: $break-tablet) {
    .about {
      display: flex;
      align-items: center;
    }

    .about__upcoming {
      width: 33.333%;
      margin: 0 4rem 0 0;
      border: none;
      border-right: 1px solid $color-gray-light;
      padding: 0 4rem 0 0;

      p {
        margin-bottom: 1.5rem;
      }

      &:before {
        bottom: -5rem;
        left: -2rem;
      }
    }
  }
`;