import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .well {
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
    background: $color-white;
    border-radius: 6px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .well + .well {
    margin-top: 5rem;
  }

  .well__section {
    padding: 2rem;

    &:not(:last-child) {
      border-bottom: 1px solid $color-gray-light;
    }

    h1:last-child,
    h3:last-child {
      margin-bottom: 0;
    }

    &:first-child h3 {
      text-align: center;
    }
  }

  @media (min-width: $break-tablet) {
    .well {
      max-width: none;
    }

    .well--medium {
      max-width: 110rem;
    }

    .well--small {
      max-width: 60rem;
    }

    .well--small {
      .well__section {
        padding: 3rem;
      }
    }

    .well--medium {
      .well__section {
        padding: 4rem 6rem;
      }

      .well__section:last-child {
        padding-bottom: 6rem
      }
    }

    .well + .well {
      margin-top: 7.5rem;
    }

    .well__section {
      padding: 4rem;
    }

    .well__section--sticky {
      background: $color-white;
      padding: 2rem 4rem;
      position: sticky;
      top: 0;
      z-index: 2;
    }
  }

  @media (min-width: $break-desktop) {
    .well + .well {
      margin-top: 10rem;
    }
  }
`;