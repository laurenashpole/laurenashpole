import css from 'styled-jsx/css';

export default css.global`
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