import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .summary--card {
    border: 1px solid $color-gray-light;
    border-radius: 6px;
  }

  .summary__item {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid $color-gray-light;

    &:last-child {
      margin: 0;
      border: none;
      padding: 0;
    }

    .summary--card & {
      margin: 0;
      padding: 1rem;
    }
  }

  .summary__item--header {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }

  .summary__item.summary__item--total {
    padding-top: 1rem;
    font-weight: 600;
  }

  .summary__row {
    display: flex;
    justify-content: space-between;
  }

  .summary__row--btns {
    font-size: 1.35rem;
    font-weight: 700;
    line-height: 2.25rem;
    letter-spacing: 0.075em;

    button {
      width: auto;
      line-height: 2.25rem;
      letter-spacing: 0.075em;
      display: block;
    }
  }

  .summary__download {
    height: 22px;
    width: auto;
    margin-left: 2rem;
    color: $color-purple;
    display: block;

    a:hover &,
    a:focus & {
      color: $color-purple-hover;
    }
  }

  .summary__qty {
    margin-right: -1rem;
    display: flex;

    button {
      padding: 0 1rem 0.25rem 1rem;
      font-size: 1.65rem;
      line-height: 2rem;
    }
  }
`;