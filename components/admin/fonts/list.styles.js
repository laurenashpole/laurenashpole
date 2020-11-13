import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .list__create {
    padding-bottom: 3rem;
  }

  .list__item {
    padding-bottom: 2rem;
  }

  .list__item + .list__item {
    padding-top: 2rem;
    border-top: 1px solid $color-gray-light;
  }

  .list__item:last-child {
    padding-bottom: 0;
  }

  .list__btns {
    padding-top: 1rem;
    font-size: 1.75rem;
    display: flex;

    button {
      height: 5rem;
    }

    * + * {
      margin-left: 1rem;
    }
  }

  @media (min-width: $break-tablet) {
    .list__create {
      width: 100%;
      max-width: 110rem;
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;

      button {
        max-width: 40.5rem;
      }
    }

    .list__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .list__btns {
      padding-top: 0;

      * + * {
        margin-left: 1.5rem;
      }
    }
  }
`;