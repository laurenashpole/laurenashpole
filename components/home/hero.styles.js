import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .hero__font {
    max-width: 62rem;
    margin: 0 auto;
    padding-top: 6rem;
    position: relative;
  }

  .hero__new {
    width: 9.5rem;
    height: 9.5rem;
    border: 2px dotted $color-red;
    border-radius: 50%;
    color: $color-red;
    font-size: 1.75rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.4;
    letter-spacing: 0.025em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -2rem;
    left: 0.5rem;
    z-index: 1;
    transform: rotate(-15deg);
  }

  .hero__cta {
    padding: 0 4rem 4rem 4rem;
    text-align: center;

    button {
      width: auto;
      margin: 0 auto;
      padding: 0 4rem;
    }
  }

  @media (min-width: $break-tablet) {
    .hero {
      display: flex;
      align-items: center;
      position: relative;
    }

    .hero__font {
      padding-top: 0;
      position: static;
    }

    .hero__new {
      width: 12.5rem;
      height: 12.5rem;
      font-size: 2rem;
      top: calc(50% - 22rem);
      left: calc(100% - 24rem);
      transform: rotate(15deg);
    }
  }
`;