import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .dist__list {
    display: flex;
    flex-wrap: wrap;
  }

  .dist__item {
    width: 50%;
    border-bottom: 1px solid $color-gray-light;
    padding: 1.5rem 2.5rem;
    display: flex;
    align-items: center;

    &:nth-child(2n+2) {
      border-left: 1px solid $color-gray-light;
    }

    &:nth-last-child(-n+2) {
      border-bottom: none;
    }
  }

  .dist__link {
    width: 100%;
    max-width: 18.75rem;
    min-height: 10.625rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  @media (min-width: $break-tablet) {
    .dist__heading br {
      display: none;
    }

    .dist__item {
      width: 25%;
      border-left: 1px solid $color-gray-light;
      padding: 2.5rem;
      position: relative;

      &:nth-child(4n+1) {
        border-left: none;
      }

      &:nth-last-child(-n+4) {
        border-bottom: none;
      }
    }
  }
`;