import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .packages {
    border-top: 1px solid $color-gray-light;
    border-bottom: 1px solid $color-gray-light;
    text-align: center;

    p {
      margin: 2.25rem 0 2.75rem 0;
    }

    & > div {
      position: relative;
    }
  }

  .packages__list {
    padding-left: 7rem;
  }

  .packages__item {
    padding: 3.5rem;
  }

  .packages__item + .packages__item {
    border-top: 1px solid $color-gray-light;
  }

  .packages__name {
    margin: 0;
    font-size: 2.5rem;
  }

  .packages__icons {
    display: flex;
    justify-content: center;

    li + li {
      margin-left: 1.5rem;
    }

    a {
      padding: 0 0.75rem 0.5rem 0.75rem;
      color: $color-gray-darkest;
      display: block;
      transition: color 0.25s linear;

      &:hover,
      &:focus {
        color: $color-red;
      }
    }
  }

  .packages__icon {
    width: 3.5rem;
    height: 3.5rem;
    display: block;
  }

  @media (min-width: $break-tablet) {
    .packages__list {
      display: flex;
    }

    .packages__item {
      width: 50%;
      padding: 8.5rem 3.5rem;
    }

    .packages__item + .packages__item {
      border: none;
      border-left: 1px solid $color-gray-light;
    }

    .packages__name {
      font-size: 2.75rem;
    }
  }
`;
