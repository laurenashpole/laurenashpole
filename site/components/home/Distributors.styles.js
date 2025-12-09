import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .dist {
    border-top: 1px solid var(--color-gray-light);
    border-bottom: 1px solid var(--color-gray-light);
  }

  .dist__list {
    display: flex;
    flex-wrap: wrap;
  }

  .dist__item {
    width: 50%;
    border-bottom: 1px solid var(--color-gray-light);

    &:nth-child(2n + 2) {
      border-left: 1px solid var(--color-gray-light);
    }

    &:nth-last-child(-n + 2) {
      border-bottom: none;
    }
  }

  .dist__item--heading {
    background: var(--color-secondary);
    color: var(--color-white);
  }

  .dist__heading {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .dist__link {
    background: var(--color-gray-lightest);
    width: 100%;
    height: 100%;
    min-height: 18rem;
    padding: 2.5rem 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s linear;

    &:hover,
    &:focus {
      background: var(--color-white);
    }
  }

  .dist__img {
    max-width: 18.75rem;
  }

  @media (min-width: $break-tablet) {
    .dist__item {
      width: 25%;
      border-left: 1px solid var(--color-gray-light);

      &:nth-child(4n + 1) {
        border-left: none;
      }

      &:nth-last-child(-n + 4) {
        border-bottom: none;
      }
    }

    .dist__link {
      min-height: 21rem;
    }
  }
`;
