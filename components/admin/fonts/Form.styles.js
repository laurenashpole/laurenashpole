import css from 'styled-jsx/css';

export default css.global`
  @import 'variables.scss';

  .form__section + .form__section {
    margin-top: 3rem;
    border-top: 1px solid $color-gray-light;
    padding-top: 3rem;
  }

  .form__subheading {
    margin: 0 0 2.5rem 0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .form__multi-select select.select__select {
    height: 18rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
  }

  .form__multi-select span {
    display: none;
  }

  .form__options {
    padding-bottom: 2rem;
  }

  .form__images {
    margin-bottom: 2rem;
    display: flex;
    overflow-x: auto;
  }

  .form__image {
    max-width: 20rem;

    & + .form__image {
      margin-left: 1rem;
    }
  }
`;