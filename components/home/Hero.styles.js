import css from 'styled-jsx/css';

export default css.global`
  @import 'keyframes.scss';
  @import 'variables.scss';

  .hero {
    padding-top: 4rem;
  }

  .hero__link {
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 2.5rem;
    font-weight: inherit;
    text-decoration: none;
    display: block;

    &:hover,
    &focus {
      text-decoration: none;
    }
  }

  .hero__img--top {
    padding: 0 2rem;
  }

  .hero__img + .hero__img {
    margin-top: 4rem;
  }

  .hero__pointer {
    background: $color-red;
    width: 60%;
    margin: 5rem auto 0 auto;
    border-radius: 4px 4px 0 0;
    padding: 1.5rem 1.5rem 0 1.5rem;
    color: $color-white;
    display: block;
    position: relative;
    text-align: center;

    &:after {
      content: " ";
      background: $color-red;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 4px 0;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate3d(-50%, -50%, 0) rotate(45deg);
    }
  }

  .hero__pointer + .hero__pointer {
    border-radius: 0 0 4px 4px;
    margin: 0 auto 7rem auto;
    padding: 0 1.5rem 1.5rem 1.5rem;

    &:after {
      content: none;
    }
  }

  @media (min-width: $break-tablet) {
    .hero {
      padding: 3rem 0 13rem 0;
    }

    .hero__link {
      max-width: calc(100% - 28rem);
      margin: 0;
      position: relative;
    }

    .hero__img--top {
      max-width: calc(100% - 8rem);
      padding: 0;
    }

    .hero__img + .hero__img {
      margin-top: 6rem;
    }

    .hero__pointer {
      width: auto;
      margin: 0;
      border-radius: 4px;
      padding: 2rem 2rem 2rem 2.5rem;
      display: inline-block;
      font-size: 2rem;
      text-align: left;
      white-space: nowrap;
      position: absolute;
      top: calc(50% - 15rem);
      left: calc(100% - 2rem);
      opacity: 0;
      animation: slideIn 1s 1s forwards;

      &:after {
        border-radius: 0 4px;
        top: 50%;
        left: 0;
        transform: translate3d(-50%, -50%, 0) rotate(45deg);
      }
    }

    .hero__pointer + .hero__pointer {
      min-width: 22rem;
      border-radius: 4px;
      padding: 2rem 2rem 2rem 2.5rem;
      top: calc(50% + 8rem);
      left: calc(100% + 6rem);
      animation-delay: 1.5s;

      &:after {
        content: " ";
      }
    }
  }

  @media (min-width: $break-desktop) {
    .hero {
      padding: 2rem 0 15rem 0;
    }

    .hero__pointer {
      left: calc(100% - 16rem);
    }

    .hero__pointer + .hero__pointer {
      left: calc(100% + 2rem);
    }
  }
`;