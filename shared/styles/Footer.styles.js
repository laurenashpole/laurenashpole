import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .footer {
    border-top: 1px solid $color-gray-light;
  }

  .footer__social {
    border-bottom: 1px solid $color-gray-light;
    display: flex;
  }

  .footer__social-item {
    width: 25%;
    min-height: 7rem;
    border-right: 1px solid $color-gray-light;
    display: flex;
    align-items: stretch;

    &:last-child {
      border: none;
    }
  }

  .footer__social-link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;

    &:focus,
    &:hover {
      background: $color-gray-lightest;
      color: $color-purple-hover;
    }
  }

  @media (min-width: $break-tablet) {
    .footer > div {
      min-height: 8.5rem;
    }

    .footer__content {
      display: flex;
    }

    .footer__social {
      border-bottom: 0;
    }

    .footer__social-item {
      width: 8.5rem;
      height: 8.5rem;

      &:last-child {
        border-right: 1px solid $color-gray-light;
      }
    }

    .footer__social-link {
      color: $color-white;
      position: relative;

      svg {
        position: relative;
        z-index: 1;
      }

      &:hover,
      &:focus {
        color: $color-white;
      }

      &:before {
        content: ' ';
        background: $color-purple;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transition:
          width 0.25s ease-out,
          height 0.25s ease-out,
          border-radius 0.25s ease-out;
        transform: translate3d(-50%, -50%, 0);
      }

      &:hover:before,
      &:focus:before {
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
    }
  }
`;
