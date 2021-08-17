import css from 'styled-jsx/css';

export default css.global`
  @import 'svgs.scss';
  @import 'variables.scss';

  .content__heading {
    text-align: center;

    &:after {
      content: "";
      background: url(abstract-line-hr($color-pink-encoded));
      background-repeat: no-repeat;
      width: 4rem;
      height: 2rem;
      margin: 1.5rem auto;
      display: block;
    }
  }

  .content__aside {
    display: none;
  }

  @media (min-width: $break-tablet) {
    .content__heading {
      &:after {
        width: 4.75rem;
        height: 2.25rem;
        margin-top: 2.5rem;
      }
    }
  }

  @media (min-width: $break-desktop) {
    .content__heading {
      &:after {
        width: 5.5rem;
        height: 2.5rem;
        margin: 2.5rem auto 2rem auto;
      }
    }

    .content__container {
      display: flex;
      align-items: flex-start;
    }

    .content__aside {
      width: 25%;
      padding: 2.5rem 6rem 2rem 2rem;
      text-align: right;
      flex-shrink: 0;
      position: sticky;
      top: calc(8rem + 4rem + 1px + 4rem);
      display: block;
    }

    .content__item {
      margin-bottom: 0.5rem;

      button {
        color: $color-gray-darkest;
        text-transform: uppercase;
        letter-spacing: 0.065em;
        text-align: right;
        display: inline;
      }

      button:hover,
      button:focus {
        color: $color-purple;
        text-decoration: none;
      }
    }

    .content__item--active {
      button {
        color: $color-purple;

        &:before {
          content: "\2014\00a0\00a0";
        }
      }
    }

    .content__main {
      width: 75%;
      border-left: 1px solid $color-gray-light;
      padding: 0 3rem 0 6rem;
    }
  }
`;