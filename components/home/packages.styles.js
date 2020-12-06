import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .packages {
    text-align: center;

    h3 {
      margin: 1rem 0 2rem 0;
    }

    p {
      margin: 2.5rem 0;
      font-size: 2rem;
    }
  }

  .packages__item + .packages__item {
    margin-top: 3rem;
    border-top: 1px solid $color-gray-light;
    padding-top: 3rem;
  }

  .packages__item:last-child {
    padding-bottom: 2rem;
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
    .packages h3 {
      margin: 0 0 3rem 0;
    }

    .packages__list {
      width: calc(100% + 4rem);
      margin-left: -2rem;
      display: flex;
    }

    .packages__item {
      width: 33.333%;
      padding: 0 2rem;
    }

    .packages__item + .packages__item {
      margin: 0;
      border: none;
      border-left: 1px solid $color-gray-light;
      padding: 0 2rem;
    }
  }
`;