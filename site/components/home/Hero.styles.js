import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .hero {
    background-image: linear-gradient($color-gray-light 1px, transparent 1px);
    background-size: 7rem 7rem;
    margin-top: -1px;
    border-bottom: 1px solid $color-gray-light;
  }

  .hero__container {
    background-color: $color-gray-lightest;
    background-image: linear-gradient($color-gray-light 1px, transparent 1px);
    background-size: 7rem 7rem;
    min-height: calc(7rem * 11);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .hero__shapes {
    position: absolute;
    transform: scaleX(-1);
  }

  .hero__shapes--line-group {
    width: 42rem;
    right: -5rem;
    top: 5rem;
    color: $color-green;
  }

  .hero__shapes--squiggle {
    width: 50rem;
    left: -4rem;
    bottom: 5rem;
    color: $color-blue;
  }

  .hero__shapes--dot-group {
    width: 16rem;
    left: 4rem;
    bottom: 17rem;
    color: $color-orange;
  }

  .hero__letters {
    color: $color-purple;
    font-size: 32rem;
    line-height: 0.85;
    text-align: center;

    span {
      display: inline-block;
    }

    span:last-of-type {
      display: block;
    }

    span:nth-of-type(1) {
      transform: rotate(-10deg);
    }

    span:nth-of-type(2) {
      transform: rotate(5deg) translateY(3rem);
    }

    span:nth-of-type(3) {
      transform: rotate(-5deg) translateX(-3rem);
    }
  }

  .hero__link {
    margin-bottom: 7rem;
    padding: 3.5rem;
    position: relative;
    font-weight: 400;
    text-decoration: none;

    &:hover,
    &focus {
      text-decoration: none;
    }
  }

  .hero__badge {
    padding: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    color: $color-white;
    text-align: center;
  }

  .hero__badge--small {
    background: $color-red;
    width: 10rem;
    height: 10rem;
    transform: rotate(-15deg);
    top: calc(50% - 24rem);
    left: calc(50% - 21rem);
    font-size: 1.75rem;
  }

  .hero__badge--large {
    background: $color-orange;
    width: 16rem;
    height: 16rem;
    transform: rotate(10deg);
    right: calc(50% - 20rem);
    bottom: calc(50% - 32rem);
  }

  @media (min-width: $break-tablet) {
    .hero {
      background-size: 8.5rem 8.5rem;
    }

    .hero__container {
      min-height: calc(8.5rem * 9);
      background-size: 8.5rem 8.5rem;
    }

    .hero__shapes--line-group {
      width: 50rem;
      right: 5rem;
      top: 5rem;
    }

    .hero__shapes--dot-group {
      width: 19rem;
      left: 10rem;
      bottom: 24rem;
    }

    .hero__shapes--squiggle {
      width: 60rem;
      left: 5rem;
      bottom: 5rem;
    }

    .hero__letters {
      font-size: 40rem;

      span:last-of-type {
        display: inline-block;
      }

      span:nth-of-type(1) {
        transform: rotate(-12deg);
      }

      span:nth-of-type(2) {
        transform: rotate(5deg) translateY(5%);
      }

      span:nth-of-type(3) {
        transform: rotate(10deg) translateY(-2.5%);
      }
    }

    .hero__badge--small {
      width: 11rem;
      height: 11rem;
      left: calc(50% - 24rem);
      font-size: 2rem;
    }

    .hero__badge--large {
      width: 18rem;
      height: 18rem;
      bottom: calc(50% - 28rem);
      right: calc(50% - 27rem);
    }
  }

  @media (min-width: $break-desktop) {
    .hero__shapes--line-group {
      width: 56rem;
      right: 8rem;
      top: 6rem;
    }

    .hero__shapes--dot-group {
      width: 21rem;
      left: 14rem;
      bottom: 25rem;
    }

    .hero__shapes--squiggle {
      width: 67rem;
      left: 8rem;
      bottom: 5rem;
    }

    .hero__letters {
      font-size: 52rem;
    }

    .hero__badge--small {
      width: 13rem;
      height: 13rem;
      font-size: 2.25rem;
      top: calc(50% - 25rem);
      left: calc(50% - 54rem);
    }

    .hero__badge--large {
      width: 20rem;
      height: 20rem;
      bottom: calc(50% - 31rem);
      right: calc(50% - 56rem);
      font-size: 2.5rem;
    }
  }
`;
