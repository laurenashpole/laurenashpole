import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .link__link {
    padding-left: 6rem;
    display: inline-block;
    position: relative;
  }

  .link__link-icon {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: $color-purple;
    font-size: 4.25rem;
    line-height: 0.75;
  }

  @media (min-width: $break-tablet) {
    .link__link {
      padding-left: 7.5rem;
    }

    .link__link-icon {
      font-size: 5rem;
    }
  }

  @media (min-width: $break-desktop) {
    .link__link {
      padding-left: 10.5rem;
    }

    .link__link-icon {
      font-size: 6.75rem;
    }
  }
`;
