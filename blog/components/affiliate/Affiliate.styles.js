import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
  @import 'variables.scss';

  .affiliate--permalink {
    border-top: 1px solid $color-gray-light;
  }

  .affiliate__container {
    background: $color-gray-lightest;
    padding: 3.5rem 2.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .affiliate--desktop {
    display: none;
  }

  .affiliate__banner--mobile {
    max-width: 300px;
    min-height: 250px;
  }

  .affiliate__text {
    padding-top: 1rem;
    color: $color-gray-darkest;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.075em;
  }

  @media (min-width: $break-tablet) {
    .affiliate__container {
      padding: 5.25rem 3.75rem;
    }
  }

  @media (min-width: $break-desktop) {
    .affiliate__container {
      padding: 8.5rem;
    }

    .affiliate--mobile {
      display: none;
    }

    .affiliate--desktop {
      display: flex;
    }

    .affiliate__banner--desktop {
      max-width: 728px;
      min-height: 90px;
    }
  }
`;