import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';
  @import 'svgs.scss';

  .link__link {
    background: url(link($color-purple-encoded)) no-repeat left center;
    background-size: 4rem;
    padding-left: 6rem;
    display: inline-block;
  }

  .link__link--podcast {
    background: url(podcast($color-purple-encoded)) no-repeat left center;
  }

  @media (min-width: $break-tablet) {
    .link__link {
      background-size: 5rem;
      padding-left: 7.5rem;
    }
  }

  @media (min-width: $break-desktop) {
    .link__link {
      padding-left: 10.5rem;
      background-size: 6rem;
    }
  }
`;
