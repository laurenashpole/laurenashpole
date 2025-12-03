import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
  @import 'variables.scss';

  .page__aside {
    display: none;
  }

  .page__main {
    padding: 5.25rem;
  }

  @media (min-width: $break-desktop) {
    .page {
      min-height: calc(100vh - (8.5rem * 2) - 2px);
      display: flex;
    }

    .page__aside {
      background-size: 8.5rem 8.5rem;
      width: calc(8.5rem * 4);
      min-height: calc(100vh - (8.5rem * 2));
      margin: -1px 0 -1px -1px;
      border-bottom: 1px solid $color-gray-light;
      display: block;
    }

    .page__main {
      width: calc(100% - (8.5rem * 4));
      padding: 8.5rem;
      border-left: 1px solid $color-gray-light;
    }
  }
`;
