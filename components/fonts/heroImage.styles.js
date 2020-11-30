import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .hero-img {
    width: 100%;
    max-width: 62rem;
    margin: 0 auto 4rem auto;
    padding: 0 2rem;
  }

  @media (min-width: $break-tablet) {
    .hero-img {
      margin: -2rem auto 6rem auto;
      padding: 0;
    }
  }

  @media (min-width: $break-desktop) {
    .hero-img {
      margin: -4rem auto 8rem auto;
    }
  }
`;