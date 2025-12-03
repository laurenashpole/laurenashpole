import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';
  @import 'svgs.scss';

  .posts__heading {
    text-align: center;
  }  

  .posts__heading-text {
    margin: 0;
    padding: 5.25rem 3.5rem;

    &:after {
      content: '';
      background: url(abstract-line-hr($color-orange-encoded)) no-repeat;
      width: 4rem;
      height: 2rem;
      margin: 2.625rem auto 0 auto;
      display: block;
    }
  }

  @media (min-width: $break-tablet) {
    .posts__heading-text {
      padding: 6rem;

      &:after {
        width: 4.75rem;
        height: 2.25rem;
        margin: 3rem auto 0 auto;
      }
    }
  }

  @media (min-width: $break-desktop) {
    .posts__heading-text {
      padding: 8.5rem;

      &:after {
        width: 5.5rem;
        height: 2.5rem;
        margin: 4.25rem auto 0 auto;
      }
    }
  }
`;