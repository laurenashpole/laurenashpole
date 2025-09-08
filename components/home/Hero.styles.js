import css from "styled-jsx/css";

export default css.global`
  @import "svgs.scss";
  @import "variables.scss";

  .hero {
    min-height: calc(7rem * 11);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:after {
      content: "";
      background-image: url(abstract-lines($color-green-encoded)),
        url(abstract-dots($color-orange-encoded)),
        url(abstract-squiggle($color-blue-encoded));
      background-position: -4rem 3rem, calc(100% - 4rem) calc(100% - 16rem),
        calc(100% + 4rem) calc(100% - 4rem);
      background-size: 42rem, 16rem, 50rem;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
      transform: scaleX(-1);
    }
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
      min-height: calc(8.5rem * 8);

      &:after {
        background-size: 50rem, 19rem, 60rem;
        background-position: 5rem 5rem, calc(100% - 10rem) calc(100% - 25rem),
          calc(100% - 5rem) calc(100% - 5rem);
      }
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
    .hero {
      &:after {
        background-size: 56rem, 21rem, 67rem;
        background-position: 8rem 5rem, calc(100% - 14rem) calc(100% - 26rem),
          calc(100% - 8rem) calc(100% - 5rem);
      }
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
