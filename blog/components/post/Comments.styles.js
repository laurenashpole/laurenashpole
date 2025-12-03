import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .comments {
    border-top: 1px solid $color-gray-light;
  }

  .comments__aside {
    display: none;
  }

  .comments__main {
    padding: 3.5rem 2.625rem;
  }

  .comments__heading {
    text-align: left;
    text-transform: uppercase;
  }
  
  @media (min-width: $break-tablet) {
    .well__section:first-child .comments__heading {
      margin: -1rem 0;
    }

    .comments__content {
      display: flex;
    }

    .comments__aside {
      background-image: 
        linear-gradient($color-gray-light 1px, transparent 1px),
        linear-gradient(90deg, $color-gray-light 1px, transparent 1px);
      background-size: 4.25rem 4.25rem;
      width: calc(8.5rem * 3.5);
      border-right: 1px solid $color-gray-light;
      margin: -1px 0 -1px -1px;
      padding: 5.25rem 3.75rem 0 0;
      flex-shrink: 0;
      display: block;
    }

    .comments__main {
      width: calc(100% - (8.5rem * 3.5));
      padding: 5.25rem 3.75rem;
    }
  }
  
  @media (min-width: $break-desktop) {
    .comments__aside {
      width: calc(8.5rem * 5);
    }

    .comments__main {
      width: calc(100% - (8.5rem * 5));
      padding: 8.5rem;
    }
  }
`;