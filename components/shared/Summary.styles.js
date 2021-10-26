import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .summary__list--border {
    border-top: 1px solid $color-gray-light;
    border-bottom: 1px solid $color-gray-light;
    padding: 1rem 0;
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