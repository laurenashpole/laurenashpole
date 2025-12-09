import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .grid {
    margin-bottom: -1px;
  }

  .grid__item {
    border-bottom: 1px solid var(--color-gray-light);
    display: flex;
    align-items: center;
  }

  .grid__link {
    border: 1.25rem solid var(--color-white);
    position: relative;
    display: block;
  }

  .grid__img {
    border-radius: var(--border-radius);
    overflow: hidden;
    display: block;

    & > span {
      vertical-align: top;
    }
  }

  .grid__img + .grid__img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .grid__link:hover .grid__img + .grid__img {
    opacity: 1;
  }

  .grid__details {
    border-top: 1px solid var(--color-gray-light);
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    line-height: 5.5rem;
  }

  .grid__name {
    margin: 0;
    padding: 0 2rem;
    font: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .grid__actions {
    display: flex;
    align-items: center;
  }

  .grid__actions button {
    background: none;
    border: none;
    border-left: 1px solid var(--color-gray-light);
    padding: 0 2rem;
    appearance: none;
    font: inherit;
    text-transform: inherit;
    letter-spacing: inherit;
  }

  @media (min-width: $break-mobile) {
    .grid__list {
      width: calc(100% + 1px);
      display: flex;
      flex-wrap: wrap;
    }

    .grid__item {
      width: 33.333%;
    }

    .grid__item {
      border-right: 1px solid var(--color-gray-light);
    }
  }

  @media (min-width: $break-tablet) {
    .grid__details {
      font-size: 1.75rem;
      line-height: 6rem;
    }
  }
`;
