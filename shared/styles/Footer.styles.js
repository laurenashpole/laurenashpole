import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .footer {
    background: $color-white;
  }

  .footer__content {
    padding: 1.5rem 0;
  }

  .footer__social {
    display: flex;
  }

  .footer__social-item {
    width: 25%;
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

    &:focus,
    &:hover {
      color: $color-purple-hover;
    }
  }

  .footer__social-twitter {
    width: 22px;
    height: 18px;
  }

  .footer__social-pinterest {
    width: 17px;
    height: 21px;
  }

  .footer__social-github {
    width: 22px;
    height: 22px;
  }

  .footer__social-codepen {
    width: 26px;
    height: 26px;
  }

  @media (min-width: $break-tablet) {
    .footer {
      max-width: $width-desktop;
      margin: 0 auto;
      padding: 0 3rem;
      display: flex;
    }

    .footer__social {
      border-right: 1px solid $color-gray-light;
    }

    .footer__social-item {
      width: 8.5rem;
      height: 8.5rem;
      position: relative;

      &:before {
        content: " ";
        background: $color-purple;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transition: width 0.25s ease-out, height 0.25s ease-out, border-radius 0.25s ease-out;
        transform: translate3d(-50%, -50%, 0);
      }

      &:hover:before,
      &:focus:before {
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
    }

    .footer__social-link {
      color: $color-white;
      z-index: 1;

      &:focus,
      &:hover {
        color: $color-white;
      }
    }
  }
`;